import React, { useEffect } from "react";
import movie1 from "../../assets/bangla-movie/movie (1).jpg";
import movie2 from "../../assets/bangla-movie/movie (2).jpg";
import movie3 from "../../assets/bangla-movie/movie (3).jpg";
import { FaRegThumbsUp, FaEllipsisH, FaComment } from "react-icons/fa";
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
  RedditShareButton
} from "react-share";


const Details = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [video] = useVideo(id);


  const [likes] = useLikes();
  const [comments] = useComments();

  let newLike = likes.filter(li => li.id === id);


  // like handler || Manik Islam Mahi
  const handleLike = () => {

    const like = true;
    const name = user.displayName;
    const email = user.email;
    const newLike = { id, like, name, email };

    const likedUser = likes.filter(li => li.id === id && li.email === email);

    if (likedUser.length > 0) {
      const likedId = likedUser[0]._id;

      const url = `http://localhost:5000/likes/${likedId}`

      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('Deleted');
          }
        })
    }

    else {
      fetch("http://localhost:5000/like", {
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

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const name = user.displayName;
    const newComment = { id, name, comment };
    console.log(newComment)


    fetch("http://localhost:5000/comment", {
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
    videoLink: video?.videoLink,
    videoTitle: video?.title,
    // videoDescription:video?.description

  }
  // handleAddList

  useEffect(() => {
    if (video?.title) {
      fetch('http://localhost:5000/library', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(libraryInfo)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
    }
  }, [video?.title])

  const handleAddList = () => {
    fetch('http://localhost:5000/favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(libraryInfo)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }



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
  const fakeComment = [
    {
      name: "Shihab",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      name: "Manik",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Barik",
      comment:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    },
  ];

  return (
    <div className="md:px-14 px-3 pt-20 bg-primary text-secondary">
      <div className="justify-center flex ">
        <iframe
          className="rounded-sm h-full md:h-[700px] md:p-1 shadow-2xl border-2 border-zinc-700 "
          width="100%"
          src={video.videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="grid  md:grid-cols-6  py-8">
        <div className=" col-start-1 md:col-end-3 col-end-7 flex md:justify-start justify-center items-center w-full">
          <img
            src={video.imgLink}
            className="md:w-[350px] md:h-[500px] h-3/5  border-[1px] border-white "
            alt=""
          />
        </div>
        <div className=" md:mt-5 md:col-start-3 col-start-7 col-end-12 md:ml-[-40px] ml-5 ">
          <div>
            <div>
              <h1 className="md:text-5xl text-lg md:font-semibold">
                {video?.title}
              </h1>
              <hr className="md:mt-6 bg-secondary h-0.5 my-4 md:mb-4" />

              <p className="text-sm">( 2022 ) . 0 hr 4 min . Arabic </p>
              <p className="my-2 text-sm"> Category : Bangla Movie</p>
              <p>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <hr className="md:mt-6 bg-secondary h-0.5 my-3 md:mb-4" />

              {/* Linke */}
              <div className="flex items-center ">
                <div>

                  {newLike.length}
                </div>

                <button
                  onClick={handleLike}
                  className="btn btn-circle bg-transparent ml-3 custom-like-btn hover:bg-transparent"
                >
                  <FaRegThumbsUp className="text-amber-500" />
                </button>
              </div>

              {/* show comments */}
              <article className="pt-5">
                {comments.map((comment) => (
                  <div key={comment._id}>
                    <p>{comment.id === id && comment.name}</p>
                    <p>{comment.id === id && comment.comment}</p>
                  </div>
                ))}
              </article>

              {/* comment filed */}
              <div className="mt-5 hidden md:block">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid  md:grid-cols-6 gap-5  ">
        <div className="md:w-[350px] w-full md:col-start-1  md:col-end-3 ">
          <div>

            <button onClick={handleAddList} className="btn btn-warning py-3 px-6 ">Add To My List</button>



            {/* ---------------------Share a video------------------ */}
            <label
              for="my-share-modal-3"
              class=" border-2 cursor-pointer hover:bg-amber-500 border-amber-500 py-2 md:ml-2 ml-3 px-7 md:px-6"
            >
              Share
            </label>


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
                <FacebookShareButton url={video.videoLink}>
                  <FacebookIcon className="rounded-3xl mr-4"></FacebookIcon>
                </FacebookShareButton>


                <WhatsappShareButton url={video.videoLink}>
                  <WhatsappIcon className="rounded-3xl mr-4"></WhatsappIcon>
                </WhatsappShareButton>

                <TwitterShareButton url={video.videoLink}>
                  {" "}
                  <TwitterIcon className="rounded-3xl mr-4"></TwitterIcon>
                </TwitterShareButton>

                <LinkedinShareButton url={video.videoLink}><LinkedinIcon className="rounded-3xl mr-4"></LinkedinIcon></LinkedinShareButton>

                <RedditShareButton url={video.videoLink}><RedditIcon className="rounded-3xl"></RedditIcon></RedditShareButton>
              </div>
            </div>
            <button className="border-2 border-amber-500 py-3 md:ml-2 ml-4 px-7 md:px-6">
              <FaEllipsisH />
            </button>
          </div>


          {/* ---------this is another input field for mobile device ----------- */}

          <div className=" block md:hidden my-5">
            <textarea onSubmit={handleComment}
              placeholder="Please Write Your Comment"
              className="p-3 w-full text-black border-2 rounded-sm border-zinc-700"
              name=""
              id=""
              rows="4"
            ></textarea>{" "}
            <br />
            <button className="  bg-amber-500 px-7 rounded-sm py-2 mt-2 text-xl">
              Submit
            </button>
          </div>
        </div>
        <div className="   md:col-start-3 w-full  md:col-end-12 ">
          <div>
            <div className=" video-container">
              <h1 className="text-4xl mb-4  font-medium">You May Also Like</h1>
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
      </div>

      {/* comment section */}
      <hr className="mt-6 bg-secondary h-0.5 md:mb-4 " />
      <div className="grid md:grid-cols-3 md:py-10 md:pt-0 pt-5 gap-5">
        {fakeComment.map((c, index) => (
          <>
            <div key={index}>
              <div className="flex  items-center text-xl font-semibold">
                {" "}
                <FaComment className="mr-2 text-amber-500" />
                {c.name}
              </div>
              <p className="ml-7 text-sm">{c.comment}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Details;
