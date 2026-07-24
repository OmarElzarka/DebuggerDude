"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const countries = [
  "Egypt", "Saudi Arabia", "Morocco", "Algeria", 
  "UAE", "Jordan", "Iraq", "Tunisia", 
  "United States", "Germany", "United Kingdom", "Canada"
];

export function CommunitySection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden border-b border-border/20">
      {/* Abstract Map Graphic (Using radial gradients to simulate a globe/map presence) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border-[1px] border-primary/20 absolute animate-[spin_60s_linear_infinite]" />
        <div className="w-[600px] h-[600px] rounded-full border-[1px] border-primary/30 absolute animate-[spin_40s_linear_infinite_reverse]" />
        <div className="w-[400px] h-[400px] rounded-full border-[1px] border-primary/40 absolute animate-[spin_20s_linear_infinite]" />
        
        {/* Glowing center */}
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-[100px] absolute" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          <Globe2 className="w-8 h-8 text-primary" />
        </motion.div>

        <div className="text-center mb-12 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            A Global Engineering <span className="text-primary">Community</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Debugger Dude is followed by software engineers across the Arab world and beyond. We are united by a shared passion for mastering technology and building the future.
          </motion.p>
        </div>

        {/* Floating Country Chips */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {countries.map((country, idx) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 + 0.2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-background border border-border/50 rounded-full text-sm font-semibold text-foreground shadow-sm hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all cursor-default flex items-center space-x-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{country}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
