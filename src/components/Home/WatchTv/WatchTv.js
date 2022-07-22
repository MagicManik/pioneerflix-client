import React from 'react';
import tv from '../../../assets/others/tv.png';

const WatchTv = () => {
    return (
        <section className='bg-secondary pb-3'>
            <div className='bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>
                <div>
                    <h1 className='text-5xl font-bold text-white p-5'>Enjoy on your TV.</h1>
                    <p className='text-white text-2xl p-5'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div>
                    <img src={tv} alt="" />
                </div>
            </div>
        </section>
    );
};

export default WatchTv;