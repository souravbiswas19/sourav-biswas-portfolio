"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const ResumeDownload = () => {
  const handleDownload = () => {
    window.open("/224CS1016_Sourav Biswas.pdf", "_blank"); // Make sure the file is in the public folder
  };

  return (
    <section
      className="w-full py-20 px-6 md:px-12 flex flex-col items-center justify-center"
      id="resume"
    >
      <h1 className="heading text-center mb-10">
        Grab a copy of my <span className="text-purple">Resume</span>
      </h1>

      <motion.button
        onClick={handleDownload}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 25px rgba(203, 172, 249, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-fuchsia-600 font-semibold text-lg shadow-xl transition-all"
      >
        <FaDownload className="mr-3 text-white text-xl" />
        Download Resume
        {/* Optional Sparkle or Pulse Effect */}
        <span className="absolute -inset-0.5 rounded-full bg-purple-500 blur-lg opacity-20 animate-pulse pointer-events-none" />
      </motion.button>

      <h1 className="heading text-center mb-10 mt-24">
        Hold Tight — <span className="text-orange-400">The Best Is Yet to Come!</span>
      </h1>


    </section>
  );
};

export default ResumeDownload;
