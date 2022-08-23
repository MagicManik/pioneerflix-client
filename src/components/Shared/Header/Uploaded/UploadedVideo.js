import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useUploadedVideo from "../../../../hooks/useUploadedVideo";

const UploadedVideo = () => {
  const { uId } = useParams();
  const [videos] = useUploadedVideo();
  const [video, setVideo] = useState({});
  useEffect(() => {
    if (videos?.length) {
      const remaining = videos?.find((v) => v?._id === uId);
      setVideo(remaining);
    }
  }, [videos, uId]);
  console.log(videos)

  return (
    <div className="py-16 px-24 bg-primary">
      <div className="w-full flex justify-center items-center">
        <iframe
          width="95%"
          className="mt-1"
          height="500px"
          src={video.videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
      <div className="md:flex justify-between px-10 py-3 items-center">
        <div className="">
          <p className="text-2xl font-bold">{video.title}</p>
          <p className="text-sm">2022 . { video.category } . {video.duration} Min</p>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="flex items-center ">
            <button title="Like here">
              <BiLike className="text-2xl  mr-2" />
            </button>
            <div>10</div>
          </div>
          <button className="flex  items-center mr-3" title="Add your list">
            <AiOutlinePlus className="mr-2 text-xl" /> My List
          </button>
          <label
            htmlFor="my-share-modal-3"
            className="flex  cursor-pointer ml-3 items-center"
            title="Share"
          >
            <FaShareAlt className="mr-2 text-xl" /> Share
          </label>
        </div>
      </div>
<p className="px-10">{video.description}</p>


<div className="my-10">


    {
videos?.map(v=>
    <div className="my-5">
<img src={v?.imgLink} className="h-20 w-24" alt="" />


    </div>
    )

    }
</div>
    </div>
  );
};

export default UploadedVideo;
