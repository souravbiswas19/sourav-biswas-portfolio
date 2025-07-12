"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
  SiFirebase
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

// ICON MAPPER
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

// Gradient palette for cards
const gradients = [
  "from-rose-400 via-pink-500 to-fuchsia-500",
  "from-green-400 via-emerald-500 to-teal-500",
  "from-pink-500 via-red-500 to-yellow-500",
  "from-red-400 via-orange-500 to-amber-500",
  "from-fuchsia-500 to-purple-700",
  "from-orange-400 via-red-500 to-pink-500",
  "from-cyan-400 via-blue-500 to-indigo-600",
  "from-yellow-300 via-orange-400 to-red-500",
  "from-lime-400 via-green-500 to-emerald-500",
  "from-rose-400 via-pink-500 to-fuchsia-500",
  "from-indigo-400 via-violet-500 to-purple-600",
  "from-blue-400 via-cyan-500 to-teal-600",
  "from-amber-300 via-yellow-400 to-orange-500",
  "from-emerald-400 via-green-500 to-lime-500",
  "from-pink-400 via-fuchsia-500 to-violet-600",
  "from-teal-400 via-cyan-500 to-blue-500",
  "from-red-400 via-orange-500 to-amber-500",
  "from-zinc-500 via-neutral-600 to-gray-700",
  "from-violet-500 via-purple-600 to-indigo-700",
  "from-blue-500 via-sky-500 to-cyan-500",
];

const tailwindColorsMap: Record<string, string> = {
  "rose-400": "#fb7185",
  "pink-500": "#ec4899",
  "fuchsia-500": "#d946ef",
  "green-400": "#4ade80",
  "emerald-500": "#10b981",
  "teal-500": "#14b8a6",
  "red-400": "#f87171",
  "orange-500": "#f97316",
  "amber-500": "#f59e0b",
  "purple-700": "#6b21a8",
  "orange-400": "#fb923c",
  "cyan-400": "#22d3ee",
  "blue-500": "#3b82f6",
  "indigo-600": "#4f46e5",
  "yellow-300": "#fde68a",
  "lime-400": "#a3e635",
  "indigo-400": "#818cf8",
  "violet-500": "#8b5cf6",
  "purple-600": "#7c3aed",
  "blue-400": "#60a5fa",
  "cyan-500": "#06b6d4",
  "teal-600": "#0d9488",
  "amber-300": "#fcd34d",
  "yellow-400": "#facc15",
  "green-500": "#22c55e",
  "lime-500": "#84cc16",
  "pink-400": "#f472b6",
  "violet-600": "#7c3aed",
  "teal-400": "#2dd4bf",
  "zinc-500": "#71717a",
  "neutral-600": "#525252",
  "gray-700": "#374151",
  "sky-500": "#0ea5e9",
};

function getCssGradient(twGradient: string) {
  const parts = twGradient.split(" ");
  const colors: string[] = [];

  parts.forEach((part) => {
    if (part.startsWith("from-")) {
      const colorKey = part.replace("from-", "");
      if (tailwindColorsMap[colorKey]) colors.push(tailwindColorsMap[colorKey]);
    } else if (part.startsWith("via-")) {
      const colorKey = part.replace("via-", "");
      if (tailwindColorsMap[colorKey]) colors.push(tailwindColorsMap[colorKey]);
    } else if (part.startsWith("to-")) {
      const colorKey = part.replace("to-", "");
      if (tailwindColorsMap[colorKey]) colors.push(tailwindColorsMap[colorKey]);
    }
  });

  if (colors.length === 0) return "transparent";
  return `linear-gradient(to bottom right, ${colors.join(", ")})`;
}

const Skills = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12" id="skills">
      <h1 className="heading text-center">
        My <span className="text-purple">Skills</span>
      </h1>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0 items-start">
        {skillGroups.map((group, index) => (
          <CardContainer key={group.title} className="inter-var">
            <CardBody className="relative z-10 h-auto border border-white/10 p-5 rounded-2xl shadow-md hover:shadow-purple-400/40">
              {/* Gradient background with opacity 0.2 */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: getCssGradient(gradients[index % gradients.length]),
                  opacity: 0.2,
                  zIndex: 0,
                }}
              />

              {/* Content on top */}
              <CardItem
                translateZ="40"
                className="text-xl font-semibold text-white mb-4 relative z-10"
              >
                {group.title}
              </CardItem>

              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills.map((skill) => (
                  <CardItem
                    key={skill.name}
                    translateZ={20}
                    className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3 py-2 rounded-lg text-sm"
                  >
                    <span className="text-lg">{iconMap[skill.icon]}</span>
                    {skill.name}
                  </CardItem>
                ))}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Skills;
