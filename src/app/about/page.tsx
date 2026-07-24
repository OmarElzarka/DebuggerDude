import { Mail } from "lucide-react";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About | Debugger Dude",
  description: "The story behind Debugger Dude and our mission to make programming visually intuitive.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Mission</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
            To empower software engineers by translating complex abstract concepts into concrete, intuitive visual mental models.
          </p>
        </section>

        {/* Vision & Philosophy Section */}
        <section className="bg-card border border-border/50 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl shadow-black/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The Problem with Traditional Learning</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Software engineering is inherently abstract. When you read a text-based explanation of an algorithm or study a dense block of code, your brain has to work incredibly hard to mentally simulate the state changes, memory layouts, and pointer manipulations.
                </p>
                <p>
                  This cognitive load often leads to memorization rather than true comprehension. Engineers memorize how to invert a binary tree for an interview, but fail to deeply understand the underlying structural properties that make the algorithm work.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-border/50"></div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Why Visual Explanations Win</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  By visualizing these concepts—showing exactly how an array shifts in memory, how a recursive call stack unwinds, or how a graph traversal algorithm explores its neighbors—we bypass the costly abstract translation phase. You see the mechanics directly.
                </p>
                <p>
                  Debugger Dude is built on the philosophy that seeing is understanding. We craft high-quality animations and visual guides designed to build lasting intuition. No fluff. No endless reading. Just clear, immediate understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Behind the Screen</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Debugger Dude was created by Omar, a software engineer with a deep passion for education and technical excellence. Frustrated by the lack of clear, visual resources while studying advanced topics, he started animating algorithms on YouTube to help others crack technical interviews and build better software.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What began as a single channel has grown into a platform dedicated to helping thousands of engineers worldwide elevate their craft through intuitive learning.
            </p>
            
            <div className="flex space-x-4 pt-6">
              <Link href={siteConfig.links.youtube} target="_blank" className="p-3 bg-card border border-border/50 rounded-full hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <FaYoutube className="w-6 h-6" />
              </Link>
              <Link href={siteConfig.links.github} target="_blank" className="p-3 bg-card border border-border/50 rounded-full hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href={siteConfig.links.linkedin} target="_blank" className="p-3 bg-card border border-border/50 rounded-full hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href={`mailto:${siteConfig.links.email}`} className="p-3 bg-card border border-border/50 rounded-full hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] z-0 group-hover:bg-primary/30 transition-colors duration-500"></div>
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-border/50 bg-card shadow-2xl flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
              <span className="text-7xl font-bold text-muted-foreground opacity-30 group-hover:text-primary group-hover:opacity-100 transition-colors duration-500">&lt;/&gt;</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
