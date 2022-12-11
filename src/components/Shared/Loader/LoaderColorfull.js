import React from 'react';
import './LoaderColorfull.css';

const LoaderColorfull = () => {
    return (
        <section className='colorfull-loader-section'>
            <div className="loader-wrapper">
                <div className="spinner">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <h1 className='text-center lg:mt-5 mt-10'>loading...</h1>
            </div>
            {/* 
            <section className="loader-wrapper dark">
                <div className="spinner">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </section> */}
        </section>
    );
};

export default LoaderColorfull;