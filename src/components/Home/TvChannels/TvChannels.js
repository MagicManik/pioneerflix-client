import React from 'react';
import movie1 from '../../../assets/tvchannels/tv-chaneel1.png';
import movie2 from '../../../assets/tvchannels/tv-chaneel2.png';
import movie3 from '../../../assets/tvchannels/tv-chaneel3.png';
import movie4 from '../../../assets/tvchannels/tv-chaneel4.png';
import movie5 from '../../../assets/tvchannels/tv-chaneel5.png';
import movie6 from '../../../assets/tvchannels/tv-chaneel6.png';
import movie7 from '../../../assets/tvchannels/tv-channel7.png';
import movie8 from '../../../assets/tvchannels/tv-channel8.png';
import movie9 from '../../../assets/tvchannels/tv-channel9.png';
import movie10 from '../../../assets/tvchannels/tv-channel10.png';
import movie11 from '../../../assets/tvchannels/tv-channel11.png';
import movie12 from '../../../assets/tvchannels/tv-channel12.png';
import movie13 from '../../../assets/tvchannels/tv-channel13.png';
import movie14 from '../../../assets/tvchannels/tv-channel14.png';
import movie15 from '../../../assets/tvchannels/tv-channel15.png';
import movie16 from '../../../assets/tvchannels/tv-channel16.png';
import movie17 from '../../../assets/tvchannels/tv-channel17.png';
import movie18 from '../../../assets/tvchannels/tv-channel18.png';
import movie19 from '../../../assets/tvchannels/tv-channel19.png';
import movie20 from '../../../assets/tvchannels/tv-channel20.png';
import tv from '../../../assets/others/tv.png';
import './TvChannels.css';

const TvChannels = () => {

    const popularMovies = [
        {
            _id: 1,
            name: 'Movie1',
            description: '',
            img: movie1,
            link: 'https://www.sonyliv.com/'
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
            link: 'https://www.yupptv.com/channels/zee-bangla/live'
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
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 6,
            name: 'Movie6',
            description: '',
            img: movie6,
            link: 'http://www.nick.com.au/'
        },
        {
            _id: 7,
            name: 'Movie7',
            description: '',
            img: movie7,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 8,
            name: 'Movie8',
            description: '',
            img: movie8,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 9,
            name: 'Movie9',
            description: '',
            img: movie9,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 10,
            name: 'Movie10',
            description: '',
            img: movie10,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 11,
            name: 'Movie11',
            description: '',
            img: movie11,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 12,
            name: 'Movie12',
            description: '',
            img: movie12,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 13,
            name: 'Movie13',
            description: '',
            img: movie13,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 14,
            name: 'Movie14',
            description: '',
            img: movie14,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 15,
            name: 'Movie15',
            description: '',
            img: movie15,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 16,
            name: 'Movie16',
            description: '',
            img: movie16,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 17,
            name: 'Movie17',
            description: '',
            img: movie17,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 18,
            name: 'Movie18',
            description: '',
            img: movie18,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 19,
            name: 'Movie19',
            description: '',
            img: movie19,
            link: 'https://www.sonyliv.com/'
        },
        {
            _id: 20,
            name: 'Movie20',
            description: '',
            img: movie20,
            link: 'https://www.sonyliv.com/'
        },
    ]

    return (
        <section className='bg-secondary pb-3'>
            <div className='bg-primary video-section'>
                <div className='bg-primary lg:px-20 sm:px-4 video-container'>
                    <h1 className='text-2xl text-secondary py-6'>TV CHANNELS</h1>
                    <div className='grid lg:grid-cols-8 gap-4 popular-movie-section'>

                        {
                            popularMovies.map(movie =>

                                <div className='pr-2 pb-2 pl-2 zoom-div-I' key={movie._id}>
                                    
                                    <a href={movie.link} target="_blank"><img className='popular-movie' src={movie.img} alt="" /></a>
                                </div>)
                        }
                    </div>
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
        </section>
    );
};

export default TvChannels;