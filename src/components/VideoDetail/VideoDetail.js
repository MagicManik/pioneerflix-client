import React from "react";
import "./VideoDetail.css";
import movie1 from "../../assets/bangla-movie/movie (1).jpg";
import movie2 from "../../assets/bangla-movie/movie (2).jpg";
import movie3 from "../../assets/bangla-movie/movie (3).jpg";
import movie4 from "../../assets/bangla-movie/movie (4).jpg";
import { FaRegThumbsUp,FaEllipsisH ,FaComment} from "react-icons/fa";

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
    }
   
  ];
  const fakeComment=[
    {
      name:'Shihab',
    comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
    },
    {
      name:'Manik',
    comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name:'Barik',
    comment:" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
  ]
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

      <div className="grid  grid-cols-6  py-8">
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
     
<div className="grid  grid-cols-6 gap-5  ">
<div className="w-[350px]  col-start-1  col-end-3 ">
<div className="text-white" >
  <button className="bg-amber-500 py-3 px-6 ">Add To My List</button>
  <button className="border-2 border-amber-500 py-2 ml-2 px-6">Share</button>
  <button className="border-2 border-amber-500 py-3 ml-2 px-6"><FaEllipsisH/></button>
</div>
</div>
<div className="   col-start-3 w-full  col-end-12 ">
<div className=" text-white">
        <div className=" video-container">
          <h1 className="text-4xl mb-4  font-medium">
            You May Also Like
          </h1>
          <div className="grid lg:grid-cols-3 gap-4 ">
            {popularMovies.map((movie) => (
              <div className="zoom-div" key={movie._id}>
                <img className="w-[300px] h-[400px]  border-[1px] border-white " src={movie.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
</div>
</div>

{/* comment section */}
<hr className="mt-6 mb-4 text-zinc-500" />
<div className="text-white grid grid-cols-3 py-10 gap-5">
{
 fakeComment.map(c=><>
 <div>
 <div className="flex  items-center text-xl font-semibold"> <FaComment className="mr-2 text-amber-500"/>{c.name}</div>
 <p className="ml-7 text-sm">{c.comment}</p>
 </div>

 
 </>) 
}
</div>

    </div>
  );
};

export default VideoDetail;
