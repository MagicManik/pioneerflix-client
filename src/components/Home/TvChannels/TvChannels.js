import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import movie1 from '../../../assets/tvchannels/tv-chaneel1.png';
import movie2 from '../../../assets/tvchannels/tv-chaneel2.png';
import movie3 from '../../../assets/tvchannels/tv-chaneel3.png';
import movie4 from '../../../assets/tvchannels/tv-chaneel4.png';
import movie5 from '../../../assets/tvchannels/tv-chaneel5.png';
import movie6 from '../../../assets/tvchannels/tv-chaneel6.png';
import movie7 from '../../../assets/tvchannels/tv-chaneel7.png';
import movie8 from '../../../assets/tvchannels/tv-chaneel8.png';
import movie9 from '../../../assets/tvchannels/tv-chaneel9.png';
import movie10 from '../../../assets/tvchannels/tv-chaneel10.png';
import movie11 from '../../../assets/tvchannels/tv-chaneel11.png';
import movie12 from '../../../assets/tvchannels/tv-chaneel12.png';
import movie13 from '../../../assets/tvchannels/tv-chaneel13.png';
import movie14 from '../../../assets/tvchannels/tv-chaneel14.png';
import movie15 from '../../../assets/tvchannels/tv-chaneel15.png';
import movie16 from '../../../assets/tvchannels/tv-chaneel16.png';
import movie17 from '../../../assets/tvchannels/tv-chaneel17.png';
import movie18 from '../../../assets/tvchannels/tv-chaneel18.png';
import movie19 from '../../../assets/tvchannels/tv-chaneel19.png';
import movie20 from '../../../assets/tvchannels/tv-chaneel20.png';
import tv from '../../../assets/others/tv.png';
import useChannels from '../../../hooks/useChannels';
import './TvChannels.css';

const TvChannels = () => {

      //<-------------multiple Language ----------->
  const {  t } = useTranslation(["home"]);
 

    const [channels, setChannels] = useChannels()

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 9,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 4.2,
                    slidesToScroll: 4
                }
            }
        ]
    };


    return (
        <section className='bg-secondary wraper'>
            <div className='pb-3 custom-bg'>

                <div className='bg-primary video-section lg:hidden md:block'>
                    <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                        <h1 className='text-2xl text-secondary pt-6'>{t("TVCHANNELS")}</h1>
                        {/* <div className='grid lg:grid-cols-8 gap-4 popular-movie-section'> */}
                        <h1 className='text-2xl text-secondary pt-6'>TV CHANNELS</h1>

                        <Slider {...settings} className=''>
                            {
                                channels.map(tv =>
                                    <div key={tv._id}>
                                        <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={tv._id}>
                                            <Link to={`/channel/${tv._id}`}>
                                                <img className='popular-movie' src={tv.imgLink} alt="" />
                                            </Link>
                                        </div>
                                    </div>)
                            }
                        </Slider>

                    </div>
                </div>


                <div className='text-container text-secondary bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                    <div className='text-container-left'>
                        <h1 className='text-5xl font-bold '>{t("WatchyourTVChannels")}</h1>
                        <p className=' text-2xl'>{t("WatchyourfavoritechannelsonPioneerFlixwebsite")}</p>
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