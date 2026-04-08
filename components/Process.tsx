"use client";

import { motion } from "motion/react";
import { Search, Map, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "We learn your goals, users, and business context.",
    icon: Search,
    color: "text-indigo-400",
  },
  {
    title: "Strategy",
    description: "We define scope, tech stack, timeline, and deliverables.",
    icon: Map,
    color: "text-rose-400",
  },
  {
    title: "Design",
    description: "Wireframes and high-fidelity UI designs for your approval.",
    icon: Palette,
    color: "text-cyan-400",
  },
  {
    title: "Development",
    description: "We build with clean, scalable, tested code.",
    icon: Code2,
    color: "text-violet-400",
  },
  {
    title: "Launch & Support",
    description: "We deploy, monitor, and support your product post-launch.",
    icon: Rocket,
    color: "text-amber-400",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            A clear, transparent process from idea to launch.
          </motion.p>
        </div>

        <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-6 overflow-x-auto pb-8 md:pb-0 scrollbar-hide">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[280px] md:min-w-0 group relative p-8 rounded-2xl bg-card border border-border hover:bg-accent/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold font-heading text-foreground/5 mb-6 group-hover:text-foreground/10 transition-colors">
                0{index + 1}
              </div>
              <div className={`mb-6 ${step.color}`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
