from openai import OpenAI
from app.config import OPENAI_API_KEY

client = OpenAI(api_key=OPENAI_API_KEY)

def generate_insights(sentiment_breakdown, clusters):
    """
    Use GPT to generate a short executive summary from analysis results.
    """
    prompt = f"""
    You are an expert at summarizing audience feedback for content creators.  
    You will receive:  
    1. Sentiment analysis counts for positive, negative, and neutral comments.  
    2. Clusters of comments grouped by similar topics (without keywords).  

    Task:  
    Write a short, professional, and engaging summary for the content creator so they can quickly understand their audience’s overall feedback.  
    - Weave the sentiment insights naturally into the narrative (e.g., “Most viewers enjoyed X, but some raised concerns about Y”).  
    - Mention the most common themes from the clusters without listing raw comments or numbers.  
    - Keep the tone constructive, insightful, and easy for a YouTuber to relate to.  
    - Do not provide suggestions for improvement—just summarize audience sentiment.  
    - Keep it concise so it can be read in under 5 minutes.  
    - Return only a single string paragraph without bullet points or formatting.

    Input format example:  
    Positive: {sentiment_breakdown['positive']}  
    Negative: {sentiment_breakdown['negative']} 
    Neutral: {sentiment_breakdown['neutral']}  
    Clusters:  
    {clusters}

    Now produce the summary based on the provided data.
    """
    
    response = client.chat.completions.create(
        model="gpt-5-mini",
        messages=[
            {
                "role": "system", 
                "content": "You are expert in generating executive summaries based on youtube comments."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    summary = response.choices[0].message.content
    return summary
