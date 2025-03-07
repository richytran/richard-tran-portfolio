import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="mt-4 w-full aspect-video overflow-hidden rounded-lg">
      <video controls className="w-full h-full object-contain">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
