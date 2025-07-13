"use client";

import { education } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const Education = () => {
  return (
    <section className="w-full py-20 px-4 md:px-10" id="education">
      <h1 className="heading text-center">
        My <span className="text-purple">Educational Background</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <CardContainer>
              <CardBody
                className="
                  relative group/card
                  rounded-2xl p-6 border border-white/10 shadow-md hover:shadow-purple-500/20 transition-all
                  flex flex-col items-center text-center
                  bg-[radial-gradient(circle_at_top_left,_#310356ff,_#000000ff_60%,_#1e085a_100%)]
                "
              >
                <CardItem translateZ={60} className="mb-6">
                  {edu.logo && (
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  )}
                </CardItem>

                <CardItem
                  translateZ={40}
                  className="text-lg md:text-xl text-purple font-semibold mb-1"
                >
                  {edu.degree}
                </CardItem>

                <CardItem translateZ={30} className="mb-3 leading-[3.0]">
                  <span
                    className="w-fit text-white border border-white/20 bg-white/5 rounded px-3 py-1 text-sm font-semibold"
                    aria-label="Duration"
                  >
                    {edu.duration}
                  </span>
                </CardItem>

                <CardItem className="pt-2 text-center leading-[3.0]" translateZ={30}>
                  <p className="text-white font-medium">{edu.institution}</p>
                  <p className="text-white/70 text-sm mt-2">{edu.location}</p>
                  {edu.marks && (
                    <p className="text-white/80 text-sm mt-3 font-semibold">
                      <span className="text-white">{edu.marks_type}</span>{" "}
                      <span className="text-purple">{edu.marks}</span>
                    </p>
                  )}
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
