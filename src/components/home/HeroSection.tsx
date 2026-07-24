"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
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
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 bg-background pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {mounted && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Animated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-1.5 mb-10 border border-border/50 backdrop-blur-sm"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.7)]"></span>
          <span className="text-sm font-medium text-muted-foreground">Master Programming Visually</span>
        </motion.div>

        {/* Big Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex items-center space-x-2 md:space-x-4 mb-8 select-none"
        >
          <span className="font-extrabold text-6xl md:text-8xl tracking-tight text-white drop-shadow-sm">
            Debugger
          </span>
          <span className="font-extrabold text-6xl md:text-8xl tracking-tight text-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            DUDE
          </span>
          <span className="font-extrabold text-6xl md:text-8xl tracking-tight text-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] opacity-90">
            {`</>`}
          </span>
        </motion.div>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl font-medium text-foreground max-w-3xl mx-auto mb-6 leading-tight"
        >
          Helping software engineers master programming, problem solving, data structures, algorithms, and system design through beautiful visual explanations.
        </motion.p>
        
        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          No fluff. No endless text. Just pure, intuitive visual understanding that translates complex abstract concepts into concrete mental models. Join the community and elevate your engineering skills.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link href="/learn" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto text-base font-semibold rounded-full h-14 px-10 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-shadow duration-300")}>
            Start Learning
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto text-base font-semibold rounded-full h-14 px-10 bg-transparent border-border hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm")}>
            <FaYoutube className="mr-2 w-6 h-6 text-red-500" />
            Watch on YouTube
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
