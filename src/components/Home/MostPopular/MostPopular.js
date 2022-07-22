import React from 'react';
import movie1 from '../../../assets/bangla-movie/movie (1).jpg';
import movie2 from '../../../assets/bangla-movie/movie (2).jpg';
import movie3 from '../../../assets/bangla-movie/movie (3).jpg';
import movie4 from '../../../assets/bangla-movie/movie (4).jpg';
import movie5 from '../../../assets/bangla-movie/movie (5).jpg';
import movie6 from '../../../assets/bangla-movie/movie (6).jpg';
import movie7 from '../../../assets/bangla-movie/movie (7).jpg';
import './MostPopular.css';

const MostPopular = () => {

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
    ]

    return (
        <section className='bg-secondary'>
            <div className='bg-primary'>
                <h1 className='text-2xl text-white py-6'>PIONEERFLIX MOST POPULAR</h1>
                <div className='grid lg:grid-cols-7 gap-4 popular-movie-section'>

                    {
                        popularMovies.map(movie =>

                            <div className='zoom-div' key={movie._id}>
                                <img className='popular-movie' src={movie.img} alt="" />
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MostPopular;