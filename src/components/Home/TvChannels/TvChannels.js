import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import tv from '../../../assets/others/tv.png';
import useChannels from '../../../hooks/useChannels';
import './TvChannels.css';

const TvChannels = () => {

    const [channels] = useChannels();

    const getTheme = localStorage.getItem("colorTheme");

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
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
                    slidesToShow: 6,
                    slidesToScroll: 6,
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
        <section className='bg-primary'>
            <div className='pb-3 wraper custom-bg'>

                <div className='bg-white video-section pb-5 lg:hidden md:block'>
                    <div className='bg-white lg:px-20 sm:px-4 video-container'>
                        <h1 className='text-1xl text-secondary py-3'>TV CHANNELS</h1>
                        <Slider {...settings} className=''>
                            {
                                channels.map(tv =>
                                    <div key={tv._id}>
                                        <div className='zoom-div-I video-div' key={tv._id}>
                                            <Link to={`/channel/${tv._id}`}>
                                                <div className="bg-white p-3 rounded-2xl shadow-lg">
                                                    <img className='popular-movie' src={tv.imgLink} alt="" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>)
                            }
                        </Slider>

                    </div>
                </div>


                <div className={getTheme === 'white' ? 'text-container text-secondary bg-black grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1' : 'text-container text-secondary bg-white grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'}>

                    <div className='text-container-left'>
                        <h1 className='text-5xl font-bold '>Watch your TV Channels.</h1>
                        <p className=' text-2xl'>Watch your favorite channels on PioneerFlix website.</p>
                    </div>

                    <div className='our-story-card-animation-container pb-20'>
                        <img className='tv-img rounded-xl ' src={tv} alt="" />

                        <div className='our-story-card-animation' data-uia="our-story-card-animation">

                            <video className='our-story-card-video'

                                data-uia="our-story-card-video" autoPlay playsInline muted loop>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4' />

                            </video>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TvChannels;