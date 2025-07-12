"use client";

import { education } from "@/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
            <Card className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1A1A2E] via-[#0F0F1F] to-[#000000] shadow-md hover:shadow-purple-500/20 transition-all"
                style={{
                  background:
                    'radial-gradient(circle at top left, #310356ff, #000000ff 60%, #1e085a 100%)',
                }}
              >
              <CardHeader className="flex flex-col items-center gap-3">
                {edu.logo && (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                )}
                <CardTitle className="text-lg md:text-xl text-purple font-semibold text-center">
                  {edu.degree}
                </CardTitle>
                <Badge
                  variant="outline"
                  className="w-fit mt-1 text-white border-white/20 bg-white/5"
                >
                  {edu.duration}
                </Badge>
              </CardHeader>
              <CardContent className="pt-2 text-center">
                <p className="text-white font-medium">{edu.institution}</p>
                <p className="text-white/70 text-sm mt-2">{edu.location}</p>
                {edu.marks && (
                  <p className="text-white/80 text-sm mt-3 font-semibold">
                    <span className="text-white">{edu.marks_type}</span>{" "}
                    <span className="text-purple">{edu.marks}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
