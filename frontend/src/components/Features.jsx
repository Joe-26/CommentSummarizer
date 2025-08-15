import ChartsImage from "/charts.jpg";
import ReviewImage from "/review.jpg";
import ActionImage from "/write.jpg";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="flex flex-col mx-60 my-20 mt-40 ">
      <h1 className="text-xl font-light">Features</h1>
      <h1 className="text-5xl font-bold mt-6">
        Key Features to Enhance Your Content Strategy
      </h1>
      <p className="text-lg font-light mt-2">
        Our tool provides a comprehensive analysis of your YouTube comments,
        offering valuable insights to help you connect with your audience and
        create better content.
      </p>

      <div className="flex gap-5 mt-8">
        {/* Card 1 */}
        <motion.div
          className="basis-1/3 flex flex-col place-items-center text-center rounded-lg"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.25 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={ChartsImage}
            className="mb-2 h-60 w-70 rounded-lg shadow-lg"
          />
          <h2 className="font-bold text-lg mt-2">Sentiment Analysis</h2>
          <p className="text-sm font-extralight">
            Understand the overall sentiment of your audience towards your
            video.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="basis-1/3 flex flex-col place-items-center text-center rounded-lg"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.25,
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={ReviewImage}
            className="mb-2 h-60 w-70 rounded-lg shadow-lg"
          />
          <h2 className="font-bold text-lg mt-2">Feedback Themes</h2>
          <p className="text-sm font-extralight">
            Identify recurring themes and topics discussed in the comments.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="basis-1/3 flex flex-col place-items-center text-center rounded-lg"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.25,
            delay: 0.4,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={ActionImage}
            className="mb-2 h-60 w-70 rounded-lg shadow-lg"
          />
          <h2 className="font-bold text-lg mt-2">Actionable Suggestions</h2>
          <p className="text-sm font-extralight">
            Receive specific suggestions and insights to improve your content
            strategy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
