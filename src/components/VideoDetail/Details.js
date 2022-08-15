import React, { useEffect } from "react";
import movie1 from "../../assets/bangla-movie/movie (1).jpg";
import movie2 from "../../assets/bangla-movie/movie (2).jpg";
import movie3 from "../../assets/bangla-movie/movie (3).jpg";
import {
  FaRegThumbsUp,
  FaEllipsisH,
  FaComment,
  FaShareAlt,
  FaPlus,
  FaRegStar,
} from "react-icons/fa";
import { AiFillLike, AiFillDislike, AiTwotoneStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useVideo from "../../hooks/useVideo";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useComments from "../../hooks/useComments";
import useLikes from "../../hooks/useLikes";
import "./Details.css";
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
import { useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [video] = useVideo(id);
  const [likes] = useLikes();
  const [comments] = useComments();
  // const [value, setValue] = useState("");

  let newLike = likes.filter((li) => li.id === id);
  const { videoLink, imgLink, title, category, description, duration } = video;
  // console.log(user)
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
            alert("Your item successfully added.");
          }
        });
    }
  };

  // Comment Handler || Manik Islam Mahi
  // console.log(user)
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

  // for set video id for library section
  const libraryInfo = {
    videoId: id,
    email: user?.email,
    videoLink: videoLink,
    videoTitle: title,
    // videoDescription:description
  };
  // handleAddList

  useEffect(() => {
    if (title) {
      fetch("https://infinite-island-65121.herokuapp.com/library", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(libraryInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [title]);

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
        console.log(data);
      });
  };

  const popularMovies = [
    {
      _id: 1,
      name: "Movie 1",
      description: "",
      img: movie1,
    },
    {
      _id: 2,
      name: "Movie 2",
      description: "",
      img: movie2,
    },
    {
      _id: 3,
      name: "Movie 3",
      description: "",
      img: movie3,
    },
  ];

  // console.log(comments)
  return (
    <>
      <div className="md:px-14 px-3 pt-20 bg-primary text-secondary">
        <div className="justify-center flex ">
          <iframe
            className="rounded-sm h-full md:h-[700px] md:p-1 shadow-2xl border-2 border-zinc-700 "
            width="100%"
            src={videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="py-5 text-white">
          <div className="flex justify-between items-center">
            <div>
              <i className="text-blue-500 text-sm">Ratting</i>
              <div className="flex text-amber-600">
                <FaRegStar /> <AiTwotoneStar />
                <FaRegStar className="mx-2" />
                <AiTwotoneStar />
                <FaRegStar />
                <AiTwotoneStar />
                <FaRegStar className="mx-2" />
                <AiTwotoneStar />
                <FaRegStar />
                <AiTwotoneStar />
              </div>
            </div>
            <div className="grid grid-cols-3 ">
              {/* <button onClick={handleLike}><AiFillLike className="text-2xl"/></button> */}
              {/* Linke */}
              <div className="flex items-center ">
                <div>{newLike.length}</div>

                <button onClick={handleLike} title="Like here">
                  <AiFillLike className="text-2xl  ml-2" />
                </button>
              </div>
              {/* <span><AiFillDislike className="text-2xl"/></span> */}
              <button
                onClick={handleAddList}
                className="flex  items-center mr-3"
                title="Add your list"
              >
                <FaPlus className="mr-2 text-xl" /> My List
              </button>
              <label
                for="my-share-modal-3"
                class="flex  cursor-pointer ml-5 items-center"
                title="Share"
              >
                <FaShareAlt className="mr-2 text-xl" /> Share
              </label>
              {/* <span className="flex  items-center"><FaShareAlt className="mr-2 text-xl"/> Share</span> */}
            </div>
          </div>
          <hr className="h-[0.5px] my-3 bg-white" />
        </div>

        <div className="grid  md:grid-cols-6  py-8">
          <div className=" col-start-1 md:col-end-3 col-end-7 flex md:justify-start justify-center items-center w-full">
            <img
              src={imgLink}
              className="md:w-[250px] md:h-[400px] h-3/5  border-[1px] border-white "
              alt=""
            />
          </div>
          <div className=" md:mt-5 md:col-start-3 col-start-7 col-end-12 md:ml-[-120px] ml-5 ">
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
                <p className="my-2 text-sm"> Category : {category}</p>
                <p>{description}</p>
                <hr className="md:mt-6 bg-secondary h-0.5 my-3 md:mb-4" />

                {/* Linke
              <div className="flex items-center ">
                <div>{newLike.length}</div>

                <button
                  onClick={handleLike}
                  className="btn btn-circle bg-transparent ml-3 custom-like-btn hover:bg-transparent"
                >
                  <FaRegThumbsUp className="text-amber-500" />
                </button>
              </div> */}

                {/* show comments */}
                {/* <article className="pt-5">
                {comments.map((comment) => (
                  <div key={comment._id}>
                    <p>{comment.id === id && comment.name}</p>
                    <p>{comment.id === id && comment.comment}</p>
                  </div>
                ))}
              </article> */}

                {/* comment filed */}
                {/* <div className="mt-5 hidden md:block">
                <form onSubmit={handleComment}>
                  <textarea
                    placeholder="Please Write Your Comment"
                    className="p-3 text-black border-2 rounded-sm border-zinc-700"
                    name="comment"
                    id=""
                    cols="65"
                    rows="4"
                  ></textarea>{" "}
                  <br />
                  <input
                    className="  bg-amber-500 px-7 rounded-sm py-2 mt-2 text-xl"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl mb-4  font-medium">You May Also Like</h1>
          <div className="grid  md:grid-cols-6 gap-5  ">
            <div className=" video-container">
              <div className="grid grid-cols-3 gap-2 md:gap-4 ">
                {popularMovies.map((movie) => (
                  <div className="zoom-div" key={movie._id}>
                    <img
                      className="md:w-[300px] md:h-[400px]  border-[1px] border-white "
                      src={movie.img}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* comment section */}
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-full mt-2 p-1"
            src={user?.photoURL}
            alt=""
          />
          <div className="w-full   ml-2">
            <form onSubmit={handleComment}>
              <div class="relative">
                <input
                  type="text"
                  name="comment"
                  class="block p-3 pl-5   focus:outline-none w-full text-sm   bg-primary border-b-2 border-white rounded-sm border "
                  placeholder="Add a comment…"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 disabled bottom-1 bg-amber-800 font-medium rounded-lg text-sm px-4 py-2"
                >
                  {" "}
                  Comment
                </button>
              </div>
              <hr className="h-[0.5px]   bg-white" />
            </form>
          </div>
        </div>

        {/* show comments */}
        {/* <article className="pt-5">
                {comments.map((comment) => (
                  <div key={comment._id}>
                    <p>{comment.id === id && comment.name}</p>
                    <p>{comment.id === id && comment.comment}</p>
                  </div>
                ))}
              </article> */}

        {/* <hr className="mt-6 bg-secondary h-0.5 md:mb-4 " /> */}
        <div className=" md:py-10  pt-5 gap-5">
          {comments.map((comment) => (
            <>
              <div key={comment._id}>
                <div className="flex  items-center text-xl font-semibold">
                  {" "}
                  <img
                    className="w-10 h-10 rounded-full p-1"
                    src={comment?.img}
                    alt=""
                  />
                  <p>{comment.id === id && comment.name}</p>
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

      <input type="checkbox" id="my-share-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box bg-black relative">
          <label
            for="my-share-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-2xl font-bold text-white mb-4">
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
