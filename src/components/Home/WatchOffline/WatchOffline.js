import React from 'react';
import offlineWatch from '../../../assets/others/watch-offline.jpg';

const WatchOffline = () => {
    return (
        <section className='bg-secondary pb-3'>
            <div className='bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>
                <div>
                    <img src={offlineWatch} alt="" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-white p-5'>Download your shows to watch offline.</h1>
                    <p className='text-white text-2xl p-5'>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
        </section>
    );
};

export default WatchOffline;