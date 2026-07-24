import { getPlaylists } from "@/lib/youtube";
import { VideoCard } from "@/components/video/VideoCard";
import { PlaySquare } from "lucide-react";

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
          {playlists.map((playlist) => (
            <section key={playlist.playlistId} className="relative">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-10 p-6 md:p-8 bg-card border border-border/50 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                
                {playlist.thumbnail && (
                  <div className="relative w-full md:w-64 aspect-video rounded-2xl overflow-hidden shrink-0 border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={playlist.thumbnail} 
                      alt={playlist.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="relative z-10 space-y-4 flex-grow">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center">
                      <PlaySquare className="w-3 h-3 mr-1.5" />
                      {playlist.videoCount} Videos
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {playlist.title}
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
                    {playlist.description || `Explore our comprehensive collection of videos covering ${playlist.title}. Watch step-by-step visual explanations to deeply understand the core mechanics.`}
                  </p>
                </div>
              </div>

              {/* Videos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
                {playlist.videos.map((video) => (
                  <VideoCard key={video.videoId} video={video} />
                ))}
              </div>
            </section>
          ))}
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
