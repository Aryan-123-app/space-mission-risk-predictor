from fastapi import FastAPI
import joblib

app = FastAPI()

# Load model
model = joblib.load("model/xgboost_model.pkl")

@app.get("/")
def home():
    return {"message": "🚀 API is running"}

@app.get("/test-model")
def test_model():
    return {"message": "Model loaded successfully"}