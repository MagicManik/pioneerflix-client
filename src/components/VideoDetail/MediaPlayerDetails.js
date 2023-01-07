import React from 'react';
import ReactPlayer from "react-player";

const MediaPlayerDetails = ({ video }) => {
    return (
        <ReactPlayer
            config={{ file: { attributes: { controlsList: "nodownload" } } }}
            onContextMenu={(e) => e.preventDefault()}
            width="1024px"
            height="500px"
            controls
            url={video.videoLink}
            onReady={() => console.log("onready call back")}
            onStart={() => console.log("onstart call back")}
            onPause={() => console.log("onpause call back")}
            onEnded={() => console.log("onended call back")}
            onError={() => console.log("onerror call back")}
        ></ReactPlayer>
    );
};

export default MediaPlayerDetails;