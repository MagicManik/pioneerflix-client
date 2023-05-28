import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLoaderCircle } from "react-icons/bi";
import {
    FaRegThumbsUp,
    FaFilm,
    FaTv,
    FaHeart,
    FaHistory,
} from "react-icons/fa";
import auth from "../../firebase.init";
import useChannels from "../../hooks/useChannels";
import useLikes from "../../hooks/useLikes";
import useMyList from "../../hooks/useMyList";
import { useGetAllVideosQuery } from "../../services/post";
import useWatchHistory from "../../hooks/useWatchHistory";
import usePaidUser from "../../hooks/usePaidUser";
import Payments from "../Payments/Payments";

const Drama = () => {
    const { data: videos, refetch, isLoading } = useGetAllVideosQuery();

    const [user] = useAuthState(auth);
    const [paidUser] = usePaidUser(user);
    const paid = paidUser?.paid;

    const [likes] = useLikes();
    const [myList] = useMyList();
    const [channels] = useChannels()
    const [watchedVideo] = useWatchHistory();
    const [video, setVideo] = useState([]);
    const [uVideo, setUVideo] = useState([]);

    useEffect(() => {
        if (videos?.length) {
            const remaining = videos?.filter((v) => v?.category === "Popular Web Series");
            setVideo(remaining);
            setUVideo(remaining[0]);
        }

    }, [videos]);

    const handleLike = () => {
        const likedUser = likes?.filter((li) => li.email === user?.email);
        setVideo(likedUser);
        setUVideo(likedUser[0]);
    }

    const handleMovie = () => {
        const movie = videos.filter((video) => video?.category.toLowerCase().includes('movie'));
        setVideo(movie);
        setUVideo(movie[0]);
    }

    const handleMyList = () => {
        setVideo(myList);
        setUVideo(myList[0]);
    }

    const handleTv = () => {
        setUVideo(channels[0]);
        setVideo(channels);
    }

    const handleWatch = () => {
        setUVideo(watchedVideo[0]);
        setVideo(watchedVideo)
    }

    if (!likes) {
        return <BiLoaderCircle></BiLoaderCircle>
    }

    return (
        <section className="bg-black">
            {
                paid ?
                    <div className="bg-primary py-10 px-5 md:py-20 md:px-10 max-w-[1440px] mx-auto">
                        <div className=" grid grid-cols-12 gap-5 w-full ">
                            <div className="w-full md:block hidden px-2  col-start-1 col-end-3">
                                <div className=" flex flex-col justify-center gap-y-16 mt-10">
                                    <button onClick={() => handleLike()} className=" text-lg font-semibold flex justify-start items-center focus:text-red-600">
                                        <FaRegThumbsUp className="mr-5" /> Liked
                                    </button>
                                    <button onClick={() => handleMovie()} className=" text-lg font-semibold flex justify-start items-center focus:text-red-600">
                                        <FaFilm className="mr-5" /> Movies
                                    </button>
                                    <button onClick={() => handleTv()} className=" text-lg font-semibold flex justify-start items-center focus:text-red-600">
                                        <FaTv className="mr-5" /> TV Shows
                                    </button>
                                    <button onClick={() => handleMyList()} className=" text-lg font-semibold flex justify-start items-center focus:text-red-600">
                                        <FaHeart className="mr-5" /> Favourite
                                    </button>
                                    <button onClick={() => handleWatch()} className=" text-lg font-semibold flex justify-start items-center focus:text-red-600">
                                        <FaHistory className="mr-5" />Watch List
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
                                {video?.length > 0 && (
                                    <div className="grid grid-cols-4 cursor-pointer md:grid-cols-6 gap-4 mt-10">
                                        {video?.map((v) => (
                                            <>
                                                <img onClick={() => setUVideo(v)} className='rounded-xl w-full zoom-div-I ' src={v?.imgLink} alt="" />
                                            </>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    :
                    <Payments />
            }
        </section>
    );
};

export default Drama;
