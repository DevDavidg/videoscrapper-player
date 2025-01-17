"use client";

import VideoListComponent, {
  Video,
} from "@/components/VideoListComponent/VideoListComponent";
import VideoPlayerComponent from "@/components/VideoPlayerComponent/VideoPlayerComponent";
import queryClient from "@/services/queryClient";
import { QueryClientProvider } from "react-query";

const videoArray: Video[] = [
  {
    id: "1",
    title: "Video 1",
    description: "Description 1",
    url: "https://www.youtube.com/embed/7e90gBu4pas",
  },
  {
    id: "2",
    title: "Video 2",
    description: "Description 2",
    url: "https://www.youtube.com/embed/7e90gBu4pas",
  },
  {
    id: "3",
    title: "Video 3",
    description: "Description 3",
    url: "https://www.youtube.com/embed/7e90gBu4pas",
  },
];
const actualVideo = videoArray[0];

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-full h-screen flex items-center justify-center">
        <VideoListComponent videos={videoArray} />
        <VideoPlayerComponent video={actualVideo} />
      </main>
    </QueryClientProvider>
  );
}
