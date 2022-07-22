import React from 'react';
import tv from '../../../assets/others/tv.png';
import './WatchTv.css';

const WatchTv = () => {
    return (
        <section className='bg-secondary pt-3 pb-3'>
            <div className='text-container bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                <div className='text-container-left'>
                    <h1 className='text-5xl font-bold text-white'>Download your shows to watch offline.</h1>
                    <p className='text-white text-2xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>

                <div>
                    <img src={tv} alt="" />
                </div>
            </div>
        </section>
    );
};

export default WatchTv;