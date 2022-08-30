import React, { useState } from "react";
import { FaShareAlt, FaStar, } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import useVideo from "../../hooks/useVideo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useComments from "../../hooks/useComments";
import useLikes from "../../hooks/useLikes";
import "./Details.css";
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, RedditIcon, RedditShareButton } from "react-share";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import useRatings from "../../hooks/useRatings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useVideos from "../../hooks/useVideos";
import usePaidUser from "../../hooks/usePaidUser";
import useMyList from "../../hooks/useMyList";
import Payments from "../Payments/Payments";
import { useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [video] = useVideo(id);
  const [likes] = useLikes();
  const [comments] = useComments();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [data, refetch] = useRatings(id);
  const [paidUser] = usePaidUser(user);
  const [myList] = useMyList();

  const paid = paidUser?.paid;

  const { videoLink, imgLink, title, category, description, duration } = video;
  const [videos] = useVideos();

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

      const url = `https://infinite-island-65121.herokuapp.com/likes/${likedId}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // alert("Deleted");
          }
        });
    }

    // to add like
    else {
      fetch("https://infinite-island-65121.herokuapp.com/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLike),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // alert("Your item successfully added.");
          }
        });
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

    fetch("https://infinite-island-65121.herokuapp.com/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // alert('Your item successfully added.')
          e.target.reset();
        }
      });
  };

  // Handle Rating || Manik Islam Mahi
  const handleRating = (star) => {
    setRating(star);
    const name = user?.displayName;
    const email = user?.email;
    const rating = { id, star, name, email };
    const url = `https://infinite-island-65121.herokuapp.com/rating/${email}`
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

      const url = `https://infinite-island-65121.herokuapp.com/mylist/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // alert("Deleted");
          }
        });
    }

    else {
      fetch(`https://infinite-island-65121.herokuapp.com/mylist/${user?.email}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
      })
        .then(res => res.json())
        .then(result => {
          // console.log(result);
        })
    }
  };

  // set watch list || Manik Islam Mahi
  useEffect(() => {
    if (videoLink) {
      fetch(`http://localhost:5000/watchlist/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  }, [video?.videoLink]);


  // useEffect(() => {
  //   if (title) {
  //     const remaining = watchVideo?.filter((v) => v?.videoId === id);
  //     if (remaining?.length === 0) {
  //       // fetch("https://infinite-island-65121.herokuapp.com/library", {
  //       fetch("http://localhost:5000/library", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(libraryInfo),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // console.log(data);
  //         });
  //     }
  //   }
  // }, [title]);


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8.5,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 4.2,
          slidesToScroll: 4
        }
      }
    ]
  };

  return (
    <>
      {
        paid ?
          <div>
            <div className="md:px-14 px-3 pt-16 bg-primary text-secondary">
              <div className="justify-center flex ">

                <iframe
                  width="95%"
                  className="mt-1"
                  height="500px"
                  src={videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>

              {/* ________________ Rating Section _____________ */}
              <div className="py-5 text-white">
                <div className="md:flex justify-between items-center">

                  <div>
                    <div className="flex items-center pl-5">
                      {[...Array(5)].map((start, i) => {
                        const ratingValue = i + 1;
                        return (
                          <label key={i}>

                            <input type="radio" className="hidden" name="rating" value={ratingValue} onClick={() => handleRating(ratingValue)} />

                            <FaStar className="ml-2" color={ratingValue <= (hover || rating || displayStar) ? '#ff9501' : '#222'} size={20}
                              onMouseEnter={() => setHover(ratingValue)}
                              onMouseLeave={() => setHover(null)}
                            >

                            </FaStar>
                          </label>
                        )
                      })}

                    </div>
                    <span className="pl-8 text-[#a5a5a5] block mt-2">Average Rating : {averageRating}</span>
                  </div>

                  {/* Like section */}
                  <div className="grid grid-cols-3 mr-6 md:ml-0 ml-5  md:mt-0 mt-5">
                    <div className="flex items-center ">
                      <button onClick={handleLike} className={likedUser?.length >= 1 ? 'btn btn-circle like-btn liked-btn' : 'btn btn-circle like-btn'} title="Like here">
                        <BiLike />
                      </button>
                      <div className={likedUser?.length >= 1 ? 'text-[#ff9501]' : ''}>Like {totalLike?.length}</div>
                    </div>

                    {/* here is my list button */}
                    <div className="flex items-center mr-3">
                      <button
                        onClick={handleMyList}
                        className="btn btn-circle like-btn"
                        title="Add your list">
                        <AiOutlinePlus className={hasUserMyList?.length >= 1 ? 'fill-[#ff9501]' : ''} />
                      </button>
                      <span className={hasUserMyList?.length >= 1 ? 'text-[#ff9501]' : ''}>My List</span>
                    </div>

                    <div className="flex items-center">
                      <label
                        htmlFor="my-share-modal-3"
                        className="btn btn-circle like-btn"
                        title="Share"
                      >
                        <FaShareAlt className="text-xl active:text-[#ff9501]" />
                      </label>
                      <span>Share</span>
                    </div>
                  </div>
                </div>

                <hr className="h-[0.5px] my-3 bg-[#222] " />

                {/* Video details */}
              </div>
              <div className="md:grid flex items-center  md:grid-cols-6  md:py-8 ">
                <div className=" col-start-1 md:col-end-3 col-end-7 flex md:justify-start justify-center items-center w-full">
                  <img
                    src={imgLink}
                    className="md:w-[250px] md:h-[350px] h-3/5 hidden md:block  border-[1px] border-white "
                    alt=""
                  />
                </div>
                <div className=" md:mt-5 md:col-start-3 col-start-7 col-end-12 md:ml-[-130px]">
                  <div>
                    <div>
                      <i className="text-blue-500 text-sm">
                        #{category} #Pioneerflix
                      </i>
                      <h1 className="md:text-5xl text-[#ff9501] text-lg md:font-semibold">
                        {title}
                      </h1>

                      <hr className="md:mt-6 bg-[#222] h-[1px] my-3 md:mb-4" />

                      <p className="text-sm">( 2022 ) . {duration} . Serial </p>
                      <p className="my-2 "> Category : {category}</p>
                      <span className="block my-2">Average Rating : {averageRating}</span>
                      <p className="text-sm">{description}</p>

                      <hr className="md:mt-6 bg-[#222] h-[1px] my-3 md:mb-4" />

                    </div>
                  </div>
                </div>
              </div>

              {/* Search Related Video */}
              <div className="mt-5 mb-20">
                <h3 className="text-[#ff9501]">You may also like...</h3>
                <Slider {...settings}>
                  {
                    videos.map(video =>
                      <div key={video._id}>
                        <div className='zoom-div-I pb-2 pl-0 pt-6 pr-3 video-div' key={video._id}>
                          <Link to={`/play/${video._id}`}>
                            <img className='popular-movie' src={video.imgLink} alt="" />
                          </Link>
                        </div>
                      </div>)
                  }
                </Slider>
              </div>

              {/* comment section */}
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
                        className="block comment-line p-3 pl-5 focus:outline-none w-full text-sm   bg-primary rounded-sm pr-40"
                        placeholder="Add a comment…"
                        required
                      />
                      <button
                        type="submit"
                        className="btn bg-[#ff9501] hover:bg-[#d37c02] text-[#f5f5f7] absolute right-2.5 disabled bottom-1 font-medium rounded-lg text-sm px-6"
                      >
                        {" "}
                        Comment
                      </button>
                    </div>
                    <hr className="h-[0.5px] bg-slate-900  " />
                  </form>
                </div>
              </div>

              {/* comment displayed */}
              <div className=" md:py-5 pt-5 gap-5">
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
                <div className="flex justify-center">
                  <FacebookShareButton url={videoLink}>
                    <FacebookIcon className="rounded-3xl mr-4"></FacebookIcon>
                  </FacebookShareButton>

                  <WhatsappShareButton url={videoLink}>
                    <WhatsappIcon className="rounded-3xl mr-4"></WhatsappIcon>
                  </WhatsappShareButton>

                  <TwitterShareButton url={videoLink}>
                    {" "}
                    <TwitterIcon className="rounded-3xl mr-4"></TwitterIcon>
                  </TwitterShareButton>

                  <LinkedinShareButton url={videoLink}>
                    <LinkedinIcon className="rounded-3xl mr-4"></LinkedinIcon>
                  </LinkedinShareButton>

                  <RedditShareButton url={videoLink}>
                    <RedditIcon className="rounded-3xl"></RedditIcon>
                  </RedditShareButton>
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