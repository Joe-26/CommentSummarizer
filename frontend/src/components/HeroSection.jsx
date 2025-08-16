import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import Report from "./Report";

// const COLORS = ["#406458", "#514B57", "#3A4648", "#5C4485"];
const COLORS = ["#8A2BE2", "#00B4D8", "#6A00F4", "#4B0082"];

export default function HeroSection() {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [showReport, setShowReport] = useState(false);

  const handleInputChange = (e) => {
    setYoutubeLink(e.target.value);
    if (showReport) setShowReport(false);
  };

  const handleSummarize = () => {
    if (youtubeLink.trim() !== "") {
      setShowReport(true);
    }
  };
  const color = useMotionValue(COLORS);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000000 30%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <div className="flex h-screen justify-center items-center">
      {/* <div className="absolute -z-10 inset-0 bg-[linear-gradient(45deg,#CC0000,#990000,#330000,#000000)] bg-[length:100%_100%] animate-[gradient_10s_ease_infinite]"></div> */}
      <motion.div
        className="absolute -z-10 inset-0 w-full h-full"
        style={{
          backgroundImage,
        }}
      ></motion.div>
      <div className="flex flex-col w-3/4 gap-4 text-center place-items-center">
        <AnimatePresence>
          {!showReport && (
            <>
              <motion.h1
                className="text-8xl font-bold text-gray-100 font-grotesk"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1.5, type: "spring", bounce: 0 }}
              >
                Unlock the power of your Audience's Voice
              </motion.h1>
              <motion.p
                className="text-xl font-light mb-4 font-dosis text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{
                  duration: 1.8,
                  type: "spring",
                  bounce: 0,
                  delay: 0.1,
                }}
              >
                Understand your audience's sentiment, feedback themes, and
                suggestions with our AI-powered summarizer & get actionable
                insights.
              </motion.p>
            </>
          )}
        </AnimatePresence>

        <motion.div
          className="flex items-center w-3/4 shadow rounded-xl bg-gray-100 focus-within:border-2 focus-within:border-red-950 focus:shadow-2xl transition-all px-4"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Paste your YouTube video link"
            className="w-full p-4 text-lg rounded-lg focus:outline-none"
            value={youtubeLink}
            onChange={handleInputChange}
          />
          <div className="rounded-xl bg-imperial-red hover:bg-red-600 text-white px-4 py-2">
            <button className="flex items-center" onClick={handleSummarize}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>&nbsp;Summarize</div>
            </button>
          </div>
        </motion.div>

        {/* Summarized Report */}
        {showReport && (
          <div className="mt-4">
            <Report youtubeLink={youtubeLink} />
          </div>
        )}
      </div>
    </div>
  );
}
