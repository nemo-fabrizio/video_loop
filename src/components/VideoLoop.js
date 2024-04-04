import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer url={require("./video.mp4")} controls={true} loop={true} />
    </div>
  );
};

export default VideoPlayer;
