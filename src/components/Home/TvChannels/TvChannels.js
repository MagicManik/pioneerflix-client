import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tv from '../../../assets/others/tv.png';
import './TvChannels.css';
import { useTranslation } from 'react-i18next';

const TvChannels = () => {

    const getTheme = localStorage.getItem("colorTheme");

    const { t } = useTranslation(["home"])

    return (
        <section className='bg-primary'>
            <div className='pb-3 wraper'>
                <div className={getTheme === 'white' ? 'text-container text-secondary bg-black grid lg:grid-cols-2 items-center sm:grid-cols-1' : 'text-container text-secondary bg-white grid lg:grid-cols-2 items-center sm:grid-cols-1'}>

                    <div className='text-container-left'>
                        <h1 className='pt-3 lg:pt-0 text-xl lg:text-5xl font-semibold heading'>{t("WatchyourTVChannels")}</h1>
                        <p className='pt-2 lg:pt-2 lg:text-3xl'>{t("WatchyourfavoritechannelsonPioneerFlixwebsite")}</p>
                    </div>

                    <div className='our-story-card-animation-container pb-20'>
                        <img className='tv-img rounded-xl ' src={tv} alt="" />

                        <div className='our-story-card-animation' data-uia="our-story-card-animation">

                            <video className='our-story-card-video'

                                data-uia="our-story-card-video" autoPlay playsInline muted loop>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4' />

                            </video>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TvChannels;