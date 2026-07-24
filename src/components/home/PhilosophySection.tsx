"use client";

import { motion } from "framer-motion";

export function PhilosophySection() {
  return (
    <section className="py-32 bg-card relative overflow-hidden border-t border-border/20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Philosophy</span>
            </h2>
            <div className="h-2 w-1/3 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Understanding &gt; Memorization</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The software industry is obsessed with grinding LeetCode and memorizing patterns to pass interviews. We reject this. True engineering power comes from deep comprehension. We build mental models that last a lifetime, not just until your next technical screen.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Visual Thinking</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Human brains are wired for visual processing. By mapping abstract algorithms to spatial, animated visual representations, we drastically reduce cognitive load and make complex data structures instantly intuitive.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">The Engineering Mindset</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just teach you how to write code; we teach you how to think like a senior engineer. We explore edge cases, time/space trade-offs, and system constraints so you can make informed architectural decisions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Progressive Mastery</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Learning is a journey. We start every topic from absolute first principles, ensuring you have a rock-solid foundation before progressively layering on advanced concepts and complex optimizations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
