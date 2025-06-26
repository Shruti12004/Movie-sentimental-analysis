import React, { useState } from 'react';
import { Send, Loader2, Film } from 'lucide-react';

interface SentimentResult {
  sentiment: 'Positive' | 'Negative';
}

function App() {
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handlePredict = async () => {
    if (!review.trim()) {
      setError('Please enter a movie review');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    setShowResult(false);

    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review: review.trim() }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: SentimentResult = await response.json();
      setResult(data);
      
      // Trigger animation after a short delay
      setTimeout(() => setShowResult(true), 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze sentiment');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handlePredict();
    }
  };

  const getSentimentConfig = (sentiment: string) => {
    return sentiment === 'Positive'
      ? {
          emoji: '💚',
          bgColor: 'bg-emerald-500',
          textColor: 'text-white',
          borderColor: 'border-emerald-400',
        }
      : {
          emoji: '💔',
          bgColor: 'bg-red-500',
          textColor: 'text-white',
          borderColor: 'border-red-400',
        };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              🎬 Movie Sentiment Analyzer
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the emotional tone of movie reviews using advanced sentiment analysis
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white">Analyze Your Review</h2>
            <p className="text-purple-100 mt-1">Enter a movie review to get instant sentiment analysis</p>
          </div>

          <div className="p-8 space-y-6">
            {/* Input Section */}
            <div className="space-y-3">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                Enter your movie review
              </label>
              <div className="relative">
                <textarea
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="I watched this movie last night and it was absolutely amazing! The acting was superb and the plot kept me engaged throughout..."
                  className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 resize-none"
                  disabled={isLoading}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {review.length} characters
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Tip: Press Ctrl+Enter (Cmd+Enter on Mac) to analyze quickly
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                <div className="font-medium">Error</div>
                <div className="text-sm mt-1">{error}</div>
              </div>
            )}

            {/* Predict Button */}
            <button
              onClick={handlePredict}
              disabled={isLoading || !review.trim()}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:shadow-none transform hover:scale-[1.02] disabled:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing Sentiment...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Predict Sentiment
                </>
              )}
            </button>

            {/* Result Section */}
            {result && (
              <div
                className={`transform transition-all duration-500 ${
                  showResult
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-4 opacity-0 scale-95'
                }`}
              >
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Analysis Result</h3>
                  
                  <div
                    className={`${getSentimentConfig(result.sentiment).bgColor} ${
                      getSentimentConfig(result.sentiment).textColor
                    } rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-4xl animate-bounce">
                        {getSentimentConfig(result.sentiment).emoji}
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">
                          {result.sentiment}
                        </div>
                        <div className="text-sm opacity-90 mt-1">
                          Sentiment detected
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      The AI model has analyzed your review and determined it expresses a{' '}
                      <span className="font-semibold text-gray-800">
                        {result.sentiment.toLowerCase()}
                      </span>{' '}
                      sentiment about the movie.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Powered by machine learning • Built with React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default App;