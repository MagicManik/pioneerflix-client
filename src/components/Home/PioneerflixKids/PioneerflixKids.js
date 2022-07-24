import React from 'react';
import movie1 from '../../../assets/kids-videos/kids (1).webp';
import movie2 from '../../../assets/kids-videos/kids (10).webp';
import movie3 from '../../../assets/kids-videos/kids (3).webp';
import movie4 from '../../../assets/kids-videos/kids (4).webp';
import movie5 from '../../../assets/kids-videos/kids (5).webp';
import movie6 from '../../../assets/kids-videos/kids (6).webp';
import movie7 from '../../../assets/kids-videos/kids (7).webp';
import movie8 from '../../../assets/kids-videos/kids (8).webp';
import profileKids from '../../../assets/others/profile-kids.png';

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
    ]

    return (
        <section className='bg-secondary pb-3'>
            <div className='bg-primary video-section'>
                <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                    <h1 className='text-2xl text-white py-6'>PIONEERFLIX KIDS</h1>
                    <div className='grid lg:grid-cols-4 gap-5 popular-movie-section'>

                        {
                            popularMovies.map(movie =>

                                <div className='zoom-div-1' key={movie._id}>
                                    <img className='popular-movie' src={movie.img} alt="" />
                                </div>)
                        }
                    </div>
                </div>
            </div>

            <div className='text-container bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                <div className='text-container-left'>
                    <h1 className='text-5xl font-bold text-white'>Create profiles for kids.</h1>
                    <p className='text-white text-2xl'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                </div>

                <div>
                    <img src={profileKids} alt="" />
                </div>
            </div>
        </section>
    );
};

export default PioneerflixKids;