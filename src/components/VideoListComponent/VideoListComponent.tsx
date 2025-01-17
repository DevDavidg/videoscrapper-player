import React from "react";
import "./VideoListComponent.css";
import VideoSearcher from "../VideoSearcher/VideoSearcher";

export type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
};

export interface VideoListProps {
  videos: Video[];
}

const VideoListComponent: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="border-[1px] border-gray-300 w-1/2 h-[80%] rounded-l-[20px] p-[20px]">
      <div className="border-[1px] h-full rounded-[20px]">
        <span className="text-[1.3rem]">{`${videos.length} Videos`}</span>
        <VideoSearcher />
        <ul className="h-full overflow-y-auto">
          {videos.map((video) => (
            <li
              key={video.id}
              className="border-[1px] border-gray-300 p-[10px] mb-[10px] rounded-[10px]"
            >
              <h3 className="text-[1.2rem]">{video.title}</h3>
              <p className="text-[0.9rem]">{video.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoListComponent;
