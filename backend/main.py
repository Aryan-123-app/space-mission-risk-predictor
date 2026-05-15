from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib

# Initialize app
app = FastAPI()

# Load trained model
model = joblib.load("model/xgboost_model.pkl")


# Define input schema
class MissionInput(BaseModel):
    payload_mass: float
    launch_year: int
    launch_month: int
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
        input_data = np.array([[
            data.payload_mass,
            data.launch_year,
            data.launch_month,
            data.rocket_success_rate,
            data.launch_site_risk
        ]])

        prediction = model.predict(input_data)

        return {
            "prediction": int(prediction[0]),
            "result": "Success 🚀" if prediction[0] == 1 else "Failure ❌"
        }

    except Exception as e:
        return {"error": str(e)}