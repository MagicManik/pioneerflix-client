import React from 'react';
import movie1 from '../../../assets/exclusive-videos/exclusive (1).jpg';
import movie2 from '../../../assets/exclusive-videos/exclusive (2).jpg';
import movie3 from '../../../assets/exclusive-videos/exclusive (3).jpg';
import movie4 from '../../../assets/exclusive-videos/exclusive (4).jpg';
import movie5 from '../../../assets/exclusive-videos/exclusive (5).jpg';
import movie6 from '../../../assets/exclusive-videos/exclusive (6).jpg';
import movie7 from '../../../assets/exclusive-videos/exclusive (7).jpg';
import movie8 from '../../../assets/exclusive-videos/exclusive (8).jpg';
import profileKids from '../../../assets/others/exclusive-removebg-preview.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './PioneerplixExclusive.css';

const PioneerplixExclusive = () => {

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
        },
        {
            _id: 8,
            name: 'Movie 8',
            description: '',
            img: movie8
        },
        {
            _id: 9,
            name: 'Movie 8',
            description: '',
            img: movie8
        },
        {
            _id: 10,
            name: 'Movie 8',
            description: '',
            img: movie8
        },
        {
            _id: 11,
            name: 'Movie 8',
            description: '',
            img: movie8
        },
        {
            _id: 21,
            name: 'Movie 8',
            description: '',
            img: movie8
        },
        {
            _id: 113,
            name: 'Movie 8',
            description: '',
            img: movie8
        },
    ]


    var settings = {
        dots: true,
        infinite: false,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section className='bg-secondary pb-3'>

            <div className='bg-primary video-container-2-m'>
                <h3 className='text-2xl text-white pt-6'>PIONEERFLIX EXCLUSIVE</h3>
                <Slider {...settings}>

                    {
                        popularMovies.map(movie =>

                            <div className='zoom-div-2 pt-6 pr-4 video-div' key={movie._id}>
                                <img className='popular-movie' src={movie.img} alt="" />
                            </div>)
                    }

                </Slider>
                <i class="fa fal fa-angle-double-down"></i>


                <div className='bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                    <div className='text-container-left-2 pb-10'>
                        <h1 className='text-5xl font-bold text-white'>Watch 100+ Exclusive Videos</h1>
                        <br />
                        <p className='text-white text-2xl'>Send Exclusive videos on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>

                    <div className='pb-10'>
                        <img src={profileKids} alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default PioneerplixExclusive;