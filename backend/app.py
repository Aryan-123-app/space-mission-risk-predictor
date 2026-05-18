from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load trained model
# Note: Ensure the model file is present in 'backend/model/xgboost_model.pkl'
model_path = os.path.join(os.path.dirname(__file__), "model", "xgboost_model.pkl")
try:
    model = joblib.load(model_path)
    print("✅ ML Model loaded successfully")
except Exception as e:
    print(f"❌ Error loading model: {str(e)}")
    model = None


# Root endpoint
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "🚀 GravitX API is running. Ready for production!"})


# Prediction endpoint
@app.route("/predict", methods=["POST"])
def predict():
    if not model:
        return jsonify({"error": "Model not loaded on server."}), 500

    try:
        data = request.get_json()
        
        # Extract parameters
        payload_mass = float(data.get('payload_mass', 0))
        launch_year = int(data.get('launch_year', 2026))
        weather = data.get('weather', 'Clear Skies')
        rocket_success_rate = float(data.get('rocket_success_rate', 90))
        launch_site_risk = float(data.get('launch_site_risk', 50))

        # Map weather to a dummy launch_month for the model
        weather_map = {"Clear Skies": 6, "Cloudy": 4, "Stormy": 11}
        launch_month = weather_map.get(weather, 6)

        # Prepare input for model
        input_data = np.array([[
            payload_mass,
            launch_year,
            launch_month,
            rocket_success_rate,
            launch_site_risk
        ]])

        # Run prediction
        prediction = model.predict(input_data)
        
        # Calculate a realistic success probability based on input parameters
        base_prob = 85.0 if prediction[0] == 1 else 35.0
        success_probability = base_prob + (rocket_success_rate - 90) * 0.8 - (launch_site_risk * 0.2)
        
        # Weather impact
        if weather == "Stormy":
            success_probability -= 25.0
        elif weather == "Cloudy":
            success_probability -= 5.0
            
        success_probability = max(5.0, min(99.9, success_probability))
        success_probability = round(success_probability, 1)

        # Determine confidence label
        if success_probability >= 80:
            confidence = "High"
        elif success_probability >= 50:
            confidence = "Medium"
        else:
            confidence = "Low"

        return jsonify({
            "success_probability": success_probability,
            "confidence": confidence
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400


# Contact Email endpoint
@app.route("/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject', 'No Subject')
        message = data.get('message')

        if not name or not email or not message:
            return jsonify({"error": "Missing required fields (name, email, message)"}), 400

        sender_email = os.environ.get("EMAIL_USER")
        sender_password = os.environ.get("EMAIL_PASS")
        
        if not sender_email or not sender_password:
            return jsonify({"error": "Email credentials not configured on server."}), 500

        # 1. Send Email to Admin (Self)
        msg_admin = MIMEMultipart('alternative')
        msg_admin['Subject'] = f"GravitX Contact: {subject}"
        msg_admin['From'] = sender_email
        msg_admin['To'] = sender_email # Send to yourself

        html_admin = f"""
        <html>
          <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
          </body>
        </html>
        """
        msg_admin.attach(MIMEText(html_admin, 'html'))

        # 2. Send Auto-Reply to User
        msg_user = MIMEMultipart('alternative')
        msg_user['Subject'] = "We received your message - GravitX"
        msg_user['From'] = sender_email
        msg_user['To'] = email

        html_user = f"""
        <html>
          <body>
            <h2>Hello {name},</h2>
            <p>Thank you for reaching out to GravitX. We have received your transmission and our team will get back to you shortly.</p>
            <p><strong>Your Message:</strong></p>
            <p>{message}</p>
            <br>
            <p>Best regards,<br><strong>GravitX Team</strong></p>
          </body>
        </html>
        """
        msg_user.attach(MIMEText(html_user, 'html'))

        # Connect and send
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(sender_email, sender_password)
        
        # Send to admin
        server.sendmail(sender_email, sender_email, msg_admin.as_string())
        # Send auto-reply
        server.sendmail(sender_email, email, msg_user.as_string())
        
        server.quit()

        return jsonify({"message": "Transmission sent successfully!"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # Use dynamic port for deployment
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
