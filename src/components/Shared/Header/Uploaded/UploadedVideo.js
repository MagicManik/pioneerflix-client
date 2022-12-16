import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FaShareAlt,FaRegPlayCircle} from "react-icons/fa";
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

  return (
    <div className="py-16 px-5 md:px-24 bg-primary">
      <div className="w-full flex justify-center items-center">
        <iframe
          width="95%"
          className="mt-1 md:h-[500px]"
          
          src={video?.videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="md:flex justify-between text-accent px-2 md:px-10 py-3 items-center">
        <div className="">
          <p className="text-2xl font-bold">{video?.title}</p>
          <p className="text-sm">
            2022 . {video?.category} . {video?.duration} Min
          </p>
        </div>
        <div className="grid md:my-0 my-3 grid-cols-3 ">
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
      <p className="px-2 md:px-10 text-accent">{video?.description}</p>

      {videos?.length && (
        <div className="pt-10 px-2 md:px-10">
          {videos?.map((v) => (
            <div
              onClick={() => setVideo(v)}
              className="my-5  bg-[#222] p-3 flex justify-between md:justify-start rounded-md cursor-pointer items-center"
            >
              <img src={v?.imgLink}  className="h-[100px] w-[100px] " alt="" />
              <div className="ml-5 md:ml-10">
                <div className="md:flex  items-center">
                  <p className="text-2xl font-bold">{v?.title}</p>
                  <p className="text-xs ml-1 ">( {v?.duration} Min )</p>
                </div>
                <p className="hidden md:block">{v?.description}</p>
                
              </div>
              <FaRegPlayCircle className="md:hidden text-2xl"/>
              
            </div>
          ))}
        
        </div>
      )}
    </div>
  );
};

export default UploadedVideo;
