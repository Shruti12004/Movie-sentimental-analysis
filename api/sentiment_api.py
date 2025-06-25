
from flask import Flask, request, jsonify
import joblib

model = joblib.load('backend/models/sentiment_model.pkl')
vectorizer = joblib.load('backend/data/tfidf_vectorizer.pkl')

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    review = data.get('review', '')
    if not review:
        return jsonify({'error': 'No review provided'}), 400
    X = vectorizer.transform([review])
    prediction = model.predict(X)[0]
    sentiment = "Positive" if prediction == 1 else "Negative"

    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)

