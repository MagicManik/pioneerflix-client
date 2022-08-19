import React from 'react';
import offlineWatch from '../../../assets/others/watch-off.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import useVideos from '../../../hooks/useVideos';
import { useTranslation } from 'react-i18next';
import './MostPopular.css';

const MostPopular = () => {

    const { t } = useTranslation(["home"]);

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
                    <h1 className='text-2xl pt-6'>{t("POPULARMOVIES")}</h1>

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


                    <div className='bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                        <div className='text-container-left-2 pb-10'>
                            <h1 className='text-5xl font-bold '>{t("EnjoyMostPopularMoviesAllTimes")}</h1>
                            <br />
                            <p className='text-2xl'>{t("Watchmovies,behappy,andsmilefromthebottomofyourheart")}</p>
                        </div>

                        <div className='pb-10'>
                            <img className='rounded-2xl' src={offlineWatch} alt="" />
                        </div>
                    </div>
                </div >
            </div>
        </section >
    );
};

export default MostPopular;