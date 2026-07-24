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

const PREFERRED_PLAYLIST_ORDER = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stack",
  "Queue",
  "Hash Tables",
  "Recursion",
  "Binary Search",
  "Trees",
  "Binary Search Trees",
  "Heap",
  "Trie",
  "Graphs",
  "BFS",
  "DFS",
  "Topological Sort",
  "Union Find",
  "Greedy",
  "Two Pointers",
  "Sliding Window",
  "Prefix Sum",
  "Binary Search on Answer",
  "Dynamic Programming",
  "Backtracking"
];

// Helper Functions
export function getPlaylists(): Playlist[] {
  const playlists = [...youtubeData.playlists];
  
  playlists.sort((a, b) => {
    const indexA = PREFERRED_PLAYLIST_ORDER.findIndex(title => a.title.includes(title) || title.includes(a.title));
    const indexB = PREFERRED_PLAYLIST_ORDER.findIndex(title => b.title.includes(title) || title.includes(b.title));
    
    // If both are found in the preferred order, sort by index
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // If only one is found, prioritize the found one
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    
    // If neither are found, maintain original order
    return 0;
  });

  return playlists;
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
