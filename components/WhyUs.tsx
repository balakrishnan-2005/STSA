"use client";

import { motion } from "motion/react";
import { Code, Zap, Cpu, Headphones } from "lucide-react";

const features = [
  {
    title: "100% Custom Code",
    description: "No templates. Every line written specifically for your project and goals.",
    icon: Code,
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    title: "Fast Delivery",
    description: "Agile sprints with clear milestones so you always know where your project stands.",
    icon: Zap,
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "AI-Powered",
    description: "We embed modern AI capabilities into products to future-proof your business.",
    icon: Cpu,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Dedicated Support",
    description: "Post-launch support and maintenance so your product keeps running flawlessly.",
    icon: Headphones,
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-6 relative overflow-hidden bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            Why STSA?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We don't just write code — we engineer solutions that drive real business outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:bg-accent/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
