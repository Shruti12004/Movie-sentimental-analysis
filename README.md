# 🎬 Movie Review Sentiment Analysis

This project is a machine learning-based solution to classify movie reviews as **positive** or **negative** using natural language processing and various ML algorithms.

---

## 🚀 Features

- Cleans and processes raw review data
- Converts text into numerical features using TF-IDF
- Trains ML models (Logistic Regression & SVM)
- Evaluates models with Accuracy and F1-Score
- Deploys model with a simple web UI

---

## 👥 Team Members

| Member | Role |
|--------|------|
| **Member 1** | Data Collection & Cleaning |
| **Member 2** | Feature Engineering |
| **Member 3** | Model Training & Evaluation |
| **Member 4** | Deployment & Documentation |

---

## 🗂️ Project Structure

```bash
.
├── data/
├── preprocessing.py
├── vectorizer.py
├── train_model.py
├── app.py
├── model.pkl
├── README.md

⚙️ How to Run the Project
Install Dependencies

bash
Copy
Edit
pip install -r requirements.txt
Run Preprocessing

bash
Copy
Edit
python preprocessing.py
Vectorize the Data

bash
Copy
Edit
python vectorizer.py
Train the Model

bash
Copy
Edit
python train_model.py
Launch the App

bash
Copy
Edit
streamlit run app.py
📊 Model Performance
Accuracy: ~XX%

F1-Score: ~XX%

Confusion Matrix: (see evaluation_report.txt)

📚 Dataset
IMDb Large Movie Review Dataset

📝 License
MIT License

💡 Future Improvements
Add deep learning (LSTM, BERT)

Multi-class sentiment (e.g., neutral)

Deploy to Hugging Face or AWS

yaml
Copy
Edit
