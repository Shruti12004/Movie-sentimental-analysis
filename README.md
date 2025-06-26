# 🎬 Movie Sentiment Analyzer

A machine learning web app that classifies movie reviews as **Positive** or **Negative** based on sentiment. Built using **FastAPI** for backend and **Bolt.new** for frontend.

---

## 🚀 Live Demo

(If hosted, insert your link here)  
_Local Usage:_ [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## ✨ Features

- ✅ Cleaned and preprocessed IMDb-like movie reviews
- ✅ Optimized logistic regression model using **GridSearchCV**
- ✅ Frontend built with **Bolt.new** for quick deployment
- ✅ API built with **FastAPI** + integrated CORS
- ✅ Real-time prediction with review input box
- ✅ Beautiful animated output cards: 💚 Positive / 💔 Negative

---

## 🧠 How It Works

### 1. **Input**  
User types in a movie review (e.g., _"This movie had brilliant acting!"_)

### 2. **Backend Processing**  
- The review is vectorized using TF-IDF  
- A trained Logistic Regression model classifies it as `0` (Negative) or `1` (Positive)

### 3. **Output**  
Frontend shows either:
- 💚 Positive — green card
- 💔 Negative — red card

---

## 🛠️ Tech Stack

| Layer        | Tech Used           |
|--------------|---------------------|
| Language     | Python, TypeScript  |
| ML Backend   | Scikit-learn, FastAPI, Joblib |
| Frontend     | [Bolt.new](https://bolt.new) |
| Deployment   | (Optional: Render / HuggingFace Spaces) |

---

## 📁 Project Structure

movie-sentiment-analyzer/
├── backend/
│ ├── train_model.py # Model training (Logistic Regression + GridSearch)
│ ├── predict.py # Optional batch predictions
│ ├── data/
│ │ ├── cleaned_reviews_binary.csv
│ ├── models/
│ │ ├── binary_sentiment_model.pkl
│ │ ├── binary_vectorizer.pkl
├── api/
│ └── sentiment_api.py # FastAPI app + CORS
├── frontend/
│ ├── App.bolt # Bolt UI (1-page)
│ └── api.js # Connects to FastAPI /predict
├── README.md

yaml
Copy
Edit

---

## 🧪 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/movie-sentiment-analyzer.git
cd movie-sentiment-analyzer
2. Install dependencies
bash
Copy
Edit
pip install fastapi uvicorn scikit-learn joblib pandas
3. Run the FastAPI backend
bash
Copy
Edit
uvicorn api.sentiment_api:app --reload
Visit http://127.0.0.1:8000/docs to test API.

4. Run Bolt.new frontend
Go to https://bolt.new, paste your Bolt code (from App.bolt), and click Run.

📊 Model Performance
Metric	Score
Accuracy	90%
Precision	0.90
Recall	0.90
F1-score	0.90

🤖 Example API Call
bash
Copy
Edit
POST http://127.0.0.1:8000/predict
Content-Type: application/json

{
  "review": "The movie was thrilling and emotional!"
}
Response:

json
Copy
Edit
{
  "sentiment": "Positive"
}
📌 Author
Built with ❤️ by [Your Name]

📄 License
This project is licensed under the MIT License.