import SocialLinks from "@/components/SocialLinks";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SocialLinks />
      <Hero />
      <Projects />
      <Writing />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Alec Webber.
          </p>
        </div>
      </footer>
    </main>
  );
}
