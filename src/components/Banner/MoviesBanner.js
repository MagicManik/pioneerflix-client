import React from 'react'
import Slider from "react-slick";

const MoviesBanner = ({ bannerImg }) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {
                    bannerImg.map((img) => (
                        <div key={img._id}>
                            <img className=" lg:rounded-3xl rounded-none" src={img.banner} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </>
    )
}

export default MoviesBanner