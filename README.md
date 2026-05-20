# 🚀 Space Mission Success Prediction Platform

## 📌 Overview

This project is an end-to-end Machine Learning application that predicts the success of space missions using historical launch data. It includes data preprocessing, model training, evaluation, and deployment via a **FastAPI** backend.

---

## 🎯 Objective

To build a predictive system that determines whether a space mission will be **successful or unsuccessful** based on key mission parameters.

---

## 🧠 Machine Learning Workflow

### 1️⃣ Data Preprocessing

- Cleaned raw dataset
- Handled missing values
- Feature engineering applied

---

### 2️⃣ Feature Selection

Final features used for modeling:

| Feature | Description |
|---|---|
| `payload_mass` | Mass of the payload in kg |
| `launch_year` | Year of the launch |
| `launch_month` | Month of the launch |
| `rocket_success_rate` | Historical success rate of the rocket |
| `launch_site_risk` | Risk score associated with the launch site |

---

### 3️⃣ Model Training

Two models were trained and compared:

- ✅ **Random Forest Classifier**
- ✅ **XGBoost Classifier**

---

### 4️⃣ Model Performance

| Model | Accuracy |
|---|---|
| Random Forest | ~88.7% |
| XGBoost | ~89.6% |

> ✅ **XGBoost** performed better and was selected for deployment.

---

### 5️⃣ Model Evaluation

Evaluation metrics used:

- Accuracy Score
- Confusion Matrix
- Model Performance Comparison

---

## 💾 Model Deployment

### Backend Framework

- **FastAPI** — high-performance REST API
- **Uvicorn** — ASGI server for running the app
- **Pydantic** — input validation and schema enforcement

---

## 🔌 API Endpoints

### 🏠 Home

```
GET /
```

Returns a welcome message confirming the API is running.

---

### 🧪 Test Model

```
GET /test-model
```

Tests the loaded XGBoost model and returns a sample prediction.

---

### 🔮 Predict Mission Outcome

```
POST /predict
```

#### 📥 Request Body

```json
{
  "payload_mass": 2000,
  "launch_year": 2022,
  "launch_month": 6,
  "rocket_success_rate": 0.85,
  "launch_site_risk": 0.2
}
```

#### 📤 Response

```json
{
  "prediction": 1,
  "result": "Success 🚀"
}
```

| Field | Type | Description |
|---|---|---|
| `payload_mass` | `float` | Payload mass in kg |
| `launch_year` | `int` | Year of launch (e.g., 2022) |
| `launch_month` | `int` | Month of launch (1–12) |
| `rocket_success_rate` | `float` | Historical success rate (0.0 – 1.0) |
| `launch_site_risk` | `float` | Risk score of the launch site (0.0 – 1.0) |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Language | Python 3.11 |
| Data Processing | Pandas, NumPy |
| Machine Learning | Scikit-learn, XGBoost |
| API Framework | FastAPI |
| Server | Uvicorn |
| Validation | Pydantic |

---

## 📁 Project Structure

```
space-mission-platform/
│
├── backend/
│   ├── main.py                  # FastAPI application entry point
│   ├── model/
│   │   └── xgboost_model.pkl    # Trained XGBoost model
│   └── requirements.txt         # Python dependencies
│
├── datasets/
│   └── processed/               # Cleaned and feature-engineered data
│
├── notebooks/                   # Jupyter notebooks for EDA and training
│
└── README.md
```

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-link>
cd space-mission-platform/backend
```

### 2️⃣ Create a Virtual Environment

```bash
conda create -n mlenv python=3.11
conda activate mlenv
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run the Backend Server

```bash
uvicorn main:app --reload
```

### 5️⃣ Open Interactive API Docs

Navigate to: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## 🚀 Future Improvements

- [ ] Add React frontend (UI dashboard)
- [ ] Deploy on cloud (Render / AWS / GCP)
- [ ] Improve model with more features
- [ ] Add CI/CD pipeline
- [ ] Add logging and monitoring

---

## 📌 Conclusion

This project demonstrates:

- ✅ End-to-end ML pipeline development
- ✅ Model comparison and optimization
- ✅ Real-world API deployment using FastAPI
- ✅ Clean, production-ready project structure

---

## 👨‍💻 Author

**Aryan** — Aspiring Data Scientist & ML Engineer 🚀

---

> *Built with ❤️ using Python, Scikit-learn, XGBoost, and FastAPI*