import { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import fetchYouTubeResults, {
  YouTubeResult,
} from "@/services/youtubeServiceSearch";

const defaultVideos: YouTubeResult[] = [
  {
    title: "Video Demo 1",
    url: "https://youtube.com/watch?v=xyz1",
    thumbnail: "https://i.ytimg.com/vi/xyz1/hqdefault.jpg",
    description: "Descripción 1",
  },
  {
    title: "Video Demo 2",
    url: "https://youtube.com/watch?v=xyz2",
    thumbnail: "https://i.ytimg.com/vi/xyz2/hqdefault.jpg",
    description: "Descripción 2",
  },
];

const YouTubeSearcher: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading, refetch } = useQuery<YouTubeResult[]>(
    ["youtubeSearch", searchQuery],
    () => fetchYouTubeResults(searchQuery),
    { enabled: false }
  );

  const handleSearch = () => {
    if (searchQuery.trim()) refetch();
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <h1>YouTube Searcher</h1>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 10, fontSize: 16 }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer" }}
      >
        Search
      </button>

      {isLoading && <p>Loading...</p>}
      {error instanceof Error && (
        <p style={{ color: "red" }}>Error: {error.message}</p>
      )}

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {(data && data.length > 0 ? data : defaultVideos).map((item) => (
          <li key={item.url} style={{ marginBottom: 20 }}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "100%", maxHeight: 150, objectFit: "cover" }}
                width={400}
                height={200}
              />
              <h3>{item.title}</h3>
            </a>
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeSearcher;
