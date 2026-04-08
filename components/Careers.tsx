"use client";

import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    location: "Remote / Manapparai",
    type: "Full-time",
    salary: "$140k - $180k",
  },
  {
    title: "AI Research Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$150k - $200k",
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-heading mb-6"
            >
              Join the <span className="text-gradient">Team</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Have a Project Idea or Want to Join Our Team? Message Us Now. We're always looking for talented individuals who are passionate about engineering the future.
            </p>
            <Button variant="outline" className="border-border hover:bg-accent/50">
              View All Openings
            </Button>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:bg-accent/50 hover:border-primary/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="text-indigo-400/60 font-medium">
                      {job.salary}
                    </div>
                  </div>
                </div>
                <Button className="indigo-gradient opacity-0 group-hover:opacity-100 transition-opacity">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
