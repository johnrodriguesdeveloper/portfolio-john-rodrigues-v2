"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // 1. Importe o motion

function Photo() {
  return (
    <div className="w-full h-full relative">
      {/* Container que define o tamanho e o posicionamento */}
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative">
        {/* 2. Adicione o SVG animado aqui */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99" // Você pode trocar a cor aqui
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

        {/* Seu componente de Imagem original */}
        <Image
          src="/photo.jpeg"
          priority
          quality={100}
          fill
          alt="Minha Foto"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default Photo;
