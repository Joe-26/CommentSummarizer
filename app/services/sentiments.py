from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

def analyze_sentiment(comments: list[str]):
    results = []
    positive, negative, neutral = [], [], []
    for comment in comments:
        score = analyzer.polarity_scores(comment)
        compound = score["compound"]

        if compound >= 0.05:
            sentiment = "positive"
            positive.append({
                "comment": comment,
                "sentiment": sentiment,
                "score": compound
            })
        elif compound <= -0.05:
            sentiment = "negative"
            negative.append({
                "comment": comment,
                "sentiment": sentiment,
                "score": compound
            })
        else:
            sentiment = "neutral"
            neutral.append({
                "comment": comment,
                "sentiment": sentiment,
                "score": compound
            })

        results.append({
            "comment": comment,
            "sentiment": sentiment,
            "score": score
        })
    
    sorted_positives = sorted(positive, key=lambda x: x["score"], reverse=True)
    sorted_negatives = sorted(negative, key=lambda x: x["score"])
    sorted_neutrals = sorted(neutral, key=lambda x: x["score"], reverse=True)

    breakdown = {
        "positive": sum(1 for r in results if r["sentiment"] == "positive"),
        "neutral": sum(1 for r in results if r["sentiment"] == "neutral"),
        "negative": sum(1 for r in results if r["sentiment"] == "negative")
    }

    return breakdown, sorted_positives[:5], sorted_negatives[:5], sorted_neutrals[:5]
