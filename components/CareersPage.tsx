"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import { 
  Briefcase, 
  Heart, 
  Coffee, 
  Globe, 
  Zap, 
  Users, 
  GraduationCap, 
  ShieldCheck,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  Upload,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const benefits = [
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world. We believe in results, not office hours.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10"
  },
  {
    icon: ShieldCheck,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
    color: "text-rose-400",
    bg: "bg-rose-500/10"
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and professional growth.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  },
  {
    icon: Zap,
    title: "Latest Tech",
    description: "Get a top-of-the-line MacBook Pro and any software you need to do your best work.",
    color: "text-violet-400",
    bg: "bg-violet-500/10"
  },
  {
    icon: Coffee,
    title: "Flexible PTO",
    description: "Take the time you need to recharge. We value work-life harmony.",
    color: "text-amber-400",
    bg: "bg-amber-500/10"
  },
  {
    icon: Heart,
    title: "Equity Options",
    description: "Every employee is an owner. We offer competitive stock option packages.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10"
  }
];

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$140k - $180k"
  },
  {
    title: "AI/ML Research Engineer",
    department: "Engineering",
    location: "Remote (US/Europe)",
    type: "Full-time",
    salary: "$160k - $210k"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$110k - $150k"
  },
  {
    title: "Technical Product Manager",
    department: "Product",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$130k - $170k"
  }
];

const cultureImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
];

function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Application Sent!</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for applying for the {jobTitle} position. Our team will review your application and get back to you soon.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
          Close
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resume">Resume / CV</Label>
        <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
          <Upload className="w-8 h-8 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
          <p className="text-sm text-muted-foreground">
            Click to upload or drag and drop (PDF, DOCX)
          </p>
          <input type="file" className="hidden" id="resume-upload" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Cover Letter / Additional Info</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us why you're a great fit for this role..." 
          className="min-h-[120px]"
          required
        />
      </div>

      <Button type="submit" className="w-full h-12 indigo-gradient" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
}

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
              <Briefcase className="w-4 h-4" />
              <span>We're Hiring!</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
              Build the future of <span className="text-gradient">Software</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Join a team of world-class engineers and designers dedicated to building high-performance digital products and AI-driven solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-24 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Find your next challenge and help us build the future.</p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                      {job.department}
                    </span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                
                <Dialog>
                  <DialogTrigger render={
                    <Button className="h-12 px-8 indigo-gradient group/btn">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  } />
                  <DialogContent className="sm:max-w-[600px] bg-background border-border">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold font-heading">
                        Apply for {job.title}
                      </DialogTitle>
                      <DialogDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </DialogDescription>
                    </DialogHeader>
                    <ApplicationForm jobTitle={job.title} />
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Don't see a role that fits? We're always looking for great talent.</p>
            <Dialog>
              <DialogTrigger render={
                <Button variant="outline" className="border-border hover:bg-accent/50">
                  Send a General Application
                </Button>
              } />
              <DialogContent className="sm:max-w-[600px] bg-background border-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-heading">
                    General Application
                  </DialogTitle>
                  <DialogDescription>
                    Tell us about yourself and what you're looking for.
                  </DialogDescription>
                </DialogHeader>
                <ApplicationForm jobTitle="General" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">
                Our <span className="text-gradient">Culture</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At STSA, we value autonomy, technical excellence, and continuous learning. We're a distributed team that thrives on clear communication and deep work.
              </p>
              <div className="space-y-4">
                {[
                  "Radical transparency in everything we do.",
                  "Focus on impact over hours worked.",
                  "A culture of experimentation and fast failure.",
                  "Deep respect for craft and technical debt."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={cultureImages[0]}
                alt="Team working"
                className="rounded-2xl aspect-square object-cover col-span-2"
                referrerPolicy="no-referrer"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                src={cultureImages[1]}
                alt="Collaboration"
                className="rounded-2xl aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src={cultureImages[2]}
                alt="Office space"
                className="rounded-2xl aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Perks & Benefits</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We take care of our people so they can focus on doing their best work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:bg-accent/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.bg} ${benefit.color} p-3 mb-6 flex items-center justify-center`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
