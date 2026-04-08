"use client";

import { motion } from "motion/react";
import { Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              About the <span className="text-gradient">Company</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              STSA is a forward-thinking software engineering firm dedicated to building high-performance digital products. We combine technical excellence with strategic design to help businesses scale in an AI-driven world.
            </p>
            <div className="space-y-6">
              {[
                { icon: Users, title: "Expert Team", text: "A collective of senior engineers and designers." },
                { icon: Target, title: "Our Mission", text: "To empower businesses with custom, scalable technology." },
                { icon: Rocket, title: "Our Vision", text: "Leading the transition to intelligent, AI-first software." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-border bg-card p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-500/5 blur-3xl" />
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold font-heading text-indigo-400 mb-2">5+</div>
                <div className="text-muted-foreground uppercase tracking-widest text-sm">Years of Innovation</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-500/10 blur-2xl rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
