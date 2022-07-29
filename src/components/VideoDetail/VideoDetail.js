import React from "react";
import pic1 from "../../assets/videoDetail-pic/pic1.jpg";
import "./VideoDetail.css";
import movie1 from "../../assets/bangla-movie/movie (1).jpg";
import movie2 from "../../assets/bangla-movie/movie (2).jpg";
import movie3 from "../../assets/bangla-movie/movie (3).jpg";
import movie4 from "../../assets/bangla-movie/movie (4).jpg";
import movie5 from "../../assets/bangla-movie/movie (5).jpg";
import movie6 from "../../assets/bangla-movie/movie (6).jpg";
import { FaRegThumbsUp } from "react-icons/fa";
const VideoDetail = () => {
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
  return (
    <div className="px-14 pt-3 bg-black">
      <div className="justify-center flex ">
        <iframe
          className="rounded-sm p-1 shadow-2xl border-2 border-zinc-700 "
          width="100%"
          height="700px"
          src="https://www.youtube.com/embed/M3xjz4nxzGQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="grid  grid-cols-6 h-screen py-8">
        <div className=" col-start-1 col-end-3 w-full">
          <img
            src={movie4}
            className="w-[350px] h-[500px]  border-[1px] border-white "
            alt=""
          />
        </div>
        <div className=" mt-5 col-start-3 ml-[-40px] col-end-12 ">
          <div className=" text-white">
           <div>
           <h1 class="text-5xl font-semibold">Mogoje Mohaproloy</h1>
           <hr className="mt-6 mb-4" />
           
            <p className="text-sm">( 2022 )  . 0 hr 4 min . Arabic </p>
            <p className="my-2 text-sm"> Type : Song</p>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <hr className="mt-6 mb-4" />
            <div className="flex items-center ">
              <p>150</p>
              <button><FaRegThumbsUp className="ml-3 text-amber-500"/></button>
              
              
            </div>
            <div className="mt-5 ">
              <textarea placeholder="Please Write Your Comment" className="p-3 text-black border-2 rounded-sm border-zinc-700" name="" id="" cols="65" rows="4"></textarea> <br />
              <button className="  bg-amber-500 px-7 rounded-sm py-2 mt-2 text-xl">Submit</button>
            </div>
    
            
           </div>
          </div>
        </div>
      </div>
      {/* <div class="hero py-10 pl-[0px]">
        <div class="hero-content  flex-col lg:flex-row ">
        <img src={movie4} className="image-size rounded-lg shadow-2xl" alt="" />
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
            {/* <button className="btn bg-slate-200  text-zinc-900" type="submit">
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
            <input
              type="text"
              placeholder="Please comment here"
              className="input input-bordered input-slate-400 w-full max-w-xs my-3"
            />
            <button
              className="btn  bg-slate-200 text-zinc-900 mx-2"
              type="submit"
            >
              Submit
            </button> */}
      {/* </div>
        </div>
      </div> */}

      {/* <div className="py-5 px-10">
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
      </div> */}
    </div>
  );
};

export default VideoDetail;
