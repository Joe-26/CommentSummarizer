import os
from googleapiclient.discovery import build
from fastapi import HTTPException
import re
from app.config import YOUTUBE_API_KEY, MAX_COMMENTS

def extract_video_id(url: str) -> str:
    """
    Extracts the video ID from a YouTube URL.
    """
    pattern = r"(?:v=|\/)([0-9A-Za-z_-]{11}).*"
    match = re.search(pattern, url)
    if not match:
        raise HTTPException(status_code=400, detail="Invalid YouTube URL")
    return match.group(1)


def fetch_comments(video_id: str) -> list:
    """
    Fetch top-level comments and their replies for a YouTube video,
    then write them to a text file in a readable hierarchical format.
    
    Parameters:
        video_id (str): YouTube video ID.
    """
    if not YOUTUBE_API_KEY:
        raise HTTPException(status_code=500, detail="YouTube Data API not found.")
    api_key = os.getenv("YOUTUBE_API_KEY")
    if not api_key:
        raise ValueError("YOUTUBE_API_KEY not found in .env file")

    youtube = build("youtube", "v3", developerKey=api_key)

    request = youtube.commentThreads().list(
        part="snippet,replies",
        videoId=video_id,
        maxResults=MAX_COMMENTS,
        textFormat="plainText",
        order="time"  # Fetch latest comments first
    )
    response = request.execute()

    comments = response.get("items", [])
    
    return comments
