import React from 'react';
import profileKids from '../../../assets/others/profile-kids.png';

const KidsProfile = () => {
    return (
        <section className='bg-secondary'>
            <div className='bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>
                <div>
                    <h1 className='text-5xl font-bold text-white p-5'>Enjoy on your TV.</h1>
                    <p className='text-white text-2xl p-5'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div>
                    <img src={profileKids} alt="" />
                </div>
            </div>
        </section>
    );
};

export default KidsProfile;