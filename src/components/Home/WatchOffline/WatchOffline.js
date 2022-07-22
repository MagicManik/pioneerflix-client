import React from 'react';
import offlineWatch from '../../../assets/others/watch-off.jpg';
import './WatchOffline.css';

const WatchOffline = () => {
    return (

        <section className='bg-secondary pb-3'>
            <div className='text-container bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                <div>
                    <img src={offlineWatch} alt="" />
                </div>
                <div className='text-container-right'>
                    <h1 className='text-5xl font-bold text-white'>Download your shows to watch offline.</h1>
                    <p className='text-white text-2xl'>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
        </section>
    );
};

export default WatchOffline;