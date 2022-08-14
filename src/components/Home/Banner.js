import React from "react";
import banner1 from "../../assets/banner/banner (10).jpg";
import banner2 from "../../assets/banner/banner (13).jpg";
import banner3 from "../../assets/banner/banner (14).jpg";
import banner4 from "../../assets/banner/banner (15).jpg";
// import './TvChannels/TvChannels.css'

// import Slider from "react-slick";
// import movie1 from "../../assets/tvchannels/tv-chaneel1.png";
// import movie2 from "../../assets/tvchannels/tv-chaneel2.png";
// import movie3 from "../../assets/tvchannels/tv-chaneel3.png";
// import movie4 from "../../assets/tvchannels/tv-chaneel4.png";
// import movie5 from "../../assets/tvchannels/tv-chaneel5.png";
// import movie6 from "../../assets/tvchannels/tv-chaneel6.png";
// import movie7 from "../../assets/tvchannels/tv-chaneel7.png";
// import movie8 from "../../assets/tvchannels/tv-chaneel8.png";
// import movie9 from "../../assets/tvchannels/tv-chaneel9.png";
// import movie10 from "../../assets/tvchannels/tv-chaneel10.png";
// import movie11 from "../../assets/tvchannels/tv-chaneel11.png";
// import movie12 from "../../assets/tvchannels/tv-chaneel12.png";
// import movie13 from "../../assets/tvchannels/tv-chaneel13.png";
// import movie14 from "../../assets/tvchannels/tv-chaneel14.png";
// import movie15 from "../../assets/tvchannels/tv-chaneel15.png";
// import movie16 from "../../assets/tvchannels/tv-chaneel16.png";
// import movie17 from "../../assets/tvchannels/tv-chaneel17.png";
// import movie18 from "../../assets/tvchannels/tv-chaneel18.png";
// import movie19 from "../../assets/tvchannels/tv-chaneel19.png";
// import movie20 from "../../assets/tvchannels/tv-chaneel20.png";

import "./Banner.css";

const Banner = () => {
  // const popularMovies = [
  //   {
  //     _id: 1,
  //     name: "Movie1",
  //     description: "",
  //     img: movie1,
  //     link: "https://www.jagobd.com/jamunatv",
  //   },
  //   {
  //     _id: 2,
  //     name: "Movie2",
  //     description: "",
  //     img: movie2,
  //     link: "https://www.jagobd.com/independent",
  //   },
  //   {
  //     _id: 3,
  //     name: "Movie3",
  //     description: "",
  //     img: movie3,
  //     link: "https://jagobd.com/boishakhitv",
  //   },
  //   {
  //     _id: 4,
  //     name: "Movie4",
  //     description: "",
  //     img: movie4,
  //     link: "https://www.yupptv.com/channels/colors-bangla/live",
  //   },
  //   {
  //     _id: 5,
  //     name: "Movie5",
  //     description: "",
  //     img: movie5,
  //     link: "https://jagobd.com/channeli",
  //   },
  //   {
  //     _id: 6,
  //     name: "Movie6",
  //     description: "",
  //     img: movie6,
  //     link: "https://jagobd.com/rtv",
  //   },
  //   {
  //     _id: 7,
  //     name: "Movie7",
  //     description: "",
  //     img: movie7,
  //     link: "https://jagobd.com/atn-bangla",
  //   },
  //   {
  //     _id: 8,
  //     name: "Movie8",
  //     description: "",
  //     img: movie8,
  //     link: "https://jagobd.com/banglavision",
  //   },
  //   {
  //     _id: 9,
  //     name: "Movie9",
  //     description: "",
  //     img: movie9,
  //     link: "https://jagobd.com/somoynews",
  //   },
  //   {
  //     _id: 10,
  //     name: "Movie10",
  //     description: "",
  //     img: movie10,
  //     link: "https://jagobd.com/dbcnews",
  //   },
  //   {
  //     _id: 11,
  //     name: "Movie11",
  //     description: "",
  //     img: movie11,
  //     link: "https://www.satv.tv/live/",
  //   },
  //   {
  //     _id: 12,
  //     name: "Movie12",
  //     description: "",
  //     img: movie12,
  //     link: "https://jagobd.com/channel24",
  //   },
  //   {
  //     _id: 13,
  //     name: "Movie13",
  //     description: "",
  //     img: movie13,
  //     link: "https://jagobd.com/anandatv",
  //   },
  //   {
  //     _id: 14,
  //     name: "Movie14",
  //     description: "",
  //     img: movie14,
  //     link: "https://jagobd.com/news24tv",
  //   },
  //   {
  //     _id: 15,
  //     name: "Movie15",
  //     description: "",
  //     img: movie15,
  //     link: "https://jagobd.com/btvworld",
  //   },
  //   {
  //     _id: 16,
  //     name: "Movie16",
  //     description: "",
  //     img: movie16,
  //     link: "https://jagobd.com/asian",
  //   },
  //   {
  //     _id: 17,
  //     name: "Movie17",
  //     description: "",
  //     img: movie17,
  //     link: "https://jagobd.com/bijoytv",
  //   },
  //   {
  //     _id: 18,
  //     name: "Movie18",
  //     description: "",
  //     img: movie18,
  //     link: "https://jagobd.com/deshtv",
  //   },
  //   {
  //     _id: 19,
  //     name: "Movie19",
  //     description: "",
  //     img: movie19,
  //     link: "https://jagobd.com/makkahlive",
  //   },
  //   {
  //     _id: 20,
  //     name: "Movie20",
  //     description: "",
  //     img: movie20,
  //     link: "https://jagobd.com/madinalive",
  //   },
  // ];

  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 8,
  //   slidesToScroll: 8,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 6,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         slidesToShow: 4.2,
  //         slidesToScroll: 4,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
    <div>
      <div className="relative ">
        <div className="carousel w-full  z-10 banner-container">
          <div id="slide1" className="carousel-item  w-full">
            <img src={banner1} className="banner-img" alt="banner1" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={banner2} className="banner-img" alt="banner-2" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={banner3} className="banner-img" alt="banner-3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={banner4} className="banner-img" alt="banner-4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle bg-transparent">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-transparent">
                ❯
              </a>
            </div>
          </div>
        </div>

        
      
      {/* <div className=" absolute bottom-0 w-full bg-gradient-to-bt from-primary to-primary bg-primary left-0 video-section">
          <div className=" lg:px-20 sm:px-4 video-container">
            <h1 className="text-2xl text-secondary pt-6">TV CHANNELS</h1>
            <div className=' popular-movie-section'>
            <Slider {...settings} className="">
              {popularMovies.map((movie) => (
                <div
                  className="zoom-div-I   pb-2 pl-2 pt-6 pr-4 video-div"
                  key={movie._id}
                >
                  <a href={movie.link} target="_blank">
                    <img className="video-div shadow-xl rounded-lg bg-white p-8  " src={movie.img} alt="" />
                  </a>
                </div>
              ))}
            </Slider>
            </div>
          </div>
        </div> */}


        </div>
        </div>
    </>
  );
};

export default Banner;
