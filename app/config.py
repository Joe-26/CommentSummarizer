import os
from dotenv import load_dotenv

load_dotenv()

YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY", "")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
MAX_COMMENTS = 100

# MySQL connection string (future use)
# MYSQL_URL = os.getenv("MYSQL_URL", "mysql+pymysql://user:password@localhost/comments_db")
