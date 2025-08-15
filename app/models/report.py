from pydantic import BaseModel

class ReportRequest(BaseModel):
    youtube_url: str

class SentimentBreakdown(BaseModel):
    positive: int
    neutral: int
    negative: int

class ClusterResult(BaseModel):
    cluster_id: int
    comments: list[str]

class ReportResponse(BaseModel):
    video_id: str
    total_comments: int
    sentiment_breakdown: SentimentBreakdown
    clusters: dict
