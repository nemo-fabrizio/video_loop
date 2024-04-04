import React from 'react';
import ReactPlayer from 'react-player';
//https://drive.google.com/file/d/1DA31fz24RSrDBtuP8bclF9CpbFlLAecY/view?usp=sharing
const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer url={require("./video.mp4")} controls={true} loop={true} />
      
    </div>
  );
};

export default VideoPlayer;
