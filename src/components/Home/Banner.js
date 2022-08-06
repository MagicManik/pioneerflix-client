import React from "react";
import banner1 from "../../assets/banner/banner (10).jpg";
import banner2 from "../../assets/banner/banner (13).jpg";
import banner3 from "../../assets/banner/banner (14).jpg";
import banner4 from "../../assets/banner/banner (15).jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full banner-container">
      <div id="slide1" className="carousel-item relative w-full">
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
  );
};

export default Banner;
