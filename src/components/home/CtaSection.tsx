"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, PlayCircle } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card/50 backdrop-blur-xl border border-border/50 p-12 md:p-16 rounded-[3rem] shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Ready to <span className="text-primary">Level Up?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the community today and start mastering programming through high-quality visual explanations. Your journey to engineering excellence starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link 
              href="/learn" 
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto text-lg font-bold rounded-full h-16 px-10 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all duration-300")}
            >
              <PlayCircle className="mr-3 w-6 h-6" />
              Start Learning Now
            </Link>
            
            <Link 
              href={siteConfig.links.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto text-lg font-bold rounded-full h-16 px-10 bg-background/50 border-border hover:bg-white/10 hover:-translate-y-1 transition-all duration-300")}
            >
              <FaYoutube className="mr-3 w-6 h-6 text-red-500" />
              Visit YouTube Channel
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
