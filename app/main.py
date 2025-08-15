from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import report


app = FastAPI(
    title="YouTube Video Comments Summarizer",
    description="Generate sentiment & topic analysis from YouTube comments",
    version="0.1.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(report.router, tags=["Report"])
