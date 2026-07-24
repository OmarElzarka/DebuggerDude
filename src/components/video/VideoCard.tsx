"use client";

import { Video } from "@/lib/youtube";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  // A helper to truncate description for a cleaner UI
  const shortDescription = video.description
    ? video.description.length > 80
      ? video.description.substring(0, 80) + "..."
      : video.description
    : "Learn this essential concept with a step-by-step visual explanation.";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300"
    >
      <Link href={`/watch/${video.videoId}`} className="flex flex-col flex-grow w-full h-full">
        {/* Thumbnail Area */}
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <PlayCircle className="w-7 h-7 ml-1" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-grow p-5">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow mb-4">
            {shortDescription}
          </p>

          {/* Action Button */}
          <div className="mt-auto flex items-center justify-center w-full py-2.5 rounded-xl bg-muted/50 group-hover:bg-primary group-hover:text-white font-medium text-sm transition-colors duration-300 border border-border/50">
            Watch Now
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
