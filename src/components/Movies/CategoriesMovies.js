import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const CategoriesMovies = ({ banner1, banner2, banner3, banner4, video }) => {
    const navigate = useNavigate();
    const handlePlay = (id) => {
        navigate(`/play/${id}`)
    }

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
                <div>
                    <img className=" lg:rounded-3xl rounded-none" src={banner1} />
                </div>
                <div>
                    <img className=" lg:rounded-3xl rounded-none" src={banner2} />
                </div>
                <div>
                    <img className=" lg:rounded-3xl rounded-none" src={banner3} />
                </div>
                <div>
                    <img className=" lg:rounded-3xl rounded-none" src={banner4} />
                </div>
            </Slider>

            <div className="w-full pt-12 col-start-1 md:col-start-10 col-end-13">
                {video?.length && (
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                        {video?.map((v) => (
                            <div>
                                <div
                                    key={v?._id}
                                    onClick={() => handlePlay(v?._id)}
                                    className="flex px-3 bg-[#222] cursor-pointer rounded-lg py-3 lg:mx-0 mx-4"
                                >
                                    <img
                                        src={v?.imgLink}
                                        className="h-[80px] rounded-lg w-[100px]"
                                        alt=""
                                    />
                                    <div className="ml-3">
                                        <p className=" text-lg font-semibold ">{v?.title}</p>
                                        <p className="text-sm hover:underline hover:underline-offset-1 duration-500">
                                            {v?.description.slice(0, 50)}....
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default CategoriesMovies