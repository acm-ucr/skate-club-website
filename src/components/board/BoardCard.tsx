"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  position: string;
  name: string;
  year: number;
  major: string;
  yearsSkating: string;
  favoriteSkater: string;
  boardImage: StaticImageData;
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BoardCard: React.FC<Props> = ({
  name,
  position,
  yearsSkating,
  year,
  major,
  favoriteSkater,
  boardImage,
}) => {
  return (
    <motion.div
      className="relative flex h-auto w-full flex-col rounded-md bg-[#d9d9d9] p-3"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.1,
        zIndex: 10,
        transition: { duration: 0.2 },
      }}
    >
      <Image
        src={boardImage}
        alt={`Photo of ${name}, ${position}`}
        layout="responsive"
        objectFit="contain"
        className="h-96 w-auto rounded-md"
      />

      <div className="relative mt-1 text-left font-bangers text-sm">
        <div className="text-2xl font-bold md:text-5xl">{name}</div>
        <div className="text-lg md:text-2xl">{position}</div>
        <div className="text-base md:text-xl">Year: {year}</div>
        <div className="text-base md:text-xl">Major: {major}</div>
        <div className="text-base md:text-xl">
          Years Skating: {yearsSkating}
        </div>
        <div className="text-base md:text-xl">
          Favorite Skater: {favoriteSkater}
        </div>
      </div>
    </motion.div>
  );
};

export default BoardCard;
