"use client";

import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Why Choice?", href: "/#why-us" },
  { name: "Who We Are", href: "/#about" },
  { name: "Career", href: "/careers" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Mail", icon: Mail, href: "mailto:hello@stsa.dev" },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link 
              to="/"
              className="text-2xl font-bold font-heading cursor-pointer inline-block"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                STSA
              </span>
            </Link>
            <p className="text-white/40 max-w-xs leading-relaxed">
              Engineering the future, one product at a time. We build custom software solutions for the modern web.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] text-white/40 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Navigation</h4>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/40 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter/Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Contact Us</h4>
            <p className="text-white/40">
              Ready to start your next project? Reach out to us at <span className="text-indigo-400">hello@stsa.dev</span>
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <p className="text-xs text-white/20 uppercase tracking-widest mb-2">Office</p>
              <p className="text-sm text-white/60">San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-sm">
            © 2025 STSA Software Company. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/20 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
