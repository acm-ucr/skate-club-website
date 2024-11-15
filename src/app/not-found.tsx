"use client";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black p-4 text-center font-banco text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:text-12xl mb-4 text-4xl font-bold sm:text-5xl md:text-8xl"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16 text-lg sm:text-xl md:text-2xl lg:text-3xl"
        >
          Oops! Page not found
        </motion.p>
        <motion.a
          href="/"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.5,
            type: "spring",
            stiffness: 250,
          }}
          className="rounded-full bg-white px-6 py-3 font-semibold text-black"
        >
          Go back home
        </motion.a>
      </motion.div>

      <div>
        <motion.img
          src="/assets/Ghost.svg"
          alt="Ghost"
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ rotate: -15, y: 20 }}
          className="absolute bottom-0 h-64 w-64"
        />

        <motion.img
          src="/assets/Skater.svg"
          alt="Skater"
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          style={{ rotate: -65, y: 45 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 h-64 w-64"
        />
      </div>
    </div>
  );
}
