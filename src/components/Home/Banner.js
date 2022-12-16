import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import banner2 from "../../assets/banner/banner (13).jpg";
import banner3 from "../../assets/banner/banner (14).jpg";
import banner4 from "../../assets/banner/banner (15).jpg";
import banner5 from "../../assets/banner/banner (20).jpg";
import useChannels from "../../hooks/useChannels";
import { useTranslation } from "react-i18next";

import "./Banner.css";
import LoaderColorfull from "../Shared/Loader/LoaderColorfull";
import LoaderDNA from "../Shared/Loader/LoaderDNA";
import LoaderIOS from "../Shared/Loader/LoaderIOS";

const Banner = () => {

  const { t } = useTranslation(["home"])
  const [channels] = useChannels();

  let getTheme = localStorage.getItem("theme");

  // console.log(getTheme)

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9.5,
    slidesToScroll: 9,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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

    <section className="relative md-static">
      <div className="carousel w-full  z-10 banner-container">

        <div id="slide1" className="carousel-item  w-full">

          <img src={banner5} className="banner-img" alt="banner1" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px]">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px] ">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="banner-img" alt="banner-2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px]">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px]">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="banner-img" alt="banner-3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px]">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px]">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="banner-img" alt="banner-4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px]">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent hidden lg:block w-18 p-[17px]">
              ❯
            </a>
          </div>
        </div>

      </div>


      {/* Tv Channels */}
      <div className={getTheme === 'dark' ? 'lg:absolute tv-chanels-container bottom-0 w-full video-section lg:px-12 md:px-4' : 'lg:absolute tv-chanels-container-dark bottom-0 w-full video-section px-12'}>
        <h1 className="text-black lg:text-white text-sm lg:text-xl pb-2 lg:pb-7 pt-2 lg:pt-0">{t("TVCHANNELS")}</h1>

        {channels.length === 0 ?
          // <LoaderColorfull />
          <LoaderIOS />
          :
          <Slider {...settings} className=''>
            {
              channels?.map(tv =>

                <div key={tv._id}>

                  <Link to={`/channel/${tv._id}`}>
                    <div className="bg-white mr-2 lg:mr-5 shadow py-2 lg:py-3 px-2 lg:px-3 rounded-2xl">
                      <img className='zoom-div-I block mx-auto rounded-lg' src={tv.imgLink} alt="" />
                    </div>
                  </Link>

                </div>)
            }
          </Slider>
        }

      </div>

    </section>
  );
};

export default Banner;
