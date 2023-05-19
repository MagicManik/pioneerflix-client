import React, { useEffect, useState } from "react";
import banner1 from "../../../assets/banner/english/banner 01.jpg";
import banner2 from "../../../assets/banner/english/banner 02.jpg";
import banner3 from "../../../assets/banner/english/banner 03.jpg";
import banner4 from "../../../assets/banner/english/banner 04.jpg";
import { useGetAllVideosQuery } from "../../../services/post";
import CategoriesMovies from "../../../components/CategoriesMovies/CategoriesMovies";

const English = () => {
    const { data: videos, refetch, isLoading } = useGetAllVideosQuery();
    const [video, setVideo] = useState({});

    useEffect(() => {
        if (videos?.length) {
            const remaining = videos?.filter(
                (v) => v?.category === "Exclusive Movies"
            );
            setVideo(remaining);
        }
    }, [videos]);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="bg-black lg:pt-24 pt-3">
            <div className=" lg:w-9/12 w-full mx-auto">
                <CategoriesMovies
                    banner1={banner1}
                    banner2={banner2}
                    banner3={banner3}
                    banner4={banner4}
                    video={video}
                />
            </div>
        </section>
    );
}

export default English;