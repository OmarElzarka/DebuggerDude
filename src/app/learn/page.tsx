import { getPlaylists } from "@/lib/youtube";
import { VideoCard } from "@/components/video/VideoCard";
import { PlaySquare, Clock, Terminal, ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Learn | Debugger Dude",
  description: "Master programming through our beautifully crafted visual learning sections.",
};

export default function LearnPage() {
  const playlists = getPlaylists();

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-6 pt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Paths</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a topic and dive into our collection of visually intuitive tutorials. Everything you need to master complex concepts.
          </p>
        </div>

        {/* Dynamic Sections based on Playlists */}
        <div className="space-y-24">
          {playlists.map((playlist) => {
            // Calculate a mock estimated duration (assume ~15 mins per video)
            const estimatedDuration = playlist.videoCount * 15;
            const hours = Math.floor(estimatedDuration / 60);
            const mins = estimatedDuration % 60;
            const durationString = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

            return (
              <section key={playlist.playlistId} className="relative">
                {/* Redesigned Minimal Feature Card Header */}
                <div className="flex flex-col md:flex-row gap-8 items-start mb-10 p-8 md:p-10 bg-card border border-border/50 rounded-3xl shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
                  {/* Subtle Gradient Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>
                  
                  {/* Programming Icon instead of Thumbnail */}
                  <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <Terminal className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="relative z-10 space-y-5 flex-grow">
                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center">
                        <PlaySquare className="w-3.5 h-3.5 mr-1.5" />
                        {playlist.videoCount} Videos
                      </span>
                      <span className="bg-muted text-muted-foreground border border-border/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        {durationString}
                      </span>
                      <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        Comprehensive Guide
                      </span>
                    </div>
                    
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                        {playlist.title}
                      </h2>
                      <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                        {playlist.description || `Explore our comprehensive collection of videos covering ${playlist.title}. Watch step-by-step visual explanations to deeply understand the core mechanics.`}
                      </p>
                    </div>

                    <Link 
                      href={`/watch/${playlist.videos[0]?.videoId}`} 
                      className={cn(buttonVariants({ variant: "default" }), "mt-4 h-12 px-6 rounded-xl font-semibold bg-foreground text-background hover:bg-primary hover:text-white transition-all")}
                    >
                      Explore Playlist
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Individual Video Cards (Thumbnails Retained) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
                  {playlist.videos.map((video) => (
                    <VideoCard key={video.videoId} video={video} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {playlists.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-muted-foreground">No learning content available right now.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
