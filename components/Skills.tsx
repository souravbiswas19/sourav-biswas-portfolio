"use client";

import React from "react";
import { skillGroups } from "@/data";
import { BackgroundGradient } from "./ui/background-gradient";

// ICONS
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
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

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
};

const Skills = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12" id="skills">
      <h1 className="heading text-center">
        My <span className="text-purple">Skills</span>
      </h1>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {skillGroups.map((group) => (
          <BackgroundGradient
            key={group.title}
            className="rounded-[22px] p-6 sm:p-10 bg-white dark:bg-zinc-900"
          >
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-black/10 dark:bg-white/10 border border-white/20 text-black dark:text-white px-3 py-2 rounded-lg text-sm"
                >
                  <span className="text-lg text-purple-500 dark:text-purple-400">
                    {iconMap[skill.icon]}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default Skills;
