import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4" initial="hidden" animate="visible"
      variants={containerVariants}>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">Hi, I'm{" "}
        <motion.span className="text-transparent stroke-text"  initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}>Maroua Boumchich</motion.span>
        </h1>
        <motion.p className="text-lg sm:text-2xl max-w-3xl mb-6 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}>
          A Web Developer passionate about creating modern and interactive web application.
        </motion.p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-sky-900 text-white rounded-lg shadow-lg hover:bg-sky-700">
            View My Projects
          </button>
          <button className="px-6 py-3 bg-gray-200 text-sky-900 rounded-lg shadow-lg hover:bg-gray-300">
            <a href="/pages/about">About Me</a>
          </button>
        </div>
      </motion.div>
  )
}

export default Hero