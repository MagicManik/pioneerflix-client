import React, { useEffect, useState } from "react";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { useParams } from "react-router-dom";
import useVideo from "../../hooks/useVideo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useComments from "../../hooks/useComments";
import useLikes from "../../hooks/useLikes";
import "./Details.css";
import { toast } from "react-toastify";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditIcon,
  RedditShareButton,
} from "react-share";
import useWatchHistory from "../../hooks/useWatchHistory";

const Details = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [video] = useVideo(id);
  const [likes] = useLikes();
  const [comments] = useComments();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [list, setList] = useState(true);

  let newLike = likes.filter((li) => li.id === id);
  const { videoLink, imgLink, title, category, description, duration } = video;

  // Handle Review || Manik Islam Mahi
  const handleReview = (star) => {
    setRating(star);
    // const name = user.displayName;
    // const email = user.email;

    // const review = { id, star, name, email };

    // console.log(review);

    // const url = `https://infinite-island-65121.herokuapp.com/reviews/${email}`

    // fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(review)
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     console.log(result);
    //   })
  };

  // like handler || Manik Islam Mahi
  const handleLike = () => {
    const like = true;
    const name = user.displayName;
    const email = user.email;
    const newLike = { id, like, name, email };

    const likedUser = likes.filter((li) => li.id === id && li.email === email);

    if (likedUser.length > 0) {
      const likedId = likedUser[0]._id;

      const url = `https://infinite-island-65121.herokuapp.com/likes/${likedId}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted");
          }
        });
    } else {
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
    const name = user.displayName;
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

  const [watchVideo] = useWatchHistory(user?.email);

  // Handle Review || Shihab Uddin
  const libraryInfo = {
    videoId: id,
    email: user?.email,
    videoLink: videoLink,
    videoTitle: title,
    // videoDescription:description
  };

  useEffect(() => {
    if (title) {
      const remaining = watchVideo?.filter((v) => v?.videoId === id);
      if (remaining?.length === 0) {
        // fetch("https://infinite-island-65121.herokuapp.com/library", {
        fetch("http://localhost:5000/library", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(libraryInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
          });
      }
    }
  }, [title,watchVideo]);

  const handleAddList = () => {
    fetch("https://infinite-island-65121.herokuapp.com/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(libraryInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Video is added successfully !!!!");
        setList(false);
      });
  };

  return (
    <>
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

        {/* ________________ Review Section _____________ */}
        <div className="py-5 text-white">
          <div className="md:flex justify-between items-center">
            <div className="flex">
              {[...Array(5)].map((start, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      className="hidden"
                      name="rating"
                      value={ratingValue}
                      onClick={() => handleReview(ratingValue)}
                    />

                    <FaStar
                      className="ml-2"
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      size={20}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    ></FaStar>
                  </label>
                );
              })}
            </div>

            {/* Like section */}
            <div className="grid grid-cols-3 md:ml-0 ml-5  md:mt-0 mt-5">
              <div className="flex items-center ">
                <button onClick={handleLike} title="Like here">
                  <BiLike className="text-2xl  mr-2" />
                </button>
                <div>{newLike.length}</div>
              </div>
              {/* <span><AiFillDislike className="text-2xl"/></span> */}
              {list ? (
                <button
                  onClick={handleAddList}
                  className="flex    items-center mr-3"
                  title="Add your list"
                >
                  <AiOutlinePlus className="mr-2 text-xl" /> My List
                </button>
              ) : (
                <button
                  className="flex    items-center mr-3"
                  title="This video was already  added"
                  disabled
                >
                  <AiOutlinePlus className="mr-2 text-xl" /> My List
                </button>
              )}
              <label
                htmlFor="my-share-modal-3"
                className="flex  cursor-pointer ml-5 items-center"
                title="Share"
              >
                <FaShareAlt className="mr-2 text-xl" /> Share
              </label>
            </div>
          </div>
          <hr className="h-[0.5px] my-3 bg-secondary " />
        </div>
        <div className="md:grid  md:grid-cols-6  md:py-8 ">
          <div className=" col-start-1 md:col-end-3 col-end-7 flex md:justify-start justify-center items-center w-full">
            <img
              src={imgLink}
              className="md:w-[250px] md:h-[350px] h-3/5 hidden md:block  border-[1px] border-white "
              alt=""
            />
          </div>
          <div className=" md:mt-5 md:col-start-3 col-start-7 col-end-12 md:ml-[-150px]  ">
            <div>
              <div>
                <i className="text-blue-500 text-sm">
                  #{category} #Pioneerflix
                </i>
                <h1 className="md:text-5xl text-lg md:font-semibold">
                  {title}
                </h1>
                <hr className="md:mt-6 bg-secondary h-0.5 my-4 md:mb-4" />

                <p className="text-sm">( 2022 ) . {duration} . Serial </p>
                <p className="my-2 "> Category : {category}</p>
                <p className="text-sm">{description}</p>
                <hr className="md:mt-6 bg-secondary h-0.5 my-3 md:mb-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Related Video */}
        {/* <div className="my-8">
          <h1 className="text-4xl mb-4  font-medium">You May Also Like</h1>
          <div className="grid sm:grid-cols-2  md:grid-cols-6 gap-5  ">
            {popularMovies.map((movie) => (
              <div className="zoom-div" key={movie._id}>
                <img
                  className="md:w-[250px] md:h-[300px]  border-[1px] border-white "
                  src={movie.img}
                  alt=""
                />
              </div>
            ))}


          </div>
        </div> */}
        {/* comment section */}
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-full mt-2 p-1"
            src={user?.photoURL}
            alt=""
          />
          <div className="w-full   ml-2">
            <form onSubmit={handleComment}>
              <div className="relative">
                <input
                  type="text"
                  name="comment"
                  className="block p-3 pl-5   focus:outline-none w-full text-sm   bg-primary border-b-2 border-white rounded-sm border "
                  placeholder="Add a comment…"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 disabled bottom-1 bg-amber-800 font-medium rounded-lg text-sm px-4 py-2"
                >
                  {" "}
                  Comment
                </button>
              </div>
              <hr className="h-[0.5px]   bg-secondary " />
            </form>
          </div>
        </div>
        <div className=" md:py-10  pt-5 gap-5">
          {comments.map((comment) => (
            <>
              <div key={comment._id}>
                <div className="flex mt-3 items-center text-xl font-semibold">
                  {" "}
                  <img
                    className="w-10 h-10 rounded-full p-1"
                    src={comment?.img}
                    alt=""
                  />
                  <p className="ml-2 text-amber-400">
                    {comment.id === id && comment.name}
                  </p>
                </div>
                <p className="ml-10 text-sm">
                  {comment.id === id && comment.comment}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* <!------------- Social media Open in a modal ---------------------> */}

      <input type="checkbox" id="my-share-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-black relative">
          <label
            htmlFor="my-share-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold text-white mb-4">
            Share your video on social media
          </h3>

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
    </>
  );
};

export default Details;
