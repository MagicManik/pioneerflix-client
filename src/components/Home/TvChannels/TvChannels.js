import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

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
import './TvChannels.css';
import useChannels from '../../../hooks/useChannels';

const TvChannels = () => {

    const [channels, setChannels] = useChannels()

    const popularMovies = [
        {
            _id: 1,
            name: 'Movie1',
            description: '',
            img: movie1,
            link: 'https://www.jagobd.com/jamunatv',
        },
        {
            _id: 2,
            name: 'Movie2',
            description: '',
            img: movie2,
            link: 'https://www.jagobd.com/independent'

        },
        {
            _id: 3,
            name: 'Movie3',
            description: '',
            img: movie3,
            link: 'https://jagobd.com/boishakhitv'
        },
        {
            _id: 4,
            name: 'Movie4',
            description: '',
            img: movie4,
            link: 'https://www.yupptv.com/channels/colors-bangla/live'
        },
        {
            _id: 5,
            name: 'Movie5',
            description: '',
            img: movie5,
            link: 'https://jagobd.com/channeli'
        },
        {
            _id: 6,
            name: 'Movie6',
            description: '',
            img: movie6,
            link: 'https://jagobd.com/rtv'
        },
        {
            _id: 7,
            name: 'Movie7',
            description: '',
            img: movie7,
            link: 'https://jagobd.com/atn-bangla'
        },
        {
            _id: 8,
            name: 'Movie8',
            description: '',
            img: movie8,
            link: 'https://jagobd.com/banglavision'
        },
        {
            _id: 9,
            name: 'Movie9',
            description: '',
            img: movie9,
            link: 'https://jagobd.com/somoynews'
        },
        {
            _id: 10,
            name: 'Movie10',
            description: '',
            img: movie10,
            link: 'https://jagobd.com/dbcnews'
        },
        {
            _id: 11,
            name: 'Movie11',
            description: '',
            img: movie11,
            link: 'https://www.satv.tv/live/'
        },
        {
            _id: 12,
            name: 'Movie12',
            description: '',
            img: movie12,
            link: 'https://jagobd.com/channel24'
        },
        {
            _id: 13,
            name: 'Movie13',
            description: '',
            img: movie13,
            link: 'https://jagobd.com/anandatv'
        },
        {
            _id: 14,
            name: 'Movie14',
            description: '',
            img: movie14,
            link: 'https://jagobd.com/news24tv'
        },
        {
            _id: 15,
            name: 'Movie15',
            description: '',
            img: movie15,
            link: 'https://jagobd.com/btvworld'
        },
        {
            _id: 16,
            name: 'Movie16',
            description: '',
            img: movie16,
            link: 'https://jagobd.com/asian'
        },
        {
            _id: 17,
            name: 'Movie17',
            description: '',
            img: movie17,
            link: 'https://jagobd.com/bijoytv'
        },
        {
            _id: 18,
            name: 'Movie18',
            description: '',
            img: movie18,
            link: 'https://jagobd.com/deshtv'
        },
        {
            _id: 19,
            name: 'Movie19',
            description: '',
            img: movie19,
            link: 'https://jagobd.com/makkahlive'
        },
        {
            _id: 20,
            name: 'Movie20',
            description: '',
            img: movie20,
            link: 'https://jagobd.com/madinalive'
        },

    ];

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <section className='bg-secondary'>
            <div className='pb-3 custom-bg'>
                <div className='bg-primary video-section'>
                    <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                        <h1 className='text-2xl text-secondary pt-6'>TV CHANNELS</h1>
                        {/* <div className='grid lg:grid-cols-8 gap-4 popular-movie-section'> */}
                        <Slider {...settings} className=''>

                            {/* {
                                popularMovies.map(movie =>

                                    <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={movie._id}>

                                        <a href={movie.link} target="_blank"><img className='popular-movie' src={movie.img} alt="" /></a>
                                    </div>)
                            } */}
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
                        {/* </div> */}


                    </div>
                </div>


                <div className='text-container text-secondary bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                    <div className='text-container-left'>
                        <h1 className='text-5xl font-bold '>Enjoy on your TV.</h1>
                        <p className=' text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
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