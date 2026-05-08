# 🚀 Space Mission Success Prediction

## 📌 Project Overview
This project builds a machine learning pipeline to analyze and predict space mission launch outcomes using historical space mission and satellite datasets.

The goal is to demonstrate an end-to-end data science workflow including data cleaning, feature engineering, model training, and evaluation.

---

## 📂 Dataset
- Global Space Exploration Dataset
- UCS Satellite Database

---

## ⚙️ Workflow

### 1. Data Cleaning
- Removed irrelevant and unnamed columns
- Handled missing values
- Standardized column names

### 2. Feature Engineering
- Selected key features such as:
  - Launch site
  - Launch vehicle
  - Orbit type
  - Payload mass
- Encoded categorical variables

### 3. Target Variable
- No real failure label was available  
- Created a **synthetic target variable (`outcome`)**:
  - 90% Success
  - 10% Failure

⚠️ Note: This limits real-world predictive validity.

---

## 🤖 Models Used

### 🌲 Random Forest
- Ensemble learning (bagging)
- Baseline model

### ⚡ XGBoost
- Gradient boosting algorithm
- Better handling of complex patterns

---

## 📊 Model Performance

| Model          | Accuracy |
|----------------|---------|
| Random Forest  | ~88%    |
| XGBoost        | ~89%    |

📌 XGBoost slightly outperformed Random Forest.

---

## 📈 Evaluation Metrics
- Accuracy Score
- Confusion Matrix
- Classification Report

---

## 🔍 Feature Analysis
- Correlation matrix used to analyze relationships
- Weak correlations observed due to synthetic target

---

## ⚠️ Limitations
- Target variable is randomly generated
- Results do not reflect real-world mission success prediction
- Limited feature depth

---

## 🚀 Future Improvements
- Use real labeled mission outcome data
- Add more domain-specific features
- Hyperparameter tuning
- Model deployment (FastAPI / Streamlit)
- Interactive dashboard

---

## 🧠 Key Learnings
- Data preprocessing is critical
- Handling categorical variables
- Model comparison (Random Forest vs XGBoost)
- Debugging real-world ML errors
- Importance of evaluating model assumptions

---

## 💾 Model Saving
Models are saved using `joblib` and can be reused for deployment.

---

## 🛠 Tech Stack
- Python
- Pandas, NumPy
- Scikit-learn
- XGBoost
- Matplotlib, Seaborn

---

## 📌 Conclusion
This project demonstrates a complete machine learning workflow while emphasizing the importance of data quality and realistic problem formulation.

---

## ⭐ If you found this useful, consider giving a star!