import React, { useState } from "react";
import pic1 from "../../assets/videoDetail-pic/pic1.jpg";
import "./VideoDetail.css";
import movie1 from "../../assets/bangla-movie/movie (1).jpg";
import movie2 from "../../assets/bangla-movie/movie (2).jpg";
import movie3 from "../../assets/bangla-movie/movie (3).jpg";
import movie4 from "../../assets/bangla-movie/movie (4).jpg";
import movie5 from "../../assets/bangla-movie/movie (5).jpg";
import movie6 from "../../assets/bangla-movie/movie (6).jpg";
import Comment from "../Comment/Comment";

const VideoDetail = () => {
  const [comments, setComments] = useState([]);

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
    {
      _id: 4,
      name: "Movie 4",
      description: "",
      img: movie4,
    },
    {
      _id: 5,
      name: "Movie 5",
      description: "",
      img: movie5,
    },
    {
      _id: 6,
      name: "Movie 6",
      description: "",
      img: movie6,
    },
  ];

  const addComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const newComments = [comment, ...comments];
    setComments(newComments);
    event.target.reset();
  };

  return (
    <div>
      <div className="justify-center flex px-10">
        <img src={pic1} alt="" srcset="" className="w-full" />
      </div>
      <div class="hero py-10 px-10">
        <div class="hero-content  flex-col lg:flex-row ">
          <img src={pic1} className="image-size rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 class="text-3xl font-semibold">Mogoje Mohaproloy</h1>
            <h5 className="pt-3">Director: Rajib Asraf</h5>
            <h5>Reaseased on 2022</h5>

            <p class="pt-6 font-medium">Description:</p>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-slate-200  text-zinc-900" type="submit">
              Add my list
            </button>
            <button
              className="btn bg-slate-200 text-zinc-900  mx-5"
              type="submit"
            >
              Share
            </button>
            <button className="btn bg-slate-200  text-zinc-900" type="submit">
              ...
            </button>
            <br />

            {/*............................ Comment Section...................... */}
            <form onSubmit={addComment}>
              <div className="py-4">
                <textarea
                  class=" h-28 w-2/4 appearance-none block bg-slate-300  text-zinc-900 resize-none border rounded-lg placeholder-stone-600  pt-3 px-3"
                  type="text"
                  name="comment"
                  placeholder="Comment Here"
                ></textarea>
              </div>
              <div className="pl-80">
                <button
                  className="btn  bg-slate-200 text-zinc-900 mx-2"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*.............................. Comment will show here..................... */}
      <h1 class="text-3xl font-semibold text-center">User's Comments</h1>
      <div className="grid grid-cols-3 justify-items-center gap-6 pt-10">
        
        {comments.map((comment) => (
          <Comment 
          comment={comment}
          ></Comment>
        ))}
      </div>

      <div className="py-5 px-10">
        <div className=" lg:px-20 sm:px-4 video-container">
          <h1 className="text-3xl text-black py-6 font-medium">
            You May Also Like
          </h1>
          <div className="grid lg:grid-cols-6 gap-4 popular-movie-section">
            {popularMovies.map((movie) => (
              <div className="zoom-div" key={movie._id}>
                <img className="popular-movie" src={movie.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
