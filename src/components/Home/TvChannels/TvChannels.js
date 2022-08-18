import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import tv from '../../../assets/others/tv.png';
import useChannels from '../../../hooks/useChannels';
import './TvChannels.css';

const TvChannels = () => {
    const [channels, setChannels] = useChannels()
<<<<<<< HEAD
=======

>>>>>>> 47d9241e57f4f2b136812a500f5bc556e6f82a8e
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
<<<<<<< HEAD
        <section className='bg-secondary '>
            <div className='pb-3  custom-bg'>
           

            <div className='bg-primary video-section'>
                    <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                        <h1 className='text-2xl text-secondary pt-6'>TV CHANNELS</h1>
=======
        <section className='bg-secondary wraper'>
            <div className='pb-3 custom-bg'>

                <div className='bg-primary video-section lg:hidden md:block'>
                    <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                        <h1 className='text-2xl text-secondary pt-6'>TV CHANNELS</h1>

>>>>>>> 47d9241e57f4f2b136812a500f5bc556e6f82a8e
                        <Slider {...settings} className=''>
                            {
                                channels.map(tv =>
                                    <div key={tv._id}>
                                        <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={tv._id}>
                                            <Link to={`/channel/${tv._id}`}>
                                                <img className='popular-movie' src={tv.imgLink} alt="" />
                                            </Link>
                                        </div>
                                    </div>)
                            }
                        </Slider>
<<<<<<< HEAD

=======
>>>>>>> 47d9241e57f4f2b136812a500f5bc556e6f82a8e

                    </div>
                </div>



                <div className='text-container text-secondary bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

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