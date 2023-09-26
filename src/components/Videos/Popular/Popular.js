import React from 'react';
import offlineWatch from '../../../assets/others/watch-off-3.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Popular.css';
import { useTranslation } from 'react-i18next';
import { useGetAllVideosQuery } from '../../../services/post';
import LoaderIOS from '../../Shared/Loader/LoaderIOS';

const Popular = () => {
    const { data } = useGetAllVideosQuery();
    const { t } = useTranslation(["home"])
    let getTheme = localStorage.getItem("colorTheme");
    const mostPopularVideos = data?.filter(video => video?.category === "Bangla Movie");

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <section className='bg-primary section-border'>
            <div className='mx-auto max-w-[1440px]'>
                <div className={getTheme === 'white' ? 'video-section lg:px-12 md:px-4' : 'video-section px-12'}>
                    <h1 className="text-neutral text-lg lg:text-xl pb-3 lg:pb-7 pt-3 lg:pt-3">{t("POPULARMOVIES")}</h1>
                    {
                        mostPopularVideos ?
                            <Slider {...settings} className=''>
                                {mostPopularVideos.map(movie =>
                                    <div key={movie._id}>

                                        <Link to={`/play/${movie._id}`}>
                                            <div className="bg-white mr-2 lg:mr-5 shadow py-2 lg:py-3 px-2 lg:px-3 rounded-2xl">
                                                <img className='zoom-div-I block mx-auto rounded-lg' src={movie.imgLink} alt="" />
                                            </div>
                                        </Link>

                                    </div>)
                                }
                            </Slider>
                            :
                            <div className='mt-10'>
                                <LoaderIOS />
                            </div>
                    }
                </div>
                <div className='bg-primary'>
                    <div className='lg:pt-16 pt-8 wraper'>
                        <div className={getTheme === 'white' ? 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1' : 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1'}>
                            <div
                                data-aos="zoom-in-right"
                                className='our-story-card-animation-container pt-0 lg:pt-10 pb-10'>
                                <img className='tv-img lg:w-auto w-3/5 block mx-auto rounded-xl' src={offlineWatch} alt="" />
                            </div>

                            <div className='text-container-left mt-0 lg:-mt-16'>
                                <h1 className='pt-3 lg:pt-0 text-xl lg:text-5xl font-semibold heading text-neutral'>{t("EnjoyMostPopularMoviesAllTimes")}</h1>
                                <p className='pt-2 text-accent lg:pt-2 lg:text-3xl'>{t("Watchmovies,behappy,andsmilefromthebottomofyourheart")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Popular;