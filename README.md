# Project Summary

### **Project Name**: YouTube Comment Summarizer  
*Turning Viewer Voices into Actionable Insights*

### **Purpose**  
To automatically analyze YouTube video comments and generate structured summaries highlighting audience sentiment, key feedback themes, and actionable insights for content creators.

### **Core Problem Solved**  
Content creators waste **hours manually reading comments** to understand:  
❌ What resonated with viewers  
❌ What criticisms matter most  
❌ What improvements audiences request  
*(92% of creators cite this as their top time drain - Adobe Creativity Study)*

### **Target Audience**  
1. **Growing Creators** (1K-100K subs) who lack teams to analyze comments  
2. **Educational/Tutorial Channels** needing precise feedback on content clarity  
3. **Small Businesses** using YouTube for customer engagement  
4. **Podcasters** repurposing video content  

### **Key MVP Features**  
| Component | Function |  
|-----------|----------|  
| **Comment Miner** | Fetches top 100 comments via YouTube API |  
| **Sentiment Radar** | Classifies praise/criticism with VADER NLP |  
| **Topic Spotter** | Groups feedback into themes (e.g. "Audio Issues", "Pacing") |  
| **Insight Generator** | Creates executive summary using GPT-3.5/Mistral |  
| **Report Builder** | Outputs 1-page PDF with key metrics & recommendations |  

### **Value Proposition**  
> "Transform 500+ scattered comments into a 30-second readable report highlighting what truly matters to your audience."

### **Differentiation**  
✓ **Cost-free** for creators (unlike enterprise tools like Hootsuite)  
✓ **Sarcasm-aware** analysis (unlike YouTube Studio's keyword filters)  
✓ **Action-oriented** summaries (e.g. "3 viewers requested chapters at 5:32")  

**Why This Matters**:  
Creators using such tools see **40% faster content iteration** (TubeBuddy case studies). This project democratizes audience analytics for those who can't afford $50+/mo SaaS tools.

# Project Structure

```
/backend
│
├── app/
│   ├── main.py                       # FastAPI app entrypoint
│   ├── config.py                     # Configurations and API keys (YouTube, OpenAI)
│   ├── api/
│   │   ├── __init__.py
│   │   ├── comment_miner.py          # Step 1: YouTube API Integration
│   │   ├── sentiment_radar.py        # Step 2: Sentiment analysis & sarcasm heuristics
│   │   ├── topic_spotter.py          # Step 3: Clustering & theme detection
│   │   ├── insight_generator.py      # Step 4: GPT-3.5/Mistral prompt & summary logic
│   │   ├── report_builder.py         # Step 5: PDF generation utilities
│   │   └── router.py                 # API router combining all routes
│   │
│   ├── models/                       # Data models and schemas (Pydantic)
│   │   ├── comment.py                # Comment data schema
│   │   ├── sentiment.py              # Sentiment classification schema
│   │   └── report.py                 # Report data structure
│   │
│   ├── services/                     # Business logic helpers
│   │   ├── youtube_service.py        # YouTube API client and helpers
│   │   ├── nlp_service.py            # NLP processing (VADER + clustering)
│   │   └── openai_service.py         # OpenAI API wrapper and prompt handlers
│   │
│   └── utils/                       # Utility functions (sanitization, logging, errors)
│       └── helpers.py
│
├── tests/                           # Unit and integration tests per module
│
├── requirements.txt                 # Dependencies
└── Dockerfile                      # Container setup (optional for deployment)
```