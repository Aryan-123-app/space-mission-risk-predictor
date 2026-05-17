from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib

# Initialize app
app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
model = joblib.load("model/xgboost_model.pkl")


# Define input schema
class MissionInput(BaseModel):
    payload_mass: float
    launch_year: int
    weather: str
    rocket_success_rate: float
    launch_site_risk: float


# Root endpoint
@app.get("/")
def home():
    return {"message": "🚀 Space Mission Prediction API is running"}


# Test endpoint
@app.get("/test-model")
def test_model():
    return {"message": "✅ Model loaded successfully"}


# Prediction endpoint
@app.post("/predict")
def predict(data: MissionInput):
    try:
        # Map weather to a dummy launch_month for the model
        weather_map = {"Clear Skies": 6, "Cloudy": 4, "Stormy": 11}
        launch_month = weather_map.get(data.weather, 6)

        input_data = np.array([[
            data.payload_mass,
            data.launch_year,
            launch_month,
            data.rocket_success_rate,
            data.launch_site_risk
        ]])

        prediction = model.predict(input_data)
        
        # Calculate a realistic success probability based on input parameters
        base_prob = 85.0 if prediction[0] == 1 else 35.0
        success_probability = base_prob + (data.rocket_success_rate - 90) * 0.8 - (data.launch_site_risk * 0.2)
        
        # Weather impact
        if data.weather == "Stormy":
            success_probability -= 25.0
        elif data.weather == "Cloudy":
            success_probability -= 5.0
            
        success_probability = max(5.0, min(99.9, success_probability))
        success_probability = round(success_probability, 1)

        if success_probability >= 80:
            confidence = "High"
        elif success_probability >= 50:
            confidence = "Medium"
        else:
            confidence = "Low"

        return {
            "success_probability": success_probability,
            "confidence": confidence
        }

    except Exception as e:
        return {"error": str(e)}