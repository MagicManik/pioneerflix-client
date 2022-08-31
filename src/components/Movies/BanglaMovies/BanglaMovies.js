import React from 'react';
import { useTranslation } from 'react-i18next';
import useVideos from '../../../hooks/useVideos';
// import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../../../assets/banner/bangla/banner (18).jpg';
import banner2 from '../../../assets/banner/bangla/banner (18).jpg';
import banner3 from '../../../assets/banner/bangla/banner (18).jpg';
import './BanglaMovies.css';

const BanglaMovies = () => {

    const [videos] = useVideos();
    const { t } = useTranslation(["home"])

    let getTheme = localStorage.getItem("colorTheme");

    const banglaMovies = videos.filter(video => video.category === "Bangla Movie");


    const banners = [
        banner1,
        banner2,
        banner3
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (

        <div className='bangla-movie-section'>

            <div className='bangla-movie-menu-bar'>

                {/* <img src={videos[0].imgLink} alt="" /> */}

                <div className="bangla-movie-menu-">
                    <p>Home</p>
                    <p>Movies</p>
                    <p>TV Shows</p>
                    <p>Series</p>
                    <p>Favourites</p>
                    <p>Account</p>
                    <p>Subscription</p>
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
            </div>

            <div><span className="divider-line"></span></div>

            <div className='bangla-movie-container'>

                {/* <div className='search-video'>
                        <img src="images/700PIrates.jpg" alt="" />
                    </div> */}

                <div>

                    <h2>Trending Movies</h2>
                    {/* <div className="movie-list">
                            {
                                banglaMovies.map(banglaMovie =>
                                    <div>
                                        <img src={banglaMovie.imgLink} alt="" />
                                    </div>)
                            }

                        </div> */}
                </div>

            </div>

        </div>
    );
};

export default BanglaMovies;