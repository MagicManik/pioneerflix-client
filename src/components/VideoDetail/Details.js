import React, { useState } from "react";
import { FaShareAlt, FaStar, } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import useVideo from "../../hooks/useVideo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import useComments from "../../hooks/useComments";
import useLikes from "../../hooks/useLikes";
import "./Details.css";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import useRatings from "../../hooks/useRatings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import useVideos from "../../hooks/useVideos";
import usePaidUser from "../../hooks/usePaidUser";
import useMyList from "../../hooks/useMyList";
import Payments from "../Payments/Payments";
import { useEffect } from "react";
import { useDeleteLikeMutation, useDeleteMyListMutation, useGetAllVideosQuery, useLoadCommentsQuery, useUpdateWatchListMutation, useUploadCommentMutation, useUploadLikeMutation, useUpsertWatchListMutation } from "../../services/post";
import MediaPlayerDetails from "./MediaPlayerDetails";
import ShareVideo from "./ShareVideo";

const Details = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [video] = useVideo(id);
  const [likes] = useLikes();
  // const [comments] = useComments();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [data, refetch] = useRatings(id);
  const [paidUser] = usePaidUser(user);
  const [myList] = useMyList();

  // Using Redux State
  const [updateWatch, watchData] = useUpdateWatchListMutation();
  const [createLike, likeData] = useUploadLikeMutation();
  const [deleteLike, deleteLikeData] = useDeleteLikeMutation();
  const [createComment, commentData] = useUploadCommentMutation();
  const { data: comments, refetch: commentsFetch, isLoading } = useLoadCommentsQuery();
  const [deleteMyList, deleteMyListData] = useDeleteMyListMutation();
  const [upsertWatchList, upsertWatchData] = useUpsertWatchListMutation();

  // console.log(likeData);

  const paid = paidUser?.paid;

  const { videoLink, imgLink, title, category, description, duration } = video;
  // const [videos] = useVideos();
  const { data: videos, refetch: videosRefetch, isLoading: isVideosLoading } = useGetAllVideosQuery();

  // TOTAL LIKE FOR THIS VIDEO
  const totalLike = likes?.filter((li) => li.id === id);

  // USER'S LIKE
  const likedUser = likes?.filter((li) => li.id === id && li.email === user?.email);

  // USER'S MY LIST
  const hasUserMyList = myList?.filter(list => list.id === id);

  // DISPLAY COMMENT
  const commentDisplay = comments?.filter(comment => comment.id === id);

  // RATINGS
  const totalRating = data?.reduce((a, b) => a + b.star, 0);

  const averageRating = (totalRating / data?.length || 0).toFixed(1);
  const userStar = data?.filter(rating => rating?.email === user?.email);
  let displayStar = (userStar?.[0]?.star);

  // handler like || Manik Islam Mahi
  const handleLike = () => {
    const like = true;
    const name = user?.displayName;
    const email = user?.email;
    const videoLink = video.videoLink;
    const imgLink = video.imgLink;
    const title = video.title;
    const newLike = { id, like, name, email, imgLink, videoLink, title };

    const likedUser = likes.filter((li) => li.id === id && li.email === email);

    // to delete or remove like
    if (likedUser?.length > 0) {
      const likedId = likedUser[0]._id;
      deleteLike(likedId);
    }

    // to add like
    else {
      createLike(newLike);
    }
  };

  // Handle Comment || Manik Islam Mahi
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

  // Handle Rating || Manik Islam Mahi
  const handleRating = (star) => {
    setRating(star);
    const name = user?.displayName;
    const email = user?.email;
    const rating = { id, star, name, email };
    const url = `https://server-production-b237.up.railway.app/rating/${email}`
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

  // Handle My List || Manik Islam Mahi
  const handleMyList = () => {

    if (hasUserMyList.length > 0) {
      const id = hasUserMyList[0]._id;
      deleteMyList(id);
    }

    else {
      upsertWatchList(sendData);
    }
  };

  // set watch list || Manik Islam Mahi
  useEffect(() => {
    if (videoLink) {
      updateWatch(sendData);
    }

  }, [video?.videoLink]);


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          initialSlide: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      }
    ]
  };

  return (
    <>
      {
        paid ?
          // <div className="bg-black lg:pt-16 pt-1">
          //   <div className="md:px-14 pt-4 px-3 bg-primary text-accent">
          //     <div className="justify-center flex ">
          //       <MediaPlayerDetails video={video}></MediaPlayerDetails>
          //     </div>
          //     <div className="py-5 text-white lg:px-20 px-0">
          //       <div className="md:flex justify-between items-center">

          //         <div>
          //           <div className="flex items-center lg:pl-5 pl-1">
          //             {[...Array(5)].map((start, i) => {
          //               const ratingValue = i + 1;
          //               return (
          //                 <label key={i}>

          //                   <input type="radio" className="hidden" name="rating" value={ratingValue} onClick={() => handleRating(ratingValue)} />

          //                   <FaStar className="lg:ml-2 ml-0 lg:mr-0 mr-2" color={ratingValue <= (hover || rating || displayStar) ? '#ff9501' : '#222'} size={20}
          //                     onMouseEnter={() => setHover(ratingValue)}
          //                     onMouseLeave={() => setHover(null)}
          //                   >
          //                   </FaStar>
          //                 </label>
          //               )
          //             })}
          //           </div>

          //           <span className="lg:pl-8 pl-1 text-accent block mt-2">Average Rating : {averageRating}</span>
          //         </div>

          //         {/* Like section */}
          //         <div className="grid grid-cols-3 md:mr-2 md:ml-2  md:mt-0 mt-5">

          //           <div className="flex items-center ">
          //             <button onClick={handleLike} className={likedUser?.length >= 1 ? 'btn btn-circle like-btn liked-btn' : 'btn btn-circle like-btn'} title="Like here">
          //               <BiLike />
          //             </button>
          //             <div className={likedUser?.length >= 1 ? 'text-[#ff9501]' : ' text-accent'}>Like {totalLike?.length}</div>
          //           </div>

          //           {/* Add To List Button */}
          //           <div className="flex items-center mr-3">
          //             <button
          //               onClick={handleMyList}
          //               className="btn btn-circle like-btn"
          //               title="Add your list">
          //               <AiOutlinePlus className={hasUserMyList?.length >= 1 ? 'fill-[#ff9501]' : 'text-[#2f2f32] text-semibold'} />
          //             </button>
          //             <span className={hasUserMyList?.length >= 1 ? 'text-[#ff9501]' : 'text-accent'}>My List</span>
          //           </div>


          //           <div className="flex items-center">
          //             <label
          //               htmlFor="my-share-modal-3"
          //               className="btn btn-circle like-btn"
          //               title="Share"
          //             >
          //               <FaShareAlt className="text-xl active:text-[#ff9501]" />
          //             </label>
          //             <span className="text-accent">Share</span>
          //           </div>


          //         </div>
          //       </div>

          //       <hr className="h-[0.5px] my-3 bg-[#222] " />

          //       {/* Video Details */}
          //     </div>
          //     <div className="md:grid lg:px-20 lg:ml-0 -ml-16 px-0 flex items-center  md:grid-cols-6  md:py-8 ">
          //       <div className=" col-start-1 md:col-end-3 col-end-7 flex md:justify-start justify-center items-center w-full">
          //         <img
          //           src={imgLink}
          //           className="md:w-[250px] md:h-[350px] h-3/5 hidden md:block  border-[1px] border-white "
          //           alt=""
          //         />
          //       </div>


          //       <div className=" md:mt-5 md:col-start-3 col-start-7 col-end-12 md:ml-[-60px]">
          //         <div>
          //           <div>
          //             <i className="text-blue-500 text-sm">
          //               #{category} #Pioneerflix
          //             </i>
          //             <h1 className="md:text-5xl text-[#ff9501] text-lg md:font-semibold">
          //               {title}
          //             </h1>

          //             <hr className="md:mt-6 bg-[#222] h-[1px] my-3 md:mb-4" />

          //             <p className="text-sm">( 2022 ) . {duration} . Serial </p>
          //             <p className="my-2 "> Category : {category}</p>
          //             <span className="block my-2 text-accent">Average Rating : {averageRating}</span>
          //             <p className="text-sm">{description}</p>

          //             <hr className="md:mt-6 bg-[#222] h-[1px] my-3 md:mb-4" />

          //           </div>
          //         </div>
          //       </div>
          //     </div>

          //     {/* Search Related Video */}
          //     <div className="mt-5 mb-20">
          //       <h3 className="text-[#ff9501]">You may also like...</h3>
          //       <Slider {...settings}>
          //         {
          //           videos?.map(video =>
          //             <div key={video._id}>
          //               <div className='zoom-div-I pb-2 pl-0 pt-6 pr-3 video-div' key={video._id}>
          //                 <Link to={`/play/${video._id}`}>
          //                   <img className='popular-movie' src={video.imgLink} alt="" />
          //                 </Link>
          //               </div>
          //             </div>)
          //         }
          //       </Slider>
          //     </div>

          //     {/* Comment Section */}
          //     <div className="flex items-center">
          //       {
          //         user?.photoURL ? <img
          //           className="w-14 h-14 rounded-full mt-2 p-1"
          //           src={user.photoURL}
          //           alt=""
          //         /> : <AiOutlineUser className="commenter-img-icon" />
          //       }
          //       <div className="w-full ml-2">
          //         <form onSubmit={handleComment}>
          //           <div className="relative">
          //             <input
          //               autoComplete="off"
          //               type="text"
          //               name="comment"
          //               className="block comment-line p-3 pl-5 focus:outline-none w-full text-sm   bg-primary rounded-sm pr-40"
          //               placeholder="Add a comment…"
          //               required
          //             />
          //             <button
          //               type="submit"
          //               className="btn bg-[#ff9501] hover:bg-[#d37c02] text-[#f5f5f7] absolute right-2.5 disabled bottom-1 font-medium rounded-lg text-sm px-6"
          //             >
          //               {" "}
          //               Comment
          //             </button>
          //           </div>
          //           <hr className="h-[0.5px] bg-slate-900  " />
          //         </form>
          //       </div>
          //     </div>

          //     {/* comment displayed */}
          //     <div className=" md:py-5 pt-5 gap-5">
          //       {commentDisplay?.map((comment) => (
          //         <div className="flex pb-5" key={comment._id}>
          //           {
          //             user?.photoURL ? <img
          //               className="mt-1 w-10 h-10 rounded-full mr-3"
          //               src={user.photoURL}
          //               alt=""
          //             /> : <AiOutlineUser className="commenter-img-icon w-10 h-10 rounded-full mr-3" />
          //           }

          //           <div className="rounded-2xl pb-2 border-[2px #222] ">
          //             <p className="text-amber-400">{comment.id === id && comment.name}</p>
          //             <span className="text-sm">
          //               {comment.id === id && comment.comment}
          //             </span>
          //           </div>
          //         </div>
          //       ))}
          //     </div>
          //   </div>

          //   <input type="checkbox" id="my-share-modal-3" className="modal-toggle" />
          //   <div className="modal">
          //     <div className="modal-box bg-black relative">
          //       <label
          //         htmlFor="my-share-modal-3"
          //         className="btn btn-sm btn-circle absolute right-2 top-2"
          //       >
          //         ✕
          //       </label>
          //       <span className="text-white items-center justify-center flex mb-4">
          //         Share your favorite video on social media <BsFillEmojiSmileFill className="ml-1" />
          //       </span>
          //       <ShareVideo videoLink={videoLink}></ShareVideo>
          //     </div>
          //   </div>
          // </div>



          <div className=" md:px-14 px-3 bg-primary lg:py-20 py-4">
            <div className="grid grid-cols-12 gap-4">
              <div className=" w-full col-start-1 col-end-13 md:col-end-10">
                {/* video */}
                <iframe
                  width="100%"
                  className="p-[.5px] md:h-[550px]"
                  src={video?.videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="lg:py-5 py-2 text-white">
                  <div className="md:flex justify-between items-center mt-6">
                    {/* rating and avrage rating here */}
                    <div>
                      <div className="flex items-center lg:pl-5 pl-1">
                        {[...Array(5)].map((start, i) => {
                          const ratingValue = i + 1;
                          return (
                            <label key={i}>

                              <input type="radio" className="hidden" name="rating" value={ratingValue} onClick={() => handleRating(ratingValue)} />

                              <FaStar className="lg:ml-2 ml-0 lg:mr-0 mr-2" color={ratingValue <= (hover || rating || displayStar) ? '#ff9501' : '#222'} size={20}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                              >
                              </FaStar>
                            </label>
                          )
                        })}
                      </div>
                      <span className="lg:pl-8 pl-1 text-accent block mt-2">Average Rating : {averageRating}</span>
                    </div>
                    {/* like, add to my list, share button and modal wrapper */}
                    <div className="grid grid-cols-3 mr-0 md:ml-0 ml-0  md:mt-0 mt-5">

                      {/* Like button here */}
                      <div className="flex justify-start items-center">
                        <button onClick={handleLike} className={likedUser?.length >= 1 ? 'btn btn-circle like-btn liked-btn' : 'btn btn-circle like-btn'} title="Like here">
                          <BiLike />
                        </button>
                        <div className={likedUser?.length >= 1 ? 'text-[#ff9501]' : ' text-accent'}>Like {totalLike?.length}</div>
                      </div>
                      {/* add to my list button here */}
                      <div className="flex items-center lg:mr-3 mr-0 lg:ml-0 ml-0">
                        <button
                          onClick={handleMyList}
                          className="btn btn-circle like-btn"
                          title="Add your list">
                          <AiOutlinePlus className={hasUserMyList?.length >= 1 ? 'fill-[#ff9501]' : 'text-[#2f2f32] text-semibold'} />
                        </button>
                        <span className={hasUserMyList?.length >= 1 ? 'text-[#ff9501]' : 'text-accent'}>My List</span>
                      </div>
                      {/* Share Modall Button */}
                      <div className="flex items-center justify-end">
                        <label
                          htmlFor="my-share-modal-3"
                          className="btn btn-circle like-btn"
                          title="Share"
                        >
                          <FaShareAlt className="text-xl" />
                        </label>
                        <span>Share</span>
                      </div>
                      {/* Share Modall */}
                      <input type="checkbox" id="my-share-modal-3" className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box bg-black relative">
                          <label
                            htmlFor="my-share-modal-3"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
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
                  {/* video details area */}
                  <hr className="h-[0.5px] mt-8 mb-4 bg-[#222]" />
                  <div className="container mx-auto flex lg:px-5 px-0 lg:pt-16 lg:pb-16 pt-14 pb-0 md:flex-row flex-col items-center">
                    <div className="lg:max-w-xs lg:w-full md:w-full w-11/12">
                      <img
                        src={imgLink}
                        className="object-cover lg:mb-0 mb-10 block mx-auto object-center rounded"
                        alt=""
                      />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-0 md:pr-2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:pl-6 pl-0">
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
                {/* Comment area*/}
                <div className="flex items-center">
                  {
                    user?.photoURL ? <img
                      className="w-14 h-14 rounded-full mt-2 p-1"
                      src={user.photoURL}
                      alt=""
                    /> : <AiOutlineUser className="commenter-img-icon" />
                  }
                  <div className="w-full ml-2">
                    <form onSubmit={handleComment}>
                      <div className="relative">
                        <input
                          autoComplete="off"
                          type="text"
                          name="comment"
                          className="block comment-line p-3 pl-5 focus:outline-none w-full text-sm   bg-primary rounded-sm lg:pr-40 pr-28"
                          placeholder="Add a comment…"
                          required
                        />
                        <button
                          type="submit"
                          className="btn lg:btn-md btn-sm bg-[#ff9501] hover:bg-[#d37c02] text-[#f5f5f7] absolute right-2.5 disabled bottom-1 lg:font-medium font-thin lg:rounded-lg rounded text-sm lg:px-6 px-2"
                        >
                          {" "}
                          Comment
                        </button>
                      </div>
                      <hr className="h-[0.5px] bg-slate-900" />
                    </form>
                  </div>
                </div>

                {/* comment displayed */}
                <div className="pl-2 md:py-5 pt-5 gap-5">
                  {commentDisplay?.map((comment) => (
                    <div className="flex pb-5" key={comment._id}>
                      {
                        user?.photoURL ? <img
                          className="mt-1 w-10 h-10 rounded-full mr-3"
                          src={user.photoURL}
                          alt=""
                        /> : <AiOutlineUser className="commenter-img-icon w-10 h-10 rounded-full mr-3" />
                      }

                      <div className="rounded-2xl pb-2 border-[2px #222] ">
                        <p className="text-amber-400">{comment.id === id && comment.name}</p>
                        <span className="text-sm">
                          {comment.id === id && comment.comment}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* sidebar videos */}
              <div className="lg:pt-0 pt-16 w-full col-start-1 md:col-start-10 col-end-13">
                <div>
                  {
                    videos?.map(video =>
                      <Link to={`/play/${video._id}`}>
                        <div
                          key={video._id}

                          className="flex px-3 bg-[#222] cursor-pointer rounded-sm  py-3 mb-3"
                        >
                          <img
                            src={video.imgLink}
                            className="h-[80px] rounded-sm w-[100px]"
                            alt=""
                          />
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
          <Payments></Payments>
      }
    </>
  );
};

export default Details;