"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";
import { useNavigate, useLocation } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewWork = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#projects");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center border border-border bg-card backdrop-blur-2xl"
        >
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Ready to Build Something Great?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
              Have a Project Idea or Want to Join Our Team? <span className="text-gradient">Message Us Now</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed">
              Let's talk about your project. We'll get back to you within 24 hours with a clear roadmap and strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactForm 
                trigger={
                  <Button size="lg" className="h-14 px-8 text-lg indigo-gradient group">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg border-border hover:bg-accent/50"
                onClick={handleViewWork}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
