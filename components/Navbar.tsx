"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Why Choice?", href: "/#why-us" },
  { name: "Who We Are", href: "/#about" },
  { name: "Career", href: "/careers" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/60 backdrop-blur-xl border-b border-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-bold font-heading cursor-pointer flex items-center gap-2 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <motion.span 
            animate={{ 
              textShadow: [
                "0 0 0px rgba(99,102,241,0)", 
                "0 0 15px rgba(99,102,241,0.4)", 
                "0 0 0px rgba(99,102,241,0)"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400"
          >
            STS
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href || (link.href.startsWith("/#") && location.hash === link.href.replace("/", ""));
            
            return (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative text-sm font-medium transition-colors group py-2 px-1",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Active Underline */}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Underline (for non-active) */}
                {!isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20 origin-center"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-lg -z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.button>
            );
          })}
          <div className="flex items-center gap-4 ml-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10 text-primary hover:text-primary/80 transition-all group relative overflow-hidden"
              onClick={() => handleNavClick("/#contact")}
            >
              <span className="relative z-10 flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-primary/10 -z-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-foreground relative z-50">
                  <Menu className="w-6 h-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-background/95 backdrop-blur-2xl border-l border-white/10 text-foreground p-0 w-full sm:max-w-sm">
              <div className="relative h-full flex flex-col p-8 pt-24 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.href || (link.href.startsWith("/#") && location.hash === link.href.replace("/", ""));
                    
                    return (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.05 + 0.2,
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          "group flex items-center justify-between py-4 border-b border-white/5 text-3xl font-bold font-heading transition-colors",
                          isActive ? "text-indigo-400" : "text-foreground/60 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono text-white/20">0{index + 1}</span>
                          {link.name}
                        </div>
                        <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                      </motion.button>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.3 }}
                  className="mt-auto pt-12"
                >
                  <Button 
                    className="h-16 text-lg font-bold indigo-gradient w-full rounded-2xl group"
                    onClick={() => handleNavClick("/#contact")}
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                    <span>System Status: Optimal</span>
                    <span>v2.0.30</span>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
