"use client";

import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import ApplicationForm from "@/components/ApplicationForm";

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    location: "Remote / Manapparai",
    type: "Full-time",
    salary: "$140k - $180k",
    department: "Engineering",
    tags: ["React", "Node.js", "TypeScript"]
  },
  {
    title: "AI Research Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$150k - $200k",
    department: "AI/ML",
    tags: ["PyTorch", "LLMs", "Python"]
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    department: "Design",
    tags: ["Figma", "UX/UI", "Motion"]
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Briefcase className="w-3 h-3" /> Careers
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                Join the <span className="text-gradient">Engineering Collective</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We're building the infrastructure of 2030. If you're a high-agency engineer who loves deep work and technical excellence, we want to hear from you.
              </p>
              <Button 
                variant="outline" 
                className="border-border hover:bg-accent/50 h-12 px-8"
                onClick={() => {
                  const element = document.getElementById("open-positions");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/careers";
                  }
                }}
              >
                View All Openings
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:bg-white/[0.02] hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                        {job.department}
                      </span>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-indigo-400 transition-colors">
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-indigo-400/80">
                        {job.salary}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-muted-foreground/60 border border-white/5 px-2 py-0.5 rounded bg-white/[0.02]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger render={
                      <Button className="h-12 px-8 indigo-gradient group/btn shrink-0 md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-4 group-hover:translate-x-0">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    } />
                    <DialogContent className="sm:max-w-[600px] bg-black/90 border-white/10 p-0 overflow-hidden backdrop-blur-xl">
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                           style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                      
                      <div className="relative p-8 md:p-10">
                        <DialogHeader className="text-left mb-8">
                          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs mb-2 uppercase tracking-[0.2em]">
                            <Sparkles className="w-3 h-3" />
                            Career Opportunity
                          </div>
                          <DialogTitle className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">
                            Join as <span className="text-gradient">{job.title}</span>
                          </DialogTitle>
                          <DialogDescription className="text-muted-foreground text-base mt-2">
                            Take the next step in your career. We're looking for exceptional talent to join our mission.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <ApplicationForm jobTitle={job.title} />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
