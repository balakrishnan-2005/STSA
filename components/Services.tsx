"use client";

import { motion } from "motion/react";
import { Globe, ShoppingCart, Bot, Lock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Website Development",
    description: "Pixel-perfect, blazing-fast websites built to reflect your brand and convert visitors into customers.",
    icon: Globe,
    accent: "bg-indigo-500",
    badge: "Available",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  {
    title: "E-Commerce Solutions",
    description: "End-to-end e-commerce platforms with seamless checkout, inventory management, and payment integrations.",
    icon: ShoppingCart,
    accent: "bg-rose-500",
    badge: "Available",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  },
  {
    title: "AI Agent Automation",
    description: "Intelligent AI agents that automate repetitive workflows, reduce costs, and unlock new business capabilities.",
    icon: Bot,
    accent: "bg-cyan-500",
    badge: "Available",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    title: "Private / Enterprise Services",
    description: "Confidential enterprise-grade solutions tailored to specific business needs. Contact us to learn more.",
    icon: Lock,
    accent: "bg-violet-500",
    badge: "Private",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Tailored software solutions engineered for performance, scale, and impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card border border-border rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <div className={cn("absolute top-0 left-0 w-full h-1 transition-all duration-300 opacity-0 group-hover:opacity-100", service.accent)} />
              
              <div className="flex justify-between items-start mb-6">
                <div className={cn("p-3 rounded-xl bg-white/[0.05] group-hover:scale-110 transition-transform duration-300", service.accent.replace("bg-", "text-"))}>
                  <service.icon className="w-6 h-6" />
                </div>
                <span className={cn("px-3 py-1 rounded-full text-xs font-medium border", service.badgeColor)}>
                  {service.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                {service.description}
              </p>

              <div 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors cursor-pointer hover:underline underline-offset-4"
              >
                Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
