import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <div className="flex flex-col mx-60 my-20 mt-40">
      <div className="text-xl font-light">How it Works</div>
      <h1 className="text-5xl font-bold mt-6">
        Three Simple steps to Understand your audience
      </h1>
      <p className="text-lg font-light mt-2">
        Our tool makes it easy to extract valuable insights from your YouTube
        comments, helping you improve your content and engage your audience more
        effectively.
      </p>

      <div className="flex gap-10 mt-8">
        {/* Card 1 */}
        <motion.div
          className="basis-1/3 border border-gray-100 shadow-lg rounded-lg p-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
            />
          </svg>
          <h2 className="font-bold text-lg mt-2">Paste your Video Link</h2>
          <p className="text-sm font-extralight">
            Simply paste the link to your YouTube video into the input field.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="basis-1/3 border border-gray-100 shadow-lg rounded-lg p-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
            delay: 0.15,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
          <h2 className="font-bold text-lg mt-2">Analyze Comments</h2>
          <p className="text-sm font-extralight">
            Our AI algorithms analyze all comments to identify key themes and
            sentiments.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="basis-1/3 border border-gray-100 shadow-lg rounded-lg p-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          <h2 className="font-bold text-lg mt-2">Get Actionable Insights</h2>
          <p className="text-sm font-extralight">
            Receive a structured summary report highlighting audience feedback
            and actionable suggestions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
