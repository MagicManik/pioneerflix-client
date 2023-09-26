import React, { useState, useEffect } from "react";
import { FaShareAlt, FaStar, } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import useVideo from "../../hooks/useVideo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useLikes from "../../hooks/useLikes";
import "./VideoDetails.css";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import useRatings from "../../hooks/useRatings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usePaidUser from "../../hooks/usePaidUser";
import useMyList from "../../hooks/useMyList";
import Payments from "../Payments/Payments";
import { useDeleteLikeMutation, useDeleteMyListMutation, useGetAllVideosQuery, useLoadCommentsQuery, useUpdateWatchListMutation, useUploadCommentMutation, useUploadLikeMutation, useUpsertWatchListMutation } from "../../services/post";
import ShareVideo from "./ShareVideo";

const VideoDetails = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [video] = useVideo(id);
    const [likes] = useLikes();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [data, refetch] = useRatings(id);
    const [paidUser] = usePaidUser(user);
    const [myList] = useMyList();
    // Using Redux State
    const [updateWatch,] = useUpdateWatchListMutation();
    const [createLike] = useUploadLikeMutation();
    const [deleteLike] = useDeleteLikeMutation();
    const [createComment] = useUploadCommentMutation();
    const { data: comments, refetch: commentsFetch, } = useLoadCommentsQuery();
    const [deleteMyList] = useDeleteMyListMutation();
    const [upsertWatchList] = useUpsertWatchListMutation();

    const paid = paidUser?.paid;
    const { videoLink, imgLink, title, category, description, duration } = video;
    const { data: videos } = useGetAllVideosQuery();
    const totalLike = likes?.filter((li) => li.id === id);
    const likedUser = likes?.filter((li) => li.id === id && li.email === user?.email);
    const hasUserMyList = myList?.filter(list => list.id === id);
    const commentDisplay = comments?.filter(comment => comment.id === id);
    const totalRating = data?.reduce((a, b) => a + b.star, 0);
    const averageRating = (totalRating / data?.length || 0).toFixed(1);
    const userStar = data?.filter(rating => rating?.email === user?.email);
    let displayStar = (userStar?.[0]?.star);

    const handleLike = () => {
        const like = true;
        const name = user?.displayName;
        const email = user?.email;
        const videoLink = video.videoLink;
        const imgLink = video.imgLink;
        const title = video.title;
        const newLike = { id, like, name, email, imgLink, videoLink, title };
        const likedUser = likes.filter((li) => li.id === id && li.email === email);

        if (likedUser?.length > 0) {
            const likedId = likedUser[0]._id;
            deleteLike(likedId);
        } else {
            createLike(newLike);
        }
    };

    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const name = user?.displayName;
        const img = user?.photoURL;
        const email = user?.email;
        const newComment = { id, name, comment, img, email };
        createComment(newComment);
        e.target.reset();

        setTimeout(() => {
            commentsFetch();
        }, 500)
    };

    const handleRating = (star) => {
        setRating(star);
        const name = user?.displayName;
        const email = user?.email;
        const rating = { id, star, name, email };
        const url = `https://pioneerflix-server.onrender.com/rating/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    refetch();
                }
            })
    };

    const sendData = {
        id: id,
        videoTitle: title,
        email: user?.email,
        videoLink: videoLink,
        imgLink: imgLink,
    };

    const handleMyList = () => {
        if (hasUserMyList.length > 0) {
            const id = hasUserMyList[0]._id;
            deleteMyList(id);
        } else {
            upsertWatchList(sendData);
        }
    };

    useEffect(() => {
        if (videoLink) {
            updateWatch(sendData);
        }
    }, [video?.videoLink]);

    return (
        <>
            {paid ?
                <div className="bg-black lg:pt-16 pt-3 ">
                    <div className="grid grid-cols-12 gap-4 pt-3 pb-4 bg-primary md:px-14 px-3">
                        <div className=" w-full col-start-1 col-end-13 md:col-end-10">
                            <iframe
                                width="100%"
                                className="p-[.5px] md:h-[520px] h-56 left-0 right-0 rounded-2xl overflow-hidden"
                                src={video?.videoLink}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                            <div className="lg:py-5 py-2 text-white">
                                <div className="md:flex justify-between items-center mt-6">
                                    <div>
                                        <div className="flex items-center lg:pl-5 pl-1">
                                            {[...Array(5)].map((start, i) => {
                                                const ratingValue = i + 1;
                                                return (
                                                    <label key={i}>
                                                        <input type="radio" className="hidden" name="rating" value={ratingValue} onClick={() => handleRating(ratingValue)} />
                                                        <FaStar className="lg:ml-2 ml-0 lg:mr-0 mr-2" color={ratingValue <= (hover || rating || displayStar) ? '#ff9501' : '#222'} size={20}
                                                            onMouseEnter={() => setHover(ratingValue)}
                                                            onMouseLeave={() => setHover(null)}>
                                                        </FaStar>
                                                    </label>
                                                )
                                            })}
                                        </div>
                                        <span className="lg:pl-8 pl-1 text-accent block mt-2">Average Rating : {averageRating}</span>
                                    </div>
                                    <div className="grid grid-cols-3 mr-0 md:ml-0 ml-0  md:mt-0 mt-5">
                                        <div className="flex justify-start items-center">
                                            <button onClick={handleLike} className={likedUser?.length >= 1 ? 'btn btn-circle like-btn liked-btn' : 'btn btn-circle like-btn'} title="Like here">
                                                <BiLike />
                                            </button>
                                            <div className={likedUser?.length >= 1 ? 'text-[#ff9501]' : ' text-accent'}>Like {totalLike?.length}</div>
                                        </div>
                                        <div className="flex items-center lg:mr-3 mr-0 lg:ml-0 ml-0">
                                            <button
                                                onClick={handleMyList}
                                                className="btn btn-circle like-btn"
                                                title="Add your list">
                                                <IoIosHeartEmpty className={hasUserMyList?.length >= 1 ? 'fill-[#ff9501]' : 'text-[#2f2f32] text-semibold'} />
                                            </button>
                                            <span className={hasUserMyList?.length >= 1 ? 'text-[#ff9501]' : 'text-accent'}>My List</span>
                                        </div>
                                        <div className="flex items-center justify-end">
                                            <label
                                                htmlFor="my-share-modal-3"
                                                className="btn btn-circle like-btn"
                                                title="Share">
                                                <FaShareAlt className="text-xl" />
                                            </label>
                                            <span>Share</span>
                                        </div>
                                        <input type="checkbox" id="my-share-modal-3" className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box bg-black relative">
                                                <label
                                                    htmlFor="my-share-modal-3"
                                                    className="btn btn-sm btn-circle absolute right-2 top-2">
                                                    ✕
                                                </label>
                                                <span className="text-white items-center justify-center flex mb-4">
                                                    Share your favorite video on social media <BsFillEmojiSmileFill className="ml-1" />
                                                </span>
                                                <ShareVideo videoLink={videoLink}></ShareVideo>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="h-[0.5px] mt-8 mb-4 bg-[#222]" />
                                <div className="container mx-auto flex lg:px-5 px-0 lg:pt-16 lg:pb-16 pt-3 pb-0 md:flex-row flex-col items-center">
                                    <div className="lg:max-w-xs lg:w-full md:w-full w-11/12">
                                        <img
                                            src={imgLink}
                                            className="object-cover lg:mb-0 mb-10 lg:block hidden mx-auto object-center rounded"
                                            alt="" />
                                    </div>
                                    <div className="lg:flex-grow md:w-1/2 lg:pr-0 md:pr-2 flex flex-col md:items-start md:text-left lg:mb-16 mb-3 items-center text-center lg:pl-6 pl-0">
                                        <i className="text-blue-500 text-sm">
                                            #{category} #Pioneerflix
                                        </i>
                                        <h1 className="md:text-5xl text-[#ff9501] text-lg md:font-semibold">
                                            {title}
                                        </h1>
                                        <hr className="md:mt-6 bg-[#222] h-[1px] my-3 md:mb-4" />
                                        <p className="text-accent text-md">( 2022 ) . {duration} . Serial </p>
                                        <p className="my-2 text-accent text-md "> Category : {category}</p>
                                        <span className="block my-2 text-[#ff9501]">Average Rating : {averageRating}</span>
                                        <p className="text-accent text-md">{description}</p>
                                        <hr className="md:mt-6 bg-[#222] h-[1px] my-3 md:mb-4" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                {
                                    user?.photoURL ? <img
                                        className="w-14 h-14 rounded-full mt-2 p-1"
                                        src={user.photoURL}
                                        alt="" />
                                        :
                                        <AiOutlineUser className="commenter-img-icon" />
                                }
                                <div className="w-full ml-2">
                                    <form onSubmit={handleComment}>
                                        <div className="relative">
                                            <input
                                                autoComplete="off"
                                                type="text"
                                                name="comment"
                                                className="block comment-line p-3 pl-5 focus:outline-none w-full text-md   bg-primary rounded-sm lg:pr-40 pr-28 text-info"
                                                placeholder="Add a comment…"
                                                required />
                                            <button
                                                type="submit"
                                                className="btn lg:btn-md btn-sm bg-[#ff9501] hover:bg-[#d37c02] text-[#f5f5f7] absolute right-2.5 disabled bottom-1 lg:font-medium lg:rounded-lg rounded text-sm lg:px-6 px-2">
                                                Comment
                                            </button>
                                        </div>
                                        <hr className="h-[0.5px] bg-slate-900" />
                                    </form>
                                </div>
                            </div>
                            <div className="pl-2 md:py-5 pt-5 gap-5">
                                {commentDisplay?.map((comment) => (
                                    <div className="flex pb-5" key={comment._id}>
                                        {
                                            user?.photoURL ? <img
                                                className="mt-1 w-10 h-10 rounded-full mr-3"
                                                src={user.photoURL}
                                                alt="" />
                                                :
                                                <AiOutlineUser className="commenter-img-icon w-10 h-10 rounded-full mr-3" />
                                        }
                                        <div className="rounded-2xl pb-2 border-[2px #222] ">
                                            <p className="text-amber-400">{comment.id === id && comment.name}</p>
                                            <span className="text-sm text-info">
                                                {comment.id === id && comment.comment}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:pt-0 pt-16 w-full col-start-1 md:col-start-10 col-end-13">
                            <div>
                                {
                                    videos?.map(video =>
                                        <Link to={`/play/${video._id}`}>
                                            <div
                                                key={video._id}
                                                className="flex px-3 bg-[#222] cursor-pointer py-3 mb-3 rounded-md">
                                                <img
                                                    src={video.imgLink}
                                                    className="h-[85px] rounded-sm w-[100px]"
                                                    alt="" />
                                                <div className="ml-3">
                                                    <p className=" text-lg font-semibold ">{video?.title}</p>
                                                    <p className="text-sm hover:underline hover:underline-offset-1 duration-500">
                                                        {video?.description.slice(0, 50)}....
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Payments />
            }
        </>
    );
};

export default VideoDetails;