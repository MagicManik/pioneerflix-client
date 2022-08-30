import React from "react";
import useVideos from "../../hooks/useVideos";

const VideoDetail = () => {
  const [videos] = useVideos();
  console.log(videos[0]?.videoLink);
  return (
    <div className="h-screen px-14 bg-primary py-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="bg-red-500 h-[500px]  w-full col-start-1 col-end-10">
          <iframe
            width="100%"
            className="p-[.5px]"
            height="500px"
            src={videos[0]?.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* right side */}


        <div className="bg-red-900 h-[50px] w-full col-start-10 col-end-13">
          <h2>this is right side</h2>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
