import youtubeKnowledge from "../../youtube_knowledge.json";

export interface Channel {
  name: string;
  handle: string;
  playlistsCount: number;
}

export interface Video {
  videoId: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
}

export interface Playlist {
  playlistId: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  videoCount: number;
  videos: Video[];
}

export interface YouTubeKnowledge {
  channel: Channel;
  playlists: Playlist[];
}

// Cast the imported JSON to our type
export const youtubeData = youtubeKnowledge as YouTubeKnowledge;

// Helper Functions
export function getPlaylists(): Playlist[] {
  return youtubeData.playlists;
}

export function getPlaylistById(playlistId: string): Playlist | undefined {
  return youtubeData.playlists.find((p) => p.playlistId === playlistId);
}

export function getAllVideos(): (Video & { playlistId: string; playlistTitle: string })[] {
  return youtubeData.playlists.flatMap((playlist) =>
    playlist.videos.map((video) => ({
      ...video,
      playlistId: playlist.playlistId,
      playlistTitle: playlist.title,
    }))
  );
}

export function getVideoById(videoId: string): (Video & { playlistId: string; playlistTitle: string }) | undefined {
  const allVideos = getAllVideos();
  return allVideos.find((v) => v.videoId === videoId);
}

export function getRelatedVideos(playlistId: string, currentVideoId: string): Video[] {
  const playlist = getPlaylistById(playlistId);
  if (!playlist) return [];
  // Return other videos in the same playlist, excluding the current one
  return playlist.videos.filter((v) => v.videoId !== currentVideoId);
}
