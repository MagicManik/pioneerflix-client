import React from 'react';
import movie1 from '../../../assets/bangla-movie/movie (1).jpg';
import movie2 from '../../../assets/bangla-movie/movie (2).jpg';
import movie3 from '../../../assets/bangla-movie/movie (3).jpg';
import movie4 from '../../../assets/bangla-movie/movie (4).jpg';
import movie5 from '../../../assets/bangla-movie/movie (5).jpg';
import movie6 from '../../../assets/bangla-movie/movie (6).jpg';
import offlineWatch from '../../../assets/others/watch-off.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './MostPopular.css';
import useVideos from '../../../hooks/useVideos';

const MostPopular = () => {

    const [videos, setVideos] = useVideos();

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
            _id: 6,
            name: 'Movie 6',
            description: '',
            img: movie6
        },
        {
            _id: 6,
            name: 'Movie 6',
            description: '',
            img: movie6
        },
        {
            _id: 6,
            name: 'Movie 6',
            description: '',
            img: movie6
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
        <section className=' text-secondary'>
            <div className='pb-3 custom-bg'>

                <div className='bg-primary pl-5 video-container-II'>
                    <h1 className='text-2xl pt-6'>POPULAR MOVIES</h1>

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
                            <h1 className='text-5xl font-bold '>Enjoy Most Popular Movies All Times.</h1>
                            <br />
                            <p className='text-2xl'>Watch movies, be happy, and smile from the bottom of your heart.</p>
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