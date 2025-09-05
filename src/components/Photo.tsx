"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Photo() {
  const circleSize = 498;
  const svgViewBoxSize = circleSize + 2;
  const circleRadius = circleSize / 2;
  const circleCenter = svgViewBoxSize / 2;

  return (
    <div className="w-full h-full relative">
      <div className="w-[298px] h-[298px] xl:w-[460px] xl:h-[460px] relative">
        <motion.svg
          className="absolute top-0 left-0 w-full h-full z-10"
          fill="transparent"
          viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={circleCenter}
            cy={circleCenter}
            r={circleRadius}
            stroke="#6366F1"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
        <Image
          src="/photo.jpeg"
          priority
          quality={100}
          fill
          alt="Minha Foto"
          className="object-cover rounded-full z-0"
        />
      </div>
    </div>
  );
}

export default Photo;
