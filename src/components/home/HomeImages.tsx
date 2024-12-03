"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Scotty from "@/public/pages/Scotty.png";
import GroupPhoto from "@/public/pages/GroupPhoto.png";
import BoardPhoto from "@/public/pages/BoardPhoto2.png";

const HomeImages = () => {
  return (
    <motion.div
      className="flex h-full w-4/5 flex-row items-center gap-2"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.div
        className="h-full w-[72%]"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
        }}
      >
        <Image src={Scotty} alt="Scotty" />
      </motion.div>

      <motion.div
        className="flex h-full w-[70%] flex-col gap-2"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div
          className="h-full w-[90%]"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <Image src={GroupPhoto} alt="GroupPhoto" />
        </motion.div>

        <motion.div
          className="h-full w-[90%]"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <Image src={BoardPhoto} alt="BoardPhoto" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomeImages;
