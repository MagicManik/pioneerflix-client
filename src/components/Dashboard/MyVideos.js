import React from 'react';
import movie1 from '../../assets/free-videos/free-video (1).jpg';
import movie2 from '../../assets/free-videos/free-video (2).jpg';
import movie3 from '../../assets/free-videos/free-video (3).jpg';
import movie4 from '../../assets/free-videos/free-video (4).jpg';
import movie5 from '../../assets/free-videos/free-video (5).jpg';
import movie6 from '../../assets/free-videos/free-video (6).jpg';
import movie7 from '../../assets/free-videos/free-video (7).jpg';
import { FcLike } from 'react-icons/fc';

const MyVideos = () => {

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
            name: 'Movie 2',
            description: '',
            img: movie2
        },
        {
            _id: 8,
            name: 'Movie 3',
            description: '',
            img: movie3
        },
        {
            _id: 9,
            name: 'Movie 4',
            description: '',
            img: movie4
        },
        {
            _id: 10,
            name: 'Movie 5',
            description: '',
            img: movie5
        },
        {
            _id: 11,
            name: 'Movie 6',
            description: '',
            img: movie6
        },
        {
            _id: 12,
            name: 'Movie 7',
            description: '',
            img: movie7
        }
    ];

    return (
        <div>
            <div className='w-full flex justify-center mt-0'>
                <p className='section-title text-[20px] md:text-[30px]'>All of my videos</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:gap-1 gap-4 mb-4'>
                {
                    popularMovies.map(movie =>
                        <div className='bg-black rounded-md h-auto'>
                            <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={movie._id}>
                                <img className='w-full' src={movie.img} alt="" />
                            </div>
                            <div>
                                <p className='test-xs md:text-xs lg:text-xs text-white'><span className='font-bold text-green-500 pl-2'>Name</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                <p><FcLike className='m-2 inline-block' />1.8M</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyVideos;