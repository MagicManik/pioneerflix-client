import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import useChannel from '../../../hooks/useChannel';
import useChannels from '../../../hooks/useChannels';

const TvChannel = () => {
    const { id } = useParams();
    const [channel] = useChannel(id);
    const [channels] = useChannels();


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
        <div className="pt-16 bg-black">
            <hr className='line-' />

            <div className="justify-center flex pt-4 ">
                <iframe
                    width="95%"
                    className="mt-1"
                    height="500px"
                    src={channel.channelLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <section className='bg-secondary ' >
                <div className='pb-3 custom-bg'>
                    <div className='bg-primary video-section py-14'>
                        <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                            <h1 className='text-2xl text-secondary bt-6'>You can see more...</h1>
                            <Slider {...settings} className=''>

                                {
                                    channels.map(tv =>

                                        <div key={tv._id}>
                                            <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={tv._id}>
                                                <Link to={`/channel/${tv._id}`}>
                                                    <img className='popular-movie bg-white p-6' src={tv.imgLink} alt="" />
                                                </Link>


                                            </div>

                                        </div>)
                                }
                            </Slider>

                            <h1 className='text-2xl text-secondary text-right bt-6'>You can see more...</h1>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default TvChannel;