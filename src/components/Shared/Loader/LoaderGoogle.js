import React from 'react';
import './GoogleLoader.css';

const LoaderGoogle = () => {
    return (
        <section>
            <h1 className='google-loader-heading'>
                <span>G</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
            </h1>

            <div className="google-loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
};

export default LoaderGoogle;