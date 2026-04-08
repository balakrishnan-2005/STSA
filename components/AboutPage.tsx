"use client";

import { motion } from "motion/react";
import { Target, Heart, History, Users, Shield, Zap, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We don't just follow trends; we set them. We're constantly exploring new technologies to give our clients a competitive edge.",
    color: "text-indigo-400",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description: "Transparency is at our core. We build lasting relationships through honest communication and reliable delivery.",
    color: "text-rose-400",
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description: "Every line of code we write is focused on the end-user experience. If it's not intuitive, it's not finished.",
    color: "text-cyan-400",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We work as an extension of your team. Your success is our success, and we're with you every step of the way.",
    color: "text-violet-400",
  },
];

const historyMilestones = [
  {
    year: "2020",
    title: "The Genesis",
    description: "STS was founded with a singular mission: to redefine the boundaries of what's possible in digital engineering.",
  },
  {
    year: "2021",
    title: "AI Singularity",
    description: "Successfully deployed our first neural-network based automation platform, setting a new standard for enterprise efficiency.",
  },
  {
    year: "2023",
    title: "Quantum Leap",
    description: "Expanded our operations globally, building a distributed network of elite engineers focused on high-impact future tech.",
  },
  {
    year: "2025",
    title: "The Future is Now",
    description: "Recognized as a world leader in custom AI agents and immersive digital ecosystems that define the next era of the web.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8"
          >
            <History className="w-4 h-4" />
            <span>Our Journey</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold font-heading mb-8 tracking-tight"
          >
            Architecting the <span className="text-gradient">Next Dimension.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans"
          >
            STS is more than a software firm; we are a laboratory for the future. We bridge the gap between human imagination and machine intelligence.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our mission is to empower businesses with custom-built technology that is not only functional but transformative. We believe that software should be a catalyst for growth, not a bottleneck.
              </p>
              <div className="p-8 rounded-2xl bg-card border border-border relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                <Target className="w-12 h-12 text-indigo-400 mb-6" />
                <p className="text-xl font-medium text-foreground italic">
                  "To build the world's most reliable, intelligent, and user-centric software ecosystems for the businesses of tomorrow."
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden border border-border bg-card p-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-500/5 blur-3xl" />
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-indigo-400">100+</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-rose-400">98%</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-cyan-400">50+</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Expert Engineers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold font-heading text-violet-400">24/7</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-widest mt-2">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide every decision we make and every line of code we write.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:bg-accent/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`mb-6 ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our History</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From a small startup to a global leader in software engineering.</p>
          </div>
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/20 before:to-transparent">
            {historyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/50 bg-background text-indigo-400 font-bold font-heading shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {milestone.year.slice(2)}
                </div>
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border hover:border-indigo-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-foreground text-lg font-heading">{milestone.title}</h4>
                    <time className="font-heading font-bold text-indigo-400 md:hidden">{milestone.year}</time>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Have a question or want to discuss a project? We're here to help. Reach out to us directly or use our contact form.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Email</p>
                    <a href="mailto:stsvicky2025@gmail.com" className="text-xl font-bold hover:text-indigo-400 transition-colors">
                      stsvicky2025@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Phone</p>
                    <a href="tel:9486261524" className="text-xl font-bold hover:text-rose-400 transition-colors">
                      +91 9486261524
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-indigo-500/5 blur-3xl" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold font-heading mb-4">Have a Project Idea or Want to Join Our Team?</h3>
                <p className="text-muted-foreground mb-8">
                  Message Us Now and we'll help you bring your vision to life.
                </p>
                <Link to="/#contact">
                  <Button size="lg" className="indigo-gradient h-12 px-8">
                    Go to Contact Form
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
