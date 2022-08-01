import React from 'react';
import movie1 from '../../../assets/tvchannels/tv-chaneel (1).png';
import movie2 from '../../../assets/tvchannels/tv-chaneel (2).png';
import movie3 from '../../../assets/tvchannels/tv-chaneel (3).png';
import movie4 from '../../../assets/tvchannels/tv-chaneel (4).png';
import movie5 from '../../../assets/tvchannels/tv-chaneel (5).png';
import movie6 from '../../../assets/tvchannels/tv-chaneel (6).png';
import movie7 from '../../../assets/tvchannels/tv-chaneel (7).png';
import tv from '../../../assets/others/tv.png';
import './TvChannels.css';

const TvChannels = () => {

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
            name: 'Movie 7',
            description: '',
            img: movie7
        }
    ]

    return (
        <section className='bg-secondary pb-3'>
            <div className='bg-primary video-section'>
                <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                    <h1 className='text-2xl text-white py-6'>TV CHANNELS</h1>
                    <div className='grid lg:grid-cols-8 gap-4 popular-movie-section'>

                        {
                            popularMovies.map(movie =>

                                <div className='pr-2 pb-2 pl-2 zoom-div-I' key={movie._id}>
                                    <img className='popular-movie' src={movie.img} alt="" />
                                </div>)
                        }
                    </div>
                </div>
            </div>

            <div className='text-container bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                <div className='text-container-left'>
                    <h1 className='text-5xl font-bold text-white'>Enjoy on your TV.</h1>
                    <p className='text-white text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>

                <div className='our-story-card-animation-container pb-20'>
                    <img className='tv-img rounded-xl ' src={tv} alt="" />

                    <div className='our-story-card-animation' data-uia="our-story-card-animation">

                        <video className='our-story-card-video'

                            data-uia="our-story-card-video" autoPlay playsinline muted loop>
                            <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4' />

                        </video>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TvChannels;