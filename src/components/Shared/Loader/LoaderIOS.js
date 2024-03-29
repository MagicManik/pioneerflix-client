import React from 'react';
import './LoaderIOS.css'

const LoaderIOS = ({ fontSize }) => {

    return (
        <div className='relative'>
            <div className="overlay">
                <div className="spinner-container center">
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                    <div className="spinner-blade"></div>
                </div>
            </div>
        </div>
    );
};

export default LoaderIOS;