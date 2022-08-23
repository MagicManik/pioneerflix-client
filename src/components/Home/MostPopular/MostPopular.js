import React from 'react';
import offlineWatch from '../../../assets/others/watch-off.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import useVideos from '../../../hooks/useVideos';
import './MostPopular.css';

const MostPopular = () => {

    const [videos, setVideos] = useVideos();

    // console.log(videos);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                    slidesToShow: 2.2,
                    slidesToScroll: 2
                }
            }
        ]
    };


    return (
        <section className=' text-secondary'>
            <div className='pb-3 custom-bg'>

                <div className='bg-primary pl-5 video-container-II'>
                    <h1 className='text-2xl pt-6'>POPULAR MOVIES</h1>

                    <div className='pb-10'>
                        <Slider {...settings}>

                            {
                                videos.map(video =>

                                    <div key={video._id}>
                                        <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={video._id}>
                                            <Link to={`/play/${video._id}`}>
                                                <img className='popular-movie' src={video.imgLink} alt="" />
                                            </Link>


                                        </div>

                                    </div>)
                            }

                        </Slider>
                    </div >
                    <i className="fa fal fa-angle-double-down"></i>
                </div >

                <div className='text-container text-secondary bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                    <div className='text-container-right'>
                        <h1 className='text-5xl font-bold '>Enjoy Most Popular Movies All Times.</h1>
                        <p className=' text-2xl pr-3'>Watch movies, be happy, and smile from the bottom of your heart.</p>
                    </div>

                    <div className='our-story-card-animation-container pb-16'>
                        <img className='tv-img' src={offlineWatch} alt="" />

                        <div className='our-story-card-animation' data-uia="our-story-card-animation">

                            <video className='our-story-card-video'

                                data-uia="our-story-card-video" autoPlay playsInline muted loop>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4' />

                            </video>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default MostPopular;