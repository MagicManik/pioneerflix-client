import React from 'react';
import playStore from '../../../assets/app-logo/playstore.png';
import appStore from '../../../assets/app-logo/appstore.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-sendary bg-secondary'>
            <div className="footer-section bg-primary">
                <div className='footer-container'>
                    <h2 className='text-4xl font-bold text-red-500 py-2'>Pioneerplix</h2>
                    <p className='text-2xl'>Download Our Mobile App</p>
                    <div className='flex py-5 gap-3'>
                        <a href="https://www.google.com/">
                            <img className='app-logo' src={playStore} alt="" />
                        </a>
                        <a href="https://www.google.com/">
                            <img className='app-logo ps-2' src={appStore} alt="" />
                        </a>
                    </div>
                </div>

                <div className='company-others'>
                    <div>
                        <h5 className='footer-text pb-2'>Company</h5>
                        <p className='footer-text'><a href="https://www.google.com/">Career</a></p>
                        <p className='footer-text'><a href="https://www.google.com/">Privacy Policy</a></p>
                        <p className='footer-text'><a href="https://www.google.com/">Refund Policy</a></p>

                    </div>

                    <div className='footer-others'>
                        <h5 className='footer-text pb-2'>Others</h5>
                        <p className='footer-text'><a href="https://www.google.com/">Blogs</a></p>
                        <p className='footer-text'><a href="https://www.google.com/">Crash Course</a></p>
                        <p className='footer-text'><a href="https://www.google.com/">Want to be an affiliate</a></p>
                    </div>
                </div>

                <div className='social-media'>
                    <h5 className='footer-text pb-2'>Through social media we</h5>
                    <p className='footer-text'>Contact: <span className='footer-span'>8244</span> (8AM - 11PM)</p>
                    <p className='footer-text'>SMS: SHCHelp to 440404 (24X7)</p>
                    <p className='footer-text'>Email: <span className='footer-span'>support@pioneerflix.com</span></p>

                    <div className='social-icon-container'>
                        {/* <a href="https://www.google.com/"><FaFacebook className='social-icon' /></a>
                        <a href="https://www.google.com/"><FaInstagram className='social-icon'></FaInstagram></a>
                        <a href="https://www.google.com/"><FaTwitter className='social-icon'></FaTwitter></a>
                        <a href="https://www.google.com/"><FaYoutube className='social-icon'></FaYoutube></a> */}
                    </div>

                </div>

            </div>

            <div className='text-center py-4 copy-right'>Copyright &copy; pioneerflix.com</div>

        </footer>
    );
};

export default Footer;