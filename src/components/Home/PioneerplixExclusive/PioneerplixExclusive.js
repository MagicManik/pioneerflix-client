import React from 'react';
import profileKids from '../../../assets/others/exclusive-removebg-preview.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './PioneerplixExclusive.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import useVideos from '../../../hooks/useVideos';
import { useGetAllVideosQuery } from '../../../services/post';
import LoaderIOS from '../../Shared/Loader/LoaderIOS';
import LoaderMagic from '../../Shared/Loader/LoaderMagic';
import LoaderColorfull from '../../Shared/Loader/LoaderColorfull';
import LoaderColorCir from '../../Shared/Loader/LoaderColorCir';
import LoaderHTMLCSS from '../../Shared/Loader/LoaderHTMLCSS';
import LoaderHTMLCSSII from '../../Shared/Loader/LoaderHTMLCSSII';
import LoaderInfinitySpin from '../../Shared/Loader/LoaderInfinitySpin';
import LoaderRotatingLines from '../../Shared/Loader/LoaderRotatingLines';
import LoaderGoogle from '../../Shared/Loader/LoaderGoogle';
import LoaderMicrosoft from '../../Shared/Loader/LoaderMicrosoft';
import LoaderAjax from './LoaderAjax';

const PioneerplixExclusive = () => {


    const { t } = useTranslation(["home"])
    // const [videos] = useVideos();
    const { data: videos, refetch, isLoading } = useGetAllVideosQuery();

    const exclusives = videos?.filter(video => video.category === 'Exclusive Movies');


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

        <section className='bg-primary section-border'>

            <div className={getTheme === 'white' ? 'video-section lg:px-12 md:px-4' : 'video-section px-12'}>
                <h1 className=" text-neutral text-sm lg:text-xl pb-2 lg:pb-3 pt-2 lg:pt-3">{t("EXCLUSIVEMOVIES")}</h1>
                {
                    videos ?
                        <Slider {...settings} className=''>
                            {
                                exclusives?.map(movie =>

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
                        // <LoaderIOS fontSize={"text-4xl"} margin={"mx-auto"} />
                        // <LoaderMagic />
                        <LoaderColorfull />
                    // <LoaderColorCir />
                    // <LoaderHTMLCSS />
                    // <LoaderHTMLCSSII />
                    // <LoaderInfinitySpin />
                    // <LoaderRotatingLines />
                    // <LoaderSquare />
                    // <LoaderGoogle />
                    // <LoaderMicrosoft />
                    // <LoaderAjax />
                }
            </div>

            <div className='bg-primary'>
                <div className='pb-3 wraper'>
                    <div className={getTheme === 'white' ? 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1' : 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1'}>


                        <div className='text-container-left'>
                            <h1 className='pt-3 lg:pt-0 text-xl lg:text-5xl font-semibold heading text-neutral'>{t("WatchAndEnjoyMoreExclusiveVideos")}</h1>
                            <p className='pt-2 text-accent lg:pt-2 lg:text-3xl'>{t("Keep touch on your exclusive videos with your enjoyment —free with your membership")}</p>
                        </div>


                        <div className='our-story-card-animation-container pb-0 lg:pb-10 pt-6 lg:pt-16'>
                            <img className='tv-img block mx-auto rounded-xl ' src={profileKids} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default PioneerplixExclusive;