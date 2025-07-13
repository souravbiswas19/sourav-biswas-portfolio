"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { LampContainer } from "./ui/lamp";
import { ColourfulText } from "./ui/colourful-text";

const ResumeDownload = () => {
  const handleDownload = () => {
    window.open("/224CS1016_Sourav Biswas.pdf", "_blank"); // Ensure the PDF is in /public
  };

  return (
    <section id="resume" className="w-full py-20 px-6 md:px-12">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Download My Resume
          <br />
          <span className="text-xl md:text-3xl font-normal text-slate-400">
            A snapshot of my skills, education & experience
          </span>
        </motion.h1>

        <motion.button
          onClick={handleDownload}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(203, 172, 249, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-fuchsia-600 font-semibold text-lg shadow-xl transition-all"
        >
          <FaDownload className="mr-3 text-white text-xl" />
          Download Resume
          <span className="absolute -inset-0.5 rounded-full bg-purple-500 blur-lg opacity-20 animate-pulse pointer-events-none" />
        </motion.button>
      </LampContainer>
      <h1 className="heading text-center mb-10 mt-24">
        Hold Tight — <ColourfulText text="The Best Is Yet to Come!" />
       </h1>
    </section>
  );
};

export default ResumeDownload;
