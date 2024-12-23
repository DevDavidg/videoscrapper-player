import React from "react";

export interface VideoPlayerProps {
  video: {
    id: string;
    title: string;
    description: string;
    url: string;
  };
}

const VideoPlayerComponent: React.FC<VideoPlayerProps> = () => {
  return (
    <div className="border-[2px] border-red-500 w-1/2 h-[80%] rounded-r-[20px]"></div>
  );
};

export default VideoPlayerComponent;
