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
        badge="STSA Software Company"
        title1="Build Smarter."
        title2="Scale Faster."
        subtitle="We design and engineer custom digital products — from stunning websites to intelligent AI automation — that give your business a competitive edge."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="h-14 px-8 text-lg indigo-gradient group"
            onClick={() => scrollToSection("#projects")}
          >
            Explore Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-8 text-lg border-white/10 hover:bg-white/5"
            onClick={() => scrollToSection("#about")}
          >
            About Us
          </Button>
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
