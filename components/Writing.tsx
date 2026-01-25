"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Typewriter from "./Typewriter";

export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Writing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing thoughts on life, AI, and building things that matter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-900/20 dark:to-indigo-900/20 p-12 border border-cyan-200/50 dark:border-cyan-800/50">
            <div className="text-center space-y-6">
              <div className="mb-4 flex items-center justify-center">
                <Typewriter />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Coming Soon
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m currently drafting and translating my thoughts and experiences into digestible, lesson learning content. Check back soon!
              </p>

              <div className="pt-4">
                <Link
                  href="https://x.com/aleccwebber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg transition-shadow"
                  >
                    Take me to X
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-200/30 dark:bg-cyan-800/30 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
