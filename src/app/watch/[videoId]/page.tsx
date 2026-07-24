import { getVideoById, getRelatedVideos, getAllVideos } from "@/lib/youtube";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, PlaySquare } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { VideoCard } from "@/components/video/VideoCard";

interface WatchPageProps {
  params: Promise<{
    videoId: string;
  }>;
}

export async function generateMetadata({ params }: WatchPageProps) {
  const resolvedParams = await params;
  const video = getVideoById(resolvedParams.videoId);
  if (!video) return { title: "Video Not Found" };

  return {
    title: `${video.title} | Debugger Dude`,
    description: video.description || `Watch ${video.title} visually explained.`,
  };
}

export default async function WatchPage({ params }: WatchPageProps) {
  const resolvedParams = await params;
  const video = getVideoById(resolvedParams.videoId);

  if (!video) {
    notFound();
  }

  const relatedVideos = getRelatedVideos(video.playlistId, video.videoId);
  const allPlaylistVideos = getAllVideos().filter((v) => v.playlistId === video.playlistId);
  const currentIndex = allPlaylistVideos.findIndex((v) => v.videoId === video.videoId);
  
  const prevVideo = currentIndex > 0 ? allPlaylistVideos[currentIndex - 1] : null;
  const nextVideo = currentIndex < allPlaylistVideos.length - 1 ? allPlaylistVideos[currentIndex + 1] : null;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Back navigation */}
        <Link 
          href="/learn" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Learning Paths
        </Link>

        {/* Video Player Section */}
        <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video w-full bg-black relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider flex items-center">
                  <PlaySquare className="w-3 h-3 mr-1.5" />
                  {video.playlistTitle}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {video.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 font-medium text-sm transition-all duration-300"
                >
                  <FaYoutube className="w-4 h-4 mr-2" />
                  Watch on YouTube
                </Link>
              </div>
            </div>

            <div className="h-px w-full bg-border/50"></div>
            
            <div className="prose prose-invert max-w-none text-muted-foreground">
              {video.description ? (
                <p className="whitespace-pre-wrap text-base leading-relaxed">
                  {video.description}
                </p>
              ) : (
                <p className="italic">No description available for this video.</p>
              )}
            </div>

            {/* Next / Prev Navigation */}
            <div className="pt-6 mt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevVideo ? (
                <Link 
                  href={`/watch/${prevVideo.videoId}`}
                  className="flex items-center w-full sm:w-auto p-4 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary mr-3" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Previous</p>
                    <p className="text-sm font-semibold line-clamp-1 group-hover:text-primary transition-colors">{prevVideo.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="w-full sm:w-auto p-4 hidden sm:block"></div>
              )}

              {nextVideo ? (
                <Link 
                  href={`/watch/${nextVideo.videoId}`}
                  className="flex items-center justify-end w-full sm:w-auto p-4 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                >
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Next Up</p>
                    <p className="text-sm font-semibold line-clamp-1 group-hover:text-primary transition-colors">{nextVideo.title}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary ml-3" />
                </Link>
              ) : (
                <div className="w-full sm:w-auto p-4 hidden sm:block"></div>
              )}
            </div>
          </div>
        </div>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <div className="pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-6">More from {video.playlistTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedVideos.map((rv) => (
                <VideoCard key={rv.videoId} video={rv} />
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
