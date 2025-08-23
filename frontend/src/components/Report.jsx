import { useEffect, useState } from "react";
import Chart from "chart.js/auto"; // needed to render chart enven though not explicitly used
import { Pie } from "react-chartjs-2";
import { motion, AnimatePresence } from "framer-motion";

export default function Report({ youtubeLink }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [report, setReport] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (!youtubeLink) return;
    setLoading(true);
    setError(null);
    setReport(null);
    fetch("http://127.0.0.1:8000/generate-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ youtube_url: youtubeLink }),
    })
      .then((res) => {
        if (!res.ok)
          throw new Error(
            "Check if video hasn't been dropped/takendown. Example Youtube link - https://www.youtube.com/watch?v=abcdef123"
          );
        return res.json();
      })
      .then((data) => {
        setReport(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [youtubeLink]);

  if (loading) {
    return (
      <div className="rounded-xl shadow-lg p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#F3F4F6"
          className="bi bi-arrow-clockwise animate-spin"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
        </svg>
      </div>
    );
  }
  if (error) {
    return (
      <div className="rounded-xl shadow-lg bg-gray-100 p-4 text-red-800">
        Error: {error}
      </div>
    );
  }
  if (!report) {
    return null;
  }

  const clusterKeys = Object.keys(report.clusters);

  // Prepare data for Pie chart with counts in labels
  const positive = report.sentiment_breakdown.positive;
  const neutral = report.sentiment_breakdown.neutral;
  const negative = report.sentiment_breakdown.negative;
  const sentimentData = {
    labels: [
      `${positive} Positive`,
      `${neutral} Neutral`,
      `${negative} Negative`,
    ],
    datasets: [
      {
        data: [positive, neutral, negative],
        backgroundColor: ["#22c55e", "#fbbf24", "#ef4444"],
        borderColor: ["#16a34a", "#ca8a04", "#b91c1c"],
        borderWidth: 3,
      },
    ],
  };

  const sentimentOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: "Sentiment Breakdown",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "#1e293b",
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col rounded-xl shadow-xl bg-gray-100 p-4 text-left">
      <div className="flex gap-2 items-center text-4xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          class="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        </svg>
        <h1>Here's what your audience say</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col pl-14 pr-8 border-r-2 border-gray-400">
          <div className="flex mb-2">
            <strong>Video Id: &nbsp;</strong>
            <p className="font-dosis">{report.video_id}</p>
          </div>
          <div>
            <strong className="">Executive Summary:</strong>
            <p className="mb-4 font-dosis">{report.executive_summary}</p>
          </div>
          {/* Dropdowns for Top Comments */}
          <div>
            <strong className="">Top 5 Comments:</strong>
          </div>
          <div className="mt-4">
            <button
              className={`flex justify-between w-full text-left py-2 px-3 rounded bg-green-100 hover:bg-green-200 font-semibold mb-1 ${
                openDropdown === "positive" ? "border-2 border-green-400" : ""
              }`}
              onClick={() =>
                setOpenDropdown(openDropdown === "positive" ? null : "positive")
              }
            >
              🟢 Positive
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#32373B"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <AnimatePresence>
              {openDropdown === "positive" && (
                <motion.div
                  className="pl-4 pb-2 h-40 overflow-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {report.positives.map((item, idx) => (
                    <p key={idx} className="mb-1 text-green-700">
                      &bull; {item.comment}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className={`flex justify-between w-full text-left py-2 px-3 rounded bg-red-100 hover:bg-red-200 font-semibold mb-1 ${
                openDropdown === "negative" ? "border-2 border-red-400" : ""
              }`}
              onClick={() =>
                setOpenDropdown(openDropdown === "negative" ? null : "negative")
              }
            >
              🔴 Negative
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#32373B"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <AnimatePresence>
              {openDropdown === "negative" && (
                <motion.div
                  className="pl-4 pb-2 h-40 overflow-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {report.negatives.map((item, idx) => (
                    <p key={idx} className="mb-1 text-red-700">
                      &bull; {item.comment}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              className={`flex justify-between w-full text-left py-2 px-3 rounded bg-yellow-100 hover:bg-yellow-200 font-semibold mb-1 ${
                openDropdown === "neutral" ? "border-2 border-yellow-400" : ""
              }`}
              onClick={() =>
                setOpenDropdown(openDropdown === "neutral" ? null : "neutral")
              }
            >
              🟠 Neutral
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#32373B"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <AnimatePresence>
              {openDropdown === "neutral" && (
                <motion.div
                  className="pl-4 pb-2 h-40 overflow-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {report.neutrals.map((item, idx) => (
                    <p key={idx} className="mb-1 text-yellow-700">
                      &bull; {item.comment}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col gap-3  items-center">
          <div style={{ width: "250px", height: "250px", margin: "0 auto" }}>
            <Pie data={sentimentData} options={sentimentOptions} />
          </div>
          <div className="mt-2">
            <p className="text-lg font-bold"> Top 5 Keywords</p>
            
           <ul className="list-disc list-inside font-dosis font-normal">
              {clusterKeys.map((key) => (
                <li key={key}>{key}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
