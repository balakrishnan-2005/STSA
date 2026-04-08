"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  BotMessageSquare,
  X, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Minimize2, 
  Maximize2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

const SYSTEM_INSTRUCTION = `You are the STSA AI Assistant. You help visitors learn about STSA Software Company.
STSA is a world-class software development company specializing in:
- Custom Digital Products (Web & Mobile Apps)
- AI-Driven Solutions & Automation
- High-Performance Engineering
- Product Design & Strategy

Key facts:
- Remote-first team with global talent.
- Focus on technical excellence and deep work.
- We have a Careers page with open roles like Full Stack Engineer, AI Research Engineer, etc.
- Our process involves discovery, design, development, and deployment.

Be professional, helpful, and concise. If you don't know something, offer to connect them with our team via the Contact page.`;

interface Message {
  role: "user" | "model";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hi! I'm the STSA Assistant. How can I help you build the future today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey || apiKey === "") {
        throw new Error("API_KEY_MISSING");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Gemini requires the conversation to start with a user message
      const apiMessages = messages
        .concat({ role: "user", text: userMessage })
        .filter((m, i) => {
          // Skip the initial model greeting for the API call if it's the first message
          if (i === 0 && m.role === "model") return false;
          return true;
        })
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: apiMessages,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: "model", text: aiText }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      let errorMessage = "Sorry, I'm having trouble connecting right now. Please try again later.";
      
      if (error instanceof Error && error.message === "API_KEY_MISSING") {
        errorMessage = "The Gemini API key is missing. Please add GEMINI_API_KEY to your environment variables to enable the AI assistant.";
      } else if (error instanceof Error && (error.message.includes("API_KEY_INVALID") || error.message.includes("403"))) {
        errorMessage = "The Gemini API request failed. Please check if your API key is valid and has the necessary permissions.";
      }
      
      setMessages(prev => [...prev, { role: "model", text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-32 right-6 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "64px" : "min(500px, calc(100vh - 100px))",
              width: "calc(100vw - 32px)",
              maxWidth: "350px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col z-[101]"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-accent/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-heading leading-none">STSA Assistant</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="icon-xs" 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-accent"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon-xs" 
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-accent"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border"
                >
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: m.role === "user" ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex gap-2 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${
                          m.role === "user" ? "bg-indigo-500/20 text-indigo-400" : "bg-accent text-muted-foreground"
                        }`}>
                          {m.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm ${
                          m.role === "user" 
                            ? "bg-indigo-500 text-white rounded-tr-none" 
                            : "bg-accent/50 text-foreground rounded-tl-none border border-border"
                        }`}>
                          <div className="prose prose-invert prose-sm max-w-none">
                            <ReactMarkdown>{m.text}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[85%]">
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                          <Bot className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                        <div className="p-3 rounded-2xl bg-accent/50 border border-border rounded-tl-none">
                          <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border bg-background">
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="relative"
                  >
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything..."
                      className="pr-10 bg-accent/30 border-border focus-visible:ring-indigo-500"
                    />
                    <Button 
                      type="submit"
                      size="icon-xs" 
                      disabled={!input.trim() || isLoading}
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 indigo-gradient z-10"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </Button>
                  </form>
                  <p className="text-[10px] text-center text-muted-foreground mt-2 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    Powered by STSA AI
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100 pointer-events-auto"
        } bg-indigo-600 text-white group relative z-[9999]`}
      >
        <BotMessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 border-2 border-background rounded-full animate-bounce" />
      </button>
    </div>
  );
}
