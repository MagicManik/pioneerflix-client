import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import freeVideo from '../../../assets/others/free-video.jpg';
import { useGetAllVideosQuery } from '../../../services/post';
import LoaderIOS from '../../Shared/Loader/LoaderIOS';

const WebSeries = () => {
    const { t } = useTranslation(["home"])
    const { data: videos, refetch, isLoading } = useGetAllVideosQuery();
    const popularWebSeries = videos?.filter(video => video.category === 'Popular Web Series');

    let getTheme = localStorage.getItem("colorTheme");

    var settings = {
        dots: false,
        infinite: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <section className='bg-primary section-border'>
            <div className={getTheme === 'white' ? 'video-section lg:px-12 md:px-4' : 'video-section px-12'}>
                <h1 className={"text-neutral text-lg lg:text-xl pb-3 lg:pb-4 pt-3 lg:pt-3"}>{t("POPULARWEBSERIES")}</h1>
                {
                    popularWebSeries ?

                        <Slider {...settings} className=''>
                            {
                                popularWebSeries?.map(movie =>

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
                        <div className='lg:pb-0 pb-8 pt-9'>
                            <LoaderIOS />
                        </div>
                }
            </div>
            <div className='bg-primary'>
                <div className='pb-3 wraper'>
                    <div className={'text-container text-neutral grid lg:grid-cols-2 items-center sm:grid-cols-1'}>
                        <div className='text-container-left'>
                            <h1 className='pt-3 lg:pt-0 text-xl lg:text-5xl font-semibold heading text-neutral'>{t("Have fun to watch with your web series")}</h1>
                            <p className='pt-2 lg:pt-2 lg:text-3xl text-accent'>{t("Simply save Your favorite show on your watch list and entertaining to watch")}</p>
                        </div>
                        <div
                            data-aos="zoom-in-left"
                            className='our-story-card-animation-container pb-10 lg:pb-20 pt-10 lg:pt-28'>
                            <img className='tv-img w-4/5 rounded-xl' src={freeVideo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default WebSeries;