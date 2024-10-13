"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";

const HeroContent: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 mb-20 w-full z-20"
    >
      <div className="flex flex-col max-w-md gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-3 px-3 border rounded-xl border-[#7042f88b]"
        >
          <SparklesIcon className="text-purple-400 ml-1 h-6 w-6 float-left mx-6" />
          <h1 className="welcome-text text-[16px] md:text-[18px] text-white tracking-widest">
            FRONTEND DEVELOPER{" "}
            <span className="text-purple-300 -tracking-tight">PORTFOLIO</span>
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-white"
        >
          <h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[28px] md:text-[32px] lg:text-[40px] font-extrabold tracking-widest">
              KASHIF IMRAN
            </span>
          </h1>
          <p className="font-thin text-[12px] md:text-[14px] lg:text-[16px]">
            I'm currently working on a React-based website using Next.js and
            TypeScript. I specialize in building clean, responsive, and
            accessible web applications.
          </p>
          <motion.a
            variants={slideInFromLeft(1)}
            href="/Kashif-Resume.pdf" // Ensure this path is correct
            download
            className="inline-block"
          >
            <button className="py-2 px-4 lg:px-8 border rounded-xl border-[#7042f88b] bg-purple-950 text-white opacity-90 hover:bg-purple-400 transition-colors duration-300 hover:scale-105 focus:outline-none">
              Download CV
            </button>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex justify-center items-center w-full lg:w-1/2 h-full"
      >
        <Image
          src="/kasbg.png"
          alt="Kashif Imran"
          height={600}
          width={600}
          className="object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
