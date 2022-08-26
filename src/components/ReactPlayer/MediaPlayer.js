import React from 'react';
import ReactPlayer from "react-player";
import Jodi from "../../assets/video/Jodi.mp4";

const MediaPlayer = ({channel}) => {
  console.log(channel);
    return (
        <ReactPlayer
          config={{ file: { attributes: { controlsList: "nodownload" } } }}
          // Disable right click
          onContextMenu={(e) => e.preventDefault()}
          width="1024px"
          height="500px"
          controls
          url={channel.channelLink}
          onReady={() => console.log("onready call back")}
          onStart={() => console.log("onstart call back")}
          onPause={() => console.log("onpause call back")}
          onEnded={() => console.log("onended call back")}
          onError={() => console.log("onerror call back")}
        ></ReactPlayer>
    );
};

export default MediaPlayer;