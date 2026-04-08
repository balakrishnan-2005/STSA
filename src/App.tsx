import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroGeometric from "@/components/ui/shape-landing-hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Careers from "@/components/Careers";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";
import CareersPage from "@/components/CareersPage";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroGeometric
        badge="STS | Engineering the Future"
        title1="Architecting Tomorrow."
        title2="Engineering Today."
        subtitle="We don't just build software; we engineer digital legacies. From hyper-intelligent AI automation to immersive web experiences, we're building the infrastructure of 2030."
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg indigo-gradient group relative overflow-hidden"
              onClick={() => scrollToSection("#projects")}
            >
              <span className="relative z-10 flex items-center">
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 backdrop-blur-sm"
              onClick={() => scrollToSection("#about")}
            >
              Our Vision
            </Button>
          </div>

          {/* Interactive Future Status */}
          <div className="flex items-center gap-6 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Neural Link: Active</span>
            </div>
            <div className="w-[1px] h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-75 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">AI Core: Online</span>
            </div>
            <div className="w-[1px] h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-150 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Future: Loading</span>
            </div>
          </div>
        </div>
      </HeroGeometric>

      <About />
      <Projects />
      <WhyUs />
      <Services />
      <Process />
      <Careers />
    </>
  );
}

import { ThemeProvider } from "@/components/theme-provider";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <ChatBot />
        <WhatsAppButton />
        <main className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 selection:text-indigo-200 relative">
          <DottedSurface className="opacity-40" />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
          <CTA />
          <Footer />
        </main>
      </Router>
    </ThemeProvider>
  );
}
