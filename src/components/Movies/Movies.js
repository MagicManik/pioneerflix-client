import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLoaderCircle } from "react-icons/bi";
import {
  FaRegThumbsUp,
  FaFilm,
  FaTv,
  FaGlobe,
  FaHeart,
  FaUserAlt,
} from "react-icons/fa";
import auth from "../../firebase.init";
import useChannels from "../../hooks/useChannels";
import useLikes from "../../hooks/useLikes";
import useMyList from "../../hooks/useMyList";
// import useVideos from "../../hooks/useVideos";
// import useWatchHistory from "../../hooks/useWatchHistory";
import { useGetAllVideosQuery } from "../../services/post";

const Movies = () => {
  // const [videos] = useVideos();
  const { data: videos, refetch, isLoading } = useGetAllVideosQuery();

  console.log(videos)

  const [likes] = useLikes();
  const [myList] = useMyList();
  const [channels] = useChannels()
  // const [watchVideo] = useWatchHistory()
  const [user] = useAuthState(auth);
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
  const handleLike = () => {

    const likedUser = likes?.filter((li) => li.email === user?.email);
    setVideo(likedUser);
    setUVideo(likedUser[0]);
  }
  const handleMyList = () => {
    setVideo(myList);
    setUVideo(myList[0]);
  }
  const handleTv = () => {
    setUVideo(channels[0]);
    setVideo(channels);
    console.log('ok')
  }

  if (!likes) {
    return <BiLoaderCircle></BiLoaderCircle>
  }
  // const handleWatch = () => {
  //   setUVideo(watchVideo[0]);
  //   setVideo(watchVideo);
  // }
  return (
    <div className="bg-primary py-10 px-5 md:py-20 md:px-10">
      <div className=" grid grid-cols-12 gap-5 w-full ">
        <div className="w-full md:block hidden px-2  col-start-1 col-end-3">
          <div className=" flex flex-col justify-center gap-y-16 mt-10">
            <button onClick={() => handleLike()} className=" text-lg font-semibold flex justify-start items-center">
              <FaRegThumbsUp className="mr-5" /> Like
            </button>

            <button onClick={() => handleMyList()} className=" text-lg font-semibold flex justify-start items-center">
              <FaFilm className="mr-5" /> Movies
            </button>

            <button onClick={() => handleTv()} className=" text-lg font-semibold flex justify-start items-center">
              <FaTv className="mr-5" /> TV Shows
            </button>
            {/* <button onClick={() => handleWatch()} className=" text-lg font-semibold flex justify-start items-center">
              <FaGlobe className="mr-5" />Watch List
            </button> */}

            <button className=" text-lg font-semibold flex justify-start items-center">
              <FaHeart className="mr-5" /> Favorites
            </button>
            <button className=" text-lg font-semibold flex justify-start items-center">
              <FaUserAlt className="mr-5" /> Account
            </button>
          </div>
        </div>
        <div className="w-full col-start-1 cursor-pointer  md:col-start-3 col-end-13">
          <iframe
            width="100%"
            className="p-[.5px] md:h-[450px] rounded-2xl"
            src={uVideo?.videoLink || uVideo?.channelLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {video?.length && (
            <div className="grid grid-cols-4 cursor-pointer md:grid-cols-6 gap-4 mt-10">
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
