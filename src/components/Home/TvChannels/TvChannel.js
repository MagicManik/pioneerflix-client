import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import useChannel from '../../../hooks/useChannel';
import useChannels from '../../../hooks/useChannels';

const TvChannel = () => {
    const { id } = useParams();
    const [channel, setChannel] = useChannel(id);
    const [channels, setChannels] = useChannels();


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
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
        <div className="">
            <div className="justify-center flex  ">
                <iframe
                    className="rounded-sm h-full md:h-[700px] md:p-1 shadow-2xl border-2 border-zinc-700 "
                    width="100%"
                    src={channel.channelLink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <section className='bg-secondary'>
            <div className='pb-3 custom-bg'>
                <div className='bg-primary video-section'>
                    <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                        <h1 className='text-2xl text-secondary pt-6'>TV CHANNELS</h1>
                        {/* <div className='grid lg:grid-cols-8 gap-4 popular-movie-section'> */}
                        <Slider {...settings} className=''>

                            {/* {
                                popularMovies.map(movie =>

                                    <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={movie._id}>

                                        <a href={movie.link} target="_blank"><img className='popular-movie' src={movie.img} alt="" /></a>
                                    </div>)
                            } */}
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
                        {/* </div> */}


                    </div>
                </div>


                
            </div>
        </section>
        </div>
    );
};

export default TvChannel;