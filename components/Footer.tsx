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
  { name: "Mail", icon: Mail, href: "mailto:stsvicky2025@gmail.com" },
  { 
    name: "WhatsApp", 
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ), 
    href: "https://wa.me/919486261524?text=Have%20a%20Project%20Idea%20or%20Want%20to%20Join%20Our%20Team%3F%20Message%20Us%20Now" 
  },
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
                STS
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
            <div className="space-y-4">
              <p className="text-white/40">
                Ready to start your next project? Reach out to us:
              </p>
              <div className="space-y-2">
                <a href="mailto:stsvicky2025@gmail.com" className="block text-indigo-400 hover:text-indigo-300 transition-colors">
                  stsvicky2025@gmail.com
                </a>
                <a href="tel:9486261524" className="block text-indigo-400 hover:text-indigo-300 transition-colors">
                  +91 9486261524
                </a>
                <a 
                  href="https://wa.me/919486261524?text=Have%20a%20Project%20Idea%20or%20Want%20to%20Join%20Our%20Team%3F%20Message%20Us%20Now" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#25D366] hover:text-[#128C7E] transition-colors font-medium flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <p className="text-xs text-white/20 uppercase tracking-widest mb-2">Office</p>
              <p className="text-sm text-white/60">Manapparai, Trichy, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-sm">
            © 2025 STS Software Company. All rights reserved.
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
