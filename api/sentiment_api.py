from fastapi import FastAPI, Request
from pydantic import BaseModel
import joblib
import os

# Get the current directory where this script is running
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Build full paths
model_path = os.path.join(BASE_DIR, "../backend/models/sentiment_model.pkl")
vectorizer_path = os.path.join(BASE_DIR, "../backend/models/tfidf_vectorizer.pkl")

# Load files
model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)


# Label mapping
label_map = {0: "Negative", 1: "Neutral", 2: "Positive"}

# Define FastAPI app
app = FastAPI()

# Input format
class ReviewInput(BaseModel):
    review: str

@app.post("/predict")
def predict_sentiment(input: ReviewInput):
    review_text = input.review
    X = vectorizer.transform([review_text])
    pred = model.predict(X)[0]
    sentiment = label_map[pred]
    return {"sentiment": sentiment}
