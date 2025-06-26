from fastapi import FastAPI, Request
from pydantic import BaseModel
import joblib
import os
from fastapi.middleware.cors import CORSMiddleware

# Get the current directory where this script is running
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Build full paths
model_path = os.path.join(BASE_DIR, "../backend/models/sentiment_model.pkl")
vectorizer_path = os.path.join(BASE_DIR, "../backend/models/tfidf_vectorizer.pkl")

# Load files
model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)


# Label mapping
label_map = {0: "Negative", 1: "Positive"}

# Define FastAPI app
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # OR use ["http://localhost:3000"] or wherever your frontend is
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
