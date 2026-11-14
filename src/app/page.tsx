import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b]">
      {/* Global ambient spotlights */}
      <div className="spotlight pointer-events-none fixed left-1/2 top-[-20rem] z-0 h-[40rem] w-[70rem] -translate-x-1/2 opacity-70" />
      <div className="spotlight-indigo pointer-events-none fixed bottom-[-18rem] right-[-12rem] z-0 h-[36rem] w-[46rem] opacity-60" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <GitHubActivity />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
