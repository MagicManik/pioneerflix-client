import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaFilm,
  FaTv,
  FaGlobe,
  FaHeart,
  FaUserAlt,
} from "react-icons/fa";
import useVideos from "../../hooks/useVideos";

const Movies = () => {
  const [videos] = useVideos();
  const [video, setVideo] = useState({});
  const [uVideo, setUVideo] = useState({});
  // const [user] = useAuthState(auth);

  useEffect(() => {
    if (videos?.length) {
      const remaining = videos?.filter((v) => v?.category === "Bangla Movie");
      setVideo(remaining);
      setUVideo(remaining[0]);
    }
    
  }, [videos]);
  const handleHome=()=>{

    console.log('from home')
  }
  console.log(videos);
  return (
    <div className="bg-primary py-20 px-10">
      <div className=" grid grid-cols-12 gap-5 w-full ">
        <div className="w-full  px-2  col-start-1 col-end-3">
          <div className=" flex flex-col justify-center gap-y-16 mt-10">
            <button onClick={()=>handleHome()} class=" text-lg font-semibold flex justify-start items-center">
              <FaHome className="mr-5" /> Home
            </button>
            <button class=" text-lg font-semibold flex justify-start items-center">
              <FaFilm className="mr-5" /> Movies
            </button>
            <button class=" text-lg font-semibold flex justify-start items-center">
              <FaTv className="mr-5" /> TV Shows
            </button>
            <button class=" text-lg font-semibold flex justify-start items-center">
              <FaGlobe className="mr-5" /> Series
            </button>
            <button class=" text-lg font-semibold flex justify-start items-center">
              <FaHeart className="mr-5" /> Favorites
            </button>
            <button class=" text-lg font-semibold flex justify-start items-center">
              <FaUserAlt className="mr-5" /> Account
            </button>
          </div>
        </div>
        <div className="w-full   col-start-3 col-end-13">
          <iframe
            width="100%"
            className="p-[.5px] md:h-[450px] rounded-2xl"
            src={uVideo.videoLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {video?.length && (
            <div className="grid grid-cols-6 gap-4 mt-10">
              {video?.map((v) => (
                <>
                  <img onClick={() => setUVideo(v)} className='rounded-xl' src={v?.imgLink} alt="" />
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
