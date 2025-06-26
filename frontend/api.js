fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ review: userInput })
  })
  .then(response => response.json())
  .then(data => setSentiment(data.sentiment));
  