import React from "react";
import MoviesBanner from "../Banner/MoviesBanner";
import { useNavigate } from "react-router-dom";
import LoaderIOS from "../Shared/Loader/LoaderIOS";

const CategoriesMovies = ({ banner1, banner2, banner3, banner4, video }) => {
    const navigate = useNavigate();
    const handlePlay = (id) => {
        navigate(`/play/${id}`)
    }

    const bannerImg = [
        {
            _id: 1,
            banner: banner1
        },
        {
            _id: 2,
            banner: banner2
        },
        {
            _id: 3,
            banner: banner3
        },
        {
            _id: 4,
            banner: banner4
        },
    ]

    return (
        <>
            <MoviesBanner bannerImg={bannerImg} />
            <div className="w-full pt-12 col-start-1 md:col-start-10 col-end-13">
                {video?.length ? (
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
                )
                    :
                    <LoaderIOS pt={16} pb={40} />
                }
            </div>
        </>
    )
}

export default CategoriesMovies