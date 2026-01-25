"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-[73px] left-0 right-0 z-40 py-6 px-6 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
        <a
          href="#bio"
          className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          Bio
        </a>
        <a
          href="#projects"
          className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          Projects
        </a>
        <a
          href="#writing"
          className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          Writing
        </a>
      </div>
    </nav>
  );
}
