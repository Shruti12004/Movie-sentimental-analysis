import pandas as pd
import string
from bs4 import BeautifulSoup

# Minimal stopwords list
stop_words = {
    "the", "is", "and", "in", "of", "to", "a", "this", "that", "it", "was",
    "for", "on", "with", "as", "are", "be", "by", "an", "or", "at", "from"
}

def clean_text(text):
    text = BeautifulSoup(str(text), "html.parser").get_text()
    text = text.translate(str.maketrans('', '', string.punctuation))
    text = text.lower()
    words = text.split()
    filtered = [word for word in words if word not in stop_words]
    return ' '.join(filtered)

# Read the CSV file
df = pd.read_csv("data/reviews.csv")
df.columns = df.columns.str.strip()
df['cleaned_review'] = df['Review'].apply(clean_text)

# Save cleaned data
df.to_csv("data/cleaned_reviews.csv", index=False)

print("Cleaned reviews saved to data/cleaned_reviews.csv")