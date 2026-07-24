"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24 border-b border-border/20">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 bg-background pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {mounted && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
              animate={{
                x: [0, 80, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]"
              animate={{
                x: [0, -80, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-muted/30 rounded-full px-5 py-2 mb-12 border border-border/40 backdrop-blur-md shadow-lg"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Building Real Engineering Intuition</span>
        </motion.div>

        {/* Stacked Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center mb-10 select-none"
        >
          <span className="font-extrabold text-7xl md:text-[110px] tracking-tighter text-white drop-shadow-md leading-none mb-2">
            Debugger
          </span>
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <span className="font-black text-7xl md:text-[110px] tracking-tighter text-primary drop-shadow-[0_0_25px_rgba(16,185,129,0.4)] leading-none">
              DUDE
            </span>
            <span className="font-black text-6xl md:text-[90px] tracking-tighter text-primary drop-shadow-[0_0_25px_rgba(16,185,129,0.4)] leading-none opacity-80">
              {`</>`}
            </span>
          </div>
        </motion.div>

        {/* New Premium Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-semibold text-foreground max-w-4xl mx-auto mb-8 leading-tight tracking-tight"
        >
          Master algorithms and system design through beautiful visual explanations, not mindless memorization.
        </motion.p>
        
        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
        >
          We translate complex abstract engineering concepts into concrete, intuitive mental models. Join thousands of software engineers building stronger problem-solving skills for real-world careers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Link href="/learn" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto text-lg font-bold rounded-full h-16 px-12 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all duration-300")}>
            Start Learning
            <ChevronRight className="ml-3 w-6 h-6" />
          </Link>
          <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto text-lg font-bold rounded-full h-16 px-12 bg-transparent border-border/80 hover:bg-white/5 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm")}>
            <FaYoutube className="mr-3 w-6 h-6 text-red-500" />
            Watch on YouTube
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
