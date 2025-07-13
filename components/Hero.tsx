"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  return (
    <WavyBackground className="pb-40 pt-36 max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-6">
      <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mb-4">
        Empowering Applications with Neural Intelligence
      </h2>

      <TextGenerateEffect
        className="text-white text-[40px] md:text-5xl lg:text-6xl font-semibold"
        words="Translating Research into Real-World AI Solutions"
      />

      <div className="mt-6 mb-8 text-white md:tracking-wider text-sm md:text-lg lg:text-2xl">
        Hi, I&apos;m Sourav, a Computer Science Engineer
      </div>

      <a href="#about">
        <MagicButton
          title="Show my work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </WavyBackground>
  );
};

export default Hero;
