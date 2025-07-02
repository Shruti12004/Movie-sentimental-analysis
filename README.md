# 🎬 Movie Sentiment Analyzer

A machine learning web app that classifies movie reviews as **Positive** or **Negative** based on sentiment. Built using **FastAPI** for backend and **Bolt.new** for frontend.

---

## 🚀 Live Demo

[Live URL](https://starlit-tartufo-83cb03.netlify.app/)  
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
```yaml
movie-sentiment-analyzer/
├── backend/
│ ├── train_model.py 
│ ├── data/
│ │ ├── cleaned_reviews_binary.csv
│ ├── models/
│ │ ├── sentiment_model.pkl
│ │ ├── vectorizer.pkl
├── api/
│ └── sentiment_api.py # FastAPI app + CORS
├── frontend/
│ ├── App.bolt # Bolt UI (1-page)
│ └── api.js # Connects to FastAPI /predict
├── README.md
```

---

## 🧪 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/your-username/movie-sentiment-analyzer.git
cd movie-sentiment-analyzer
```
### 2. Install dependencies
```bash
pip install fastapi uvicorn scikit-learn joblib pandas
```
### 3. Run the FastAPI backend
```bash
uvicorn api.sentiment_api:app --reload
Visit http://127.0.0.1:8000/docs to test API.
```
### 4. Run frontend
```bash
cd frontend
npm install
npm run dev
```

### 📊 Model Performance

| Metric     | Score |
|------------|-------|
| Accuracy   | 90%   |
| Precision  | 0.90  |
| Recall     | 0.90  |
| F1-score   | 0.90  |

### 🤖 Example API Call
```bash
POST http://127.0.0.1:8000/predict
Content-Type: application/json

{
  "review": "The movie was thrilling and emotional!"
}
Response:
```
```json
{
  "sentiment": "Positive"
}
```
### 📌 Author
Built with ❤️ by Shruti and contributers.

### 📄 License
This project is licensed under the MIT License.
