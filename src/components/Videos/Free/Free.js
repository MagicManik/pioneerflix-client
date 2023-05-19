import React from 'react';
import movie1 from '../../../assets/free-videos/free-video (1).jpg';
import movie2 from '../../../assets/free-videos/free-video (2).jpg';
import movie3 from '../../../assets/free-videos/free-video (3).jpg';
import movie4 from '../../../assets/free-videos/free-video (4).jpg';
import movie5 from '../../../assets/free-videos/free-video (5).jpg';
import movie6 from '../../../assets/free-videos/free-video (6).jpg';
import movie7 from '../../../assets/free-videos/free-video (7).jpg';
import freeVideo from '../../../assets/others/free-video.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Free.css';
import { useTranslation } from 'react-i18next';

const Free = () => {

    const { t } = useTranslation(["home"])

    const popularMovies = [
        {
            _id: 1,
            name: 'Movie 1',
            description: '',
            img: movie1
        },
        {
            _id: 2,
            name: 'Movie 2',
            description: '',
            img: movie2
        },
        {
            _id: 3,
            name: 'Movie 3',
            description: '',
            img: movie3
        },
        {
            _id: 4,
            name: 'Movie 4',
            description: '',
            img: movie4
        },
        {
            _id: 5,
            name: 'Movie 5',
            description: '',
            img: movie5
        },
        {
            _id: 6,
            name: 'Movie 6',
            description: '',
            img: movie6
        },
        {
            _id: 7,
            name: 'Movie 7',
            description: '',
            img: movie7
        }
    ];

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
        <section>

            {/* <div className='video-section px-12'>
                <h1 className="text-black text-sm lg:text-lg pb-2 lg:pb-4 pt-2 lg:pt-3">{t("Pioneerflix Free")}</h1>
                <Slider {...settings} className=''>
                    {
                        popularMovies.map(movie =>

                            <div key={movie._id}>

                                <Link to={`/play/${movie._id}`}>
                                    <div className="bg-white mr-2 lg:mr-5 shadow py-2 lg:py-3 px-2 lg:px-3 rounded-2xl">
                                        <img className='zoom-div-I block mx-auto rounded-lg' src={movie.img} alt="" />
                                    </div>
                                </Link>

                            </div>)
                    }
                </Slider>
            </div>

            <div className='bg-primary'>
                <div className='pb-3 wraper'>
                    <div className='text-container text-accent bg-white grid lg:grid-cols-2 items-center sm:grid-cols-1'>

                        <div className='text-container-left'>
                            <h1 className='pt-3 lg:pt-0 text-xl lg:text-5xl font-semibold heading'>{t("Pioneerflix Free")}</h1>
                            <p className='pt-2 lg:pt-2 lg:text-3xl'>{t("Simply save Your favorite show on your watch list and entertaining to watch")}</p>
                        </div>

                        <div className='our-story-card-animation-container pb-10 lg:pb-20 pt-6 lg:pt-20'>
                            <img className='tv-img rounded-xl ' src={freeVideo} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

        </section >
    );
};

export default Free;