import React from 'react';
import movie1 from '../../../assets/kids-videos/kids (1).jpg';
import movie2 from '../../../assets/kids-videos/kids (10).jpg';
import movie3 from '../../../assets/kids-videos/kids (3).jpg';
import movie4 from '../../../assets/kids-videos/kids (4).jpg';
import movie5 from '../../../assets/kids-videos/kids (5).jpg';
import movie6 from '../../../assets/kids-videos/kids (6).jpg';
import movie7 from '../../../assets/kids-videos/kids (7).jpg';
import movie8 from '../../../assets/kids-videos/kids (8).jpg';
import profileKids from '../../../assets/others/profile-kids.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const PioneerflixKids = () => {

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
        }
    ];


    var settings = {
        dots: false,
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
                    arrows: false,
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <section className='bg-secondary pb-3'>

            <div className='bg-primary pl-5  video-container-II'>
                <h3 className='text-2xl text-white pt-6'>PIONEERFLIX KIDS</h3>

                <div className='pb-10'>
                    <Slider {...settings}>

                        {
                            popularMovies.map(movie =>

                                <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={movie._id}>
                                    <Link to='/ok'>
                                        <img className='popular-movie' src={movie.img} alt="" />
                                    </Link>

                                </div>)
                        }

                    </Slider>
                </div>
                <i class="fa fal fa-angle-double-down"></i>


                <div className='bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                    <div className='text-container-left-2 pb-10'>
                        <h1 className='text-5xl font-bold text-white'>Watch 100+ Exclusive Videos</h1>
                        <br />
                        <p className='text-white text-2xl'>Send Exclusive videos on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>

                    <div className='pb-10'>
                        <img className='rounded-2xl' src={profileKids} alt="" />
                    </div>
                </div>
            </div>
        </section>

        // <section className='bg-secondary pb-3'>
        //     <div className='bg-primary video-section'>
        //         <div className='bg-primary lg:px-20 sm:px-4 video-container'>
        //             <h1 className='text-2xl text-white py-6'>PIONEERFLIX KIDS</h1>
        //             <div className='grid lg:grid-cols-4 gap-5 video-section-2'>

        //                 {
        //                     popularMovies.map(movie =>

        //                         <div className='zoom-div-I' key={movie._id}>
        //                             <img className='popular-movie' src={movie.img} alt="" />
        //                         </div>)
        //                 }
        //             </div>
        //         </div>
        //     </div>

        //     <div className='text-container bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

        //         <div className='text-container-left'>
        //             <h1 className='text-5xl font-bold text-white'>Create profiles for kids.</h1>
        //             <p className='text-white text-2xl'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        //         </div>

        //         <div>
        //             <img src={profileKids} alt="" />
        //         </div>
        //     </div>
        // </section>
    );
};

export default PioneerflixKids;