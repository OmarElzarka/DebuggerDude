"use client";

import { motion } from "framer-motion";
import { Eye, BrainCircuit, Route, Sparkles, Sprout, Code2 } from "lucide-react";

const features = [
  {
    title: "Visual-First Explanations",
    description: "Code is abstract. We turn memory layouts, pointers, and data structures into clear, animated visuals so you see exactly what happens under the hood.",
    icon: Eye,
  },
  {
    title: "Real Engineering Intuition",
    description: "Stop memorizing algorithms. We focus on the 'why' and 'how' so you can build the deep intuition needed to solve unseen problems.",
    icon: BrainCircuit,
  },
  {
    title: "Structured Learning Paths",
    description: "No more getting lost in tutorials. Our playlists are carefully organized to take you from fundamental concepts to advanced system design.",
    icon: Route,
  },
  {
    title: "High-Quality Animations",
    description: "Premium animations that meticulously trace every step of an algorithm, making complex logic feel incredibly simple.",
    icon: Sparkles,
  },
  {
    title: "Beginner-Friendly",
    description: "While we cover highly technical and advanced topics, every lesson starts from first principles, assuming no prior magical knowledge.",
    icon: Sprout,
  },
  {
    title: "Built by Engineers",
    description: "Created by an experienced software engineer who knows exactly what it takes to crack interviews and excel in the industry.",
    icon: Code2,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            Why <span className="text-primary">Debugger Dude?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            We believe that if you can't visualize it, you don't truly understand it. Here is how we redefine technical education.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 border border-border/50 group-hover:border-primary/30">
                    <Icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
