"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { education } from "@/data";

const Education = () => {
  return (
    <section className="w-full py-20 px-4 md:px-10" id="education">
      <h1 className="heading text-center mb-16">
        My <span className="text-purple">Educational Timeline</span>
      </h1>

      <div className="relative pl-10 md:pl-16 space-y-20">
        {/* Vertical glowing timeline line */}
        <div className="absolute top-0 left-4 md:left-6 h-full w-[2px] bg-gradient-to-b from-purple via-purple/50 to-transparent animate-pulse z-0" />

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start gap-6"
          >
            {/* Year Tag - to the left of the line */}
            <div className="w-40 text-right pr-4">
              <div className="bg-white/10 text-purple border border-purple/30 text-sm font-semibold px-4 py-1 rounded-xl backdrop-blur-md shadow-md min-w-max inline-block">
                {edu.duration}
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="relative z-10 mt-2">
              <div className="w-5 h-5 rounded-full bg-purple border-[4px] border-white shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
            </div>

            {/* Education Card */}
            <div className="relative flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-purple-500/30 duration-300">
              <div className="flex items-center gap-4 mb-4">
                {edu.logo && (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={50}
                    height={50}
                    className="object-contain drop-shadow-md"
                  />
                )}
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-purple leading-tight">
                    {edu.institution}
                  </h2>
                  <span className="text-white/70 text-sm">{edu.location}</span>
                </div>
              </div>

              <p className="text-white font-medium">{edu.degree}</p>
              {/* <p className="text-white/70 text-sm">{}</p> */}

              {edu.marks && (
                <p className="text-white/80 text-sm mt-3 font-semibold">
                  <span className="text-white">{edu.marks_type}</span>
                  <span className="text-purple">{edu.marks}</span>
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
