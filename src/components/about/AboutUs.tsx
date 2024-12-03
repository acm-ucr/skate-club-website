"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      className="flex w-full justify-center"
      initial={{ opacity: 0, x: "-100vw", rotate: -20 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 12,
        duration: 2,
      }}
    >
      <motion.h1
        className="font-banco text-4xl text-white md:text-8xl"
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 8,
          delay: 0.3,
        }}
      >
        About Us
      </motion.h1>
    </motion.div>
  );
};

export default AboutUs;
