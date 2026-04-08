"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { CheckCircle2, Send, Loader2, Globe, Bot, ShoppingCart, Building2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  trigger?: React.ReactElement;
}

const projectTypes = [
  { id: "web", label: "Web App", icon: Globe, description: "Custom platforms" },
  { id: "ai", label: "AI Agent", icon: Bot, description: "Smart automation" },
  { id: "ecom", label: "E-Commerce", icon: ShoppingCart, description: "Digital stores" },
  { id: "enterprise", label: "Enterprise", icon: Building2, description: "Scale solutions" },
];

export default function ContactForm({ trigger }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsOpen(false);
      setSelectedType("");
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={trigger || <Button>Contact Us</Button>} />
      <DialogContent className="sm:max-w-[600px] bg-black/90 border-white/10 p-0 overflow-hidden backdrop-blur-xl">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="relative p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <DialogHeader className="text-left">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs mb-2 uppercase tracking-[0.2em]">
                      <Sparkles className="w-3 h-3" />
                      Project Inquiry
                    </div>
                    <DialogTitle className="text-3xl md:text-4xl font-bold font-heading tracking-tighter">
                      Let's build the <span className="text-gradient">future.</span>
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-base mt-2">
                      Fill out the form below, or reach us directly at <span className="text-primary">stsvicky2025@gmail.com</span> or <span className="text-primary">+91 9486261524</span>.
                    </DialogDescription>
                  </DialogHeader>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">01. Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="bg-white/[0.03] border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">02. Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="bg-white/[0.03] border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 transition-all"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-3">
                    <Label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">03. Project Type</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {projectTypes.map((type) => (
                        <label 
                          key={type.id}
                          className={cn(
                            "relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all cursor-pointer group",
                            selectedType === type.id 
                              ? "bg-primary/10 border-primary text-primary" 
                              : "bg-white/[0.03] border-white/10 text-muted-foreground hover:border-white/20 hover:bg-white/[0.05]"
                          )}
                        >
                          <input 
                            type="radio" 
                            name="projectType" 
                            value={type.id} 
                            className="sr-only" 
                            required 
                            onChange={(e) => setSelectedType(e.target.value)}
                          />
                          <type.icon className={cn("w-5 h-5 mb-2 transition-transform duration-300", selectedType === type.id ? "scale-110" : "group-hover:scale-110")} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">{type.label}</span>
                          
                          {selectedType === type.id && (
                            <motion.div 
                              layoutId="active-bg"
                              className="absolute inset-0 rounded-xl bg-primary/5 -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="details" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">04. Project Details</Label>
                    <Textarea 
                      id="details" 
                      placeholder="What are you looking to build? Any specific goals or deadlines?" 
                      required 
                      className="min-h-[120px] bg-white/[0.03] border-white/10 focus:border-primary/50 focus:ring-primary/20 resize-none transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg font-bold indigo-gradient group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Initiate Project
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white/10"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-black px-2 text-muted-foreground font-mono">Or</span>
                      </div>
                    </div>

                    <a 
                      href="https://wa.me/919486261524?text=Have%20a%20Project%20Idea%20or%20Want%20to%20Join%20Our%20Team%3F%20Message%20Us%20Now" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full h-14 rounded-md bg-[#25D366] text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </motion.div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                  <div className="relative w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-primary animate-in zoom-in duration-500" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold font-heading mb-3 tracking-tight">Transmission Received</h3>
                <p className="text-muted-foreground max-w-[320px] text-lg leading-relaxed">
                  Thank you for reaching out. Our lead engineers will review your brief and contact you within 24 hours.
                </p>
                <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-primary/50">
                  Status: Pending Review
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
