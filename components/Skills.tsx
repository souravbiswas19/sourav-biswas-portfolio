"use client";

import React, { useState } from "react";
import { skillGroups } from "@/data";
import {
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import {
  SiC,
  SiDart,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiFlutter,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiFastapi,
  SiFlask,
  SiSwagger,
  SiPostman,
  SiJsonwebtokens,
  SiFirebase,
  SiLangchain,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBG";

const iconMap: { [key: string]: JSX.Element } = {
  FaJava: <FaJava />,
  SiC: <SiC />,
  FaPython: <FaPython />,
  SiDart: <SiDart />,
  GiArtificialIntelligence: <GiArtificialIntelligence />,
  SiTensorflow: <SiTensorflow />,
  SiPytorch: <SiPytorch />,
  SiKeras: <SiKeras />,
  SiFlutter: <SiFlutter />,
  SiFastapi: <SiFastapi />,
  SiJsonwebtokens: <SiJsonwebtokens />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiFirebase: <SiFirebase />,
  SiFlask: <SiFlask />,
  SiSwagger: <SiSwagger />,
  SiPostman: <SiPostman />,
  FaWindows: <FaWindows />,
  FaLinux: <FaLinux />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  SiLangchain: <SiLangchain />,
};

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-12">
      <h1 className="heading text-center mb-12">
        My <span className="text-purple">Skills</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skillGroups.map((group) => (
          <motion.button
            key={group.title}
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-5 text-white font-semibold text-lg rounded-2xl transition-all duration-300 w-full text-center backdrop-blur-md border border-transparent group hover:border-[3px] hover:border-purple-500/70 shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:shadow-purple-500/40"
            onClick={() => setActiveGroup(group.title)}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 group-hover:blur-sm group-hover:opacity-70 transition-all duration-700 rounded-2xl"></span>
            <span className="relative z-10">{group.title}</span>
            <span className="absolute inset-0 z-0 rounded-2xl group-hover:animate-ripple border border-white/20"></span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeGroup && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGroup(null)}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden p-6 bg-black/80 backdrop-blur-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <BackgroundGradientAnimation
                containerClassName="absolute inset-0 z-0 rounded-2xl"
                className="absolute inset-0"
              />
              <div className="relative z-10">
                <h2 className="text-white text-2xl font-bold mb-6 text-center">
                  {activeGroup}
                </h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  {skillGroups
                    .find((g) => g.title === activeGroup)
                    ?.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg shadow-sm text-sm hover:bg-purple-600/20 transition"
                      >
                        <span className="text-purple text-lg">
                          {iconMap[skill.icon] || <span>🚫</span>}
                        </span>
                        {skill.name}
                      </div>
                    ))}
                </div>
                {/* ✕ Button removed */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
