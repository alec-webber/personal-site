"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Meme Generator",
    description:
      "A low-fidelity meme generator built to improve skills with modern web development tools. Features drag-and-drop functionality and real-time preview.",
    image: "",
    link: "https://github.com/alec-webber/meme-generator",
    github: "https://github.com/alec-webber/meme-generator",
  },
  {
    id: "2",
    title: "Folder Alec",
    description:
      "A creative project exploring file organization and visualization. Built with modern web technologies and interactive UI components.",
    image: "",
    link: "https://github.com/alec-webber/folder-alec",
    github: "https://github.com/alec-webber/folder-alec",
  },
  {
    id: "3",
    title: "Personal Site",
    description:
      "My personal website and portfolio showcasing projects, thoughts, and creative work. Built with Next.js and modern design principles.",
    image: "",
    link: "https://github.com/alec-webber/personal-site",
    github: "https://github.com/alec-webber/personal-site",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of personal projects and experiments. Each one represents 
            a learning journey and an opportunity to build something meaningful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            More projects coming soon...
          </p>
          <motion.a
            href="https://github.com/alec-webber"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg transition-shadow"
          >
            View All on GitHub
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
