import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tv from '../../../assets/others/tv.png';
import './TvChannels.css';
import { useTranslation } from 'react-i18next';

const TvChannels = () => {

    const { t } = useTranslation(["home"])
    const getTheme = localStorage.getItem("theme");

    return (
        <section className={getTheme === 'dark' ? 'bg-white section-border' : 'bg-black section-border'}>
            <div className='pb-3 wraper'>
                <div className={getTheme === 'dark' ? 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1' : 'text-container text-accent grid lg:grid-cols-2 items-center sm:grid-cols-1'}>

                    <div className='text-container-left pt-5 lg:pt-0 mt-0 lg:-mt-24'>
                        <h1 className='pt-3 lg:pt-0 text-xl lg:text-5xl font-semibold heading text-neutral'>{t("WatchyourTVChannels")}</h1>
                        <p className='pt-2 text-accent lg:pt-2 lg:text-3xl'>{t("WatchyourfavoritechannelsonPioneerFlixwebsite")}</p>
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