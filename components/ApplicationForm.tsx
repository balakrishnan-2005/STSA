"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Linkedin,
  Github,
  Globe,
  Link as LinkIcon,
  CheckCircle2, 
  Upload, 
  Loader2, 
  Send, 
  Sparkles,
  User,
  Mail,
  Phone,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ApplicationFormProps {
  jobTitle: string;
  onSuccess?: () => void;
}

export default function ApplicationForm({ jobTitle, onSuccess }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSuccess) {
      setTimeout(onSuccess, 3000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 text-center"
      >
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="relative w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 animate-in zoom-in duration-500" />
          </div>
        </div>
        <h3 className="text-2xl font-bold font-heading mb-2 tracking-tight">Application Transmitted</h3>
        <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
          Your credentials for the <span className="text-emerald-400 font-medium">{jobTitle}</span> position have been successfully received.
        </p>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-500/50">
          Status: Processing Queue
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit} 
      className="space-y-4 py-4"
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="fullName" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <User className="w-3 h-3" /> 01. Full Name
        </Label>
        <Input 
          id="fullName" 
          placeholder="John Doe" 
          required 
          className="bg-white/[0.03] border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-10 transition-all"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Mail className="w-3 h-3" /> 02. Gmail / Email
          </Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@gmail.com" 
            required 
            className="bg-white/[0.03] border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-10 transition-all"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Phone className="w-3 h-3" /> 03. Phone Number
          </Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+91 00000 00000" 
            required 
            className="bg-white/[0.03] border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-10 transition-all"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="linkedin" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Linkedin className="w-3 h-3" /> 04. LinkedIn URL
          </Label>
          <Input 
            id="linkedin" 
            type="url" 
            placeholder="linkedin.com/in/username" 
            required 
            className="bg-white/[0.03] border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-10 transition-all"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="space-y-2">
          <Label htmlFor="github" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <Github className="w-3 h-3" /> 05. GitHub URL
          </Label>
          <Input 
            id="github" 
            type="url" 
            placeholder="github.com/username" 
            required 
            className="bg-white/[0.03] border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-10 transition-all"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="portfolio" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <LinkIcon className="w-3 h-3" /> 06. Portfolio URL
        </Label>
        <Input 
          id="portfolio" 
          type="url" 
          placeholder="yourportfolio.com" 
          required 
          className="bg-white/[0.03] border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/20 h-10 transition-all"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <Label htmlFor="resume" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <FileText className="w-3 h-3" /> 07. Resume / CV
        </Label>
        <label 
          htmlFor="resume-upload"
          className={cn(
            "border-2 border-dashed rounded-xl p-4 text-center transition-all cursor-pointer group flex flex-col items-center justify-center gap-1",
            fileName 
              ? "border-emerald-500/30 bg-emerald-500/5" 
              : "border-white/10 bg-white/[0.02] hover:border-indigo-500/30 hover:bg-white/[0.04]"
          )}
        >
          <Upload className={cn("w-5 h-5 transition-colors", fileName ? "text-emerald-400" : "text-muted-foreground group-hover:text-indigo-400")} />
          <p className="text-[10px] text-muted-foreground">
            {fileName ? (
              <span className="text-emerald-400 font-medium">{fileName}</span>
            ) : (
              "Upload Resume (PDF, DOCX)"
            )}
          </p>
          <input 
            type="file" 
            className="hidden" 
            id="resume-upload" 
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
        </label>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-2">
        <Button 
          type="submit" 
          className="w-full h-12 indigo-gradient group relative overflow-hidden font-bold" 
          disabled={isSubmitting}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Transmitting...
              </>
            ) : (
              <>
                Submit Application
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </span>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </motion.div>
      
      <motion.p variants={itemVariants} className="text-[10px] text-center text-muted-foreground flex items-center justify-center gap-1">
        <Sparkles className="w-3 h-3 text-indigo-400" />
        Join the STS Engineering Collective
      </motion.p>
    </motion.form>
  );
}
