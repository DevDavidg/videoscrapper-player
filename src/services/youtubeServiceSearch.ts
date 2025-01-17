import axios from "axios";

export interface YouTubeResult {
  title: string;
  url: string;
  thumbnail: string;
  description?: string;
}

interface YouTubeSearchResponse {
  results: YouTubeResult[];
}

const fetchYouTubeResults = async (query: string): Promise<YouTubeResult[]> => {
  if (!query) {
    throw new Error("Search query cannot be empty.");
  }

  const response = await axios.get<YouTubeSearchResponse>(
    "/api/youtube/search",
    {
      params: { query },
    }
  );

  return response.data.results.map((item) => ({
    title: item.title,
    url: item.url,
    thumbnail: item.thumbnail,
    description: item.description,
  }));
};

export default fetchYouTubeResults;
