import React from 'react';
import profileKids from '../../../assets/others/profile-kids.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetAllVideosQuery } from '../../../services/post';
import LoaderIOS from '../../Shared/Loader/LoaderIOS';

const Kids = () => {
    const { t } = useTranslation(["home"])
    const { data: videos, refetch, isLoading } = useGetAllVideosQuery();
    const kidsVideos = videos?.filter(video => video.category === 'Kids Video');
    let getTheme = localStorage.getItem("colorTheme");

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <section className='bg-primary section-border'>
            <div className={getTheme === 'white' ? 'video-section lg:px-12 md:px-4' : 'video-section px-12'}>
                <h1 className="text-neutral text-lg lg:text-xl pb-2 lg:pb-3 pt-2 lg:pt-3">{t("KIDSCOLLECTIONS")}</h1>
                {
                    kidsVideos ?
                        <Slider {...settings} className=''>
                            {
                                kidsVideos?.map(movie =>

                                    <div key={movie._id}>

                                        <Link to={`/play/${movie._id}`}>
                                            <div className="mr-2 lg:mr-3 shadow py-2 lg:py-3 px-2 lg:px-0 rounded-2xl lg:pt-5">
                                                <img className='zoom-div-2 block mx-auto rounded-lg' src={movie.imgLink} alt="" />
                                            </div>
                                        </Link>
                                    </div>)
                            }
                        </Slider>
                        :
                        <div className='pt-11'>
                            <LoaderIOS />
                        </div>
                }
            </div>
            <div className='bg-primary'>
                <div className='pb-3 wraper'>
                    <div className={getTheme === 'white' ? 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1' : 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1'}>
                        <div
                            data-aos="zoom-in-right"
                            className='our-story-card-animation-container pb-10 lg:pb-16 pt-6 lg:pt-16'>
                            <img className='tv-img block mx-auto rounded-xl' src={profileKids} alt="" />
                        </div>
                        <div className='text-container-left lg:ml-8 ml-0'>
                            <h1 className='pt-3 lg:pt-0 text-xl lg:text-5xl font-semibold heading text-neutral'>{t("WatchAndEnjoyMoreExclusiveVideos")}</h1>
                            <p className='pt-2 text-accent lg:pt-2 lg:text-3xl'>{t("Keep touch on your exclusive videos with your enjoyment —free with your membership")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Kids;