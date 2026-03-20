"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="bio" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Alec Webber
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
                currently building the future of coding at Cursor
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m driven by curiosity - about people, systems, and how the world works. Continually searching for work that feels both impactful and purposeful. In my current role, I focus on turning AI into dependable, real-world deployments and feedback loops. Outside of product, I prioritize fitness, nature, and spending time with people who challenge and inspire me.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20" />
              <div className="relative w-full h-full">
                <Image
                  src="/stage.PNG"
                  alt="Alec Webber"
                  fill
                  className="object-contain rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
