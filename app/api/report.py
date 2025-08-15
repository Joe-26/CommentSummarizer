from fastapi import APIRouter
from app.models.report import ReportRequest
from app.services.getvideocomments import extract_video_id, fetch_comments
from app.services.sentiments import analyze_sentiment
from app.services.topicclustering import cluster_topics
from app.services.summarize import generate_insights

import logging
import asyncio


router = APIRouter()

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

@router.post("/testReport")
async def generateTestReport(payload: ReportRequest):
    
    await asyncio.sleep(5)

    return ({
    "video_id": "CKEd17kSUk8",
    "total_comments": 100,
    "sentiment_breakdown": {
        "positive": 38,
        "neutral": 30,
        "negative": 32
    },
    "positives": [
        {
            "comment": "Everything new but the same as last year 😂😂😂😂😂😂",
            "sentiment": "positive",
            "score": 0.9753
        },
        {
            "comment": "Wow I just watched the Geared Up episode where you talk about Genius Bar and JP.  That video was quite the eye opener.  I already was a fan, but man, the courage it took to do what you did, and the integrity doing it required, brings a whole new level of respect I have for you and this channel.",
            "sentiment": "positive",
            "score": 0.9423
        },
        {
            "comment": "I really can’t tell a difference in mp increases in image quality, they still look like phone photos. It does double the required storage, I think that the biggest reason for it. Apple makes a ton on iCloud and upping your storage on the new devices. They have to keep making more profit and the hardware really isn’t exciting. If you want better image quality, get at least micro 4/3 camera, or bigger sensor.",
            "sentiment": "positive",
            "score": 0.9076
        }
    ],
    "negatives": [
        {
            "comment": "quite shocking to fit a zoom lens into that size",
            "sentiment": "negative",
            "score": -0.0591
        },
        {
            "comment": "Meh. I probably update next year then.",
            "sentiment": "negative",
            "score": -0.0772
        },
        {
            "comment": "I’ve had enough,  apple is meh now 🙄",
            "sentiment": "negative",
            "score": -0.0772
        }
    ],
    "neutrals": [
        {
            "comment": "Satellite connectivity is useless on an apple watch until they figure out how to get battery life as good as garmin.",
            "sentiment": "neutral",
            "score": 0.0258
        },
        {
            "comment": "Apple filed a patent years ago describing their vision for AVP - AirTag interaction which they described as a digital stone or go stone. Essentially an airtag out in the world that would enable interactions in XR. \n\nWhat I found confusing about AVP is that they didn’t put the UWB in it. So apple will be relying on the user to have their phone with them for UWB ranging.",
            "sentiment": "neutral",
            "score": 0.0258
        },
        {
            "comment": "If the iPhone 17 series ships with Vapour cooling system then it will set new standards in Benchmark scores. Thought it doesn’t matter a lot but still we can the actual potential with an additional cooling system inside the device",
            "sentiment": "neutral",
            "score": 0.0129
        }
    ],
    "clusters": {
        "year": [
            "Meh. I probably update next year then.",
            "Same every year",
            "17 Air is a scam, 17 Pro design is horrendous, no real new improvements aside from photos which, for non-photographers is useless, only the 17 with the 120hz seems cool. \n\nI’m really excited for the AirPods Pro though. Imagine they FINALLY bring APTX-HD or LDAC and have even better noice cancelling? I’m sold! \n\nGotta stay on my 15 Pro until next year, hopefully it’s the glasswing project year or the foldable one, which seems like a more reasonable upgrade.",
            "Since Job´s era Apple has been releasing the same products year after year. I´d not be surprised if this massive company disappears in the following years",
            "Everything new but the same as last year 😂😂😂😂😂😂"
            "I’m staying with my iPhone 13 mini until it’s telling me to it wanted to die peacefully.",
            "I am going to get a new iPhone what should I do? The iPhone 15 pro or iPhone 17 pro",
            "iPhone 17 is going to be another disappointment.",
            "It’s all BS. My iPhone 13 is just as good.",
            "The iPhone Air 26 frame, may only be 5.5mm thick, but that's a pointless figure to quote because it doesn't include the massive camera hump and lens ring! 🤦🏽‍♂",
            "It seems that people are not realizing that the iPhone 17 pro is gonna be the first phone to reality go toe to toe with dslr cameras, because of the new 48 mp sensor on the telephoto camera, that's gonna give us the ability to take natural portraits just like with a dslr. This is gonna be a huge release. Unless they have done the absolute crazy and that is: if they upgraded the tele sensor from a 12 mp to a 48 mp, but not much the sensor size itself, because its size is directly correlated to how much of shallow depth of field it produces!",
            "I really love Apple and I’m rocking their phones and MacBooks for years but they are really going downhill with their phones the past few years. No real innovation and ugly design choices. Apple needs to step up their game",
            "If they brought nano texture to iphone is a day one buy for me, if not is just another iphone 11 clone",
            "iPhone 17 getting 120Hz but no AOD?\nCongrats, you just made the most pointless LTPO display ever. that's like buying a sports car that only runs on first gear \nGuess those Pixel ads were onto something.",
            "Apple should take a page or two from the 25 edge design and features book. 🤦🏻‍♂️",
            "damn so no new AirPods Max huh🫤",
            "So instead of giving us a iPhone mini, which I love, they are going to give us a thin phone no one asked for… mkay.",
            "The same video for the 20th time now. No ides why Youtube keeps pushing this to me",
            "If the iPhone 17 series ships with Vapour cooling system then it will set new standards in Benchmark scores. Thought it doesn’t matter a lot but still we can the actual potential with an additional cooling system inside the device",
            "My iPhone13 pro max still look new and work fine. No need to buy a new one.",
            "Love your video! Waiting for Foldable IPhone. I have had an IPhone since IPhone 3. I’m ready for a total new design!",
            "Booooo!!! Not your video…the product Apple is putting out.",
            "If the AirPods are white again that is so hurting that white design should have been given up like 15 years ago 🤦‍♂️",
            "Wow I just watched the Geared Up episode where you talk about Genius Bar and JP.  That video was quite the eye opener.  I already was a fan, but man, the courage it took to do what you did, and the integrity doing it required, brings a whole new level of respect I have for you and this channel.",
            "Apple introducing iPhone air to just boost their pro models sale. There is no point to buy iPhone air."
        ]
    },
    "executive_summary": "Overall reaction was mixed but engaged: sentiment skewed mildly positive (38) with a substantial amount of criticism (32) and a comparable neutral contingent (30). Many viewers appreciated the incremental refinements and specific features—some expressed excitement about camera spec boosts and new accessory rumors—yet a near-equal portion voiced fatigue with what they see as iterative, “same-as-last-year” releases and skepticism about real innovation. The Air vs Pro positioning sparked a lot of debate, with commenters split between seeing the Air as a useful lighter option and seeing it as an underpowered upsell that undermines the Pro line; material and design choices (aluminum vs titanium/stainless, thinner bodies, bigger camera bumps) drew particularly strong opinions and nostalgia for earlier Apple eras. Battery life and the tradeoffs of extreme thinness were recurring pain points, and many questioned whether camera megapixel increases will translate to meaningful photo quality rather than higher storage demands. Threads about Apple’s broader direction—pricing, perceived copying of competitors, and diminishing wow factor—ran alongside smaller pockets of enthusiasm for accessories like AirPods, resulting in an audience that is informed and passionate but noticeably divided between guarded optimism and clear frustration."
})

@router.post("/generate-report")
async def generate_report(payload: ReportRequest):
    logging.info("Generate Report Endpoint called!")

    video_id = extract_video_id(payload.youtube_url)
    logging.info(f"Video ID fetched! ID = {video_id}")

    comments_data = fetch_comments(video_id)
    logging.info("Fetched Comments!")

    # Extract just the comment text from the raw API response
    comment_texts = [
        item['snippet']['topLevelComment']['snippet']['textOriginal']
        for item in comments_data if 'snippet' in item and 'topLevelComment' in item['snippet']
    ]

    sentiment_breakdown, positives, negatives, neutrals = analyze_sentiment(comment_texts)
    logging.info("Sentiments Analyzed!")

    clusters = await cluster_topics(comment_texts)
    logging.info("Cluster of topics formed!")

    summary = generate_insights(sentiment_breakdown, clusters)
    logging.info("Executive summary generated!")

    return {
        "video_id": video_id,
        "total_comments": len(comment_texts),
        "sentiment_breakdown": sentiment_breakdown,
        "positives":positives,
        "negatives":negatives,
        "neutrals":neutrals,
        "clusters": clusters,
        "executive_summary": summary
    }
