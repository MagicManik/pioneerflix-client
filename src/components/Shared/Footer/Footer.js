import React from 'react';
import playStore from '../../../assets/app-logo/playstore.png';
import appStore from '../../../assets/app-logo/appstore.png';
import pioneerFlix from '../../../assets/app-logo/pioneerflix.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='text-white bg-primary'>
            <div className="footer-section">
                <div className='footer-container'>
                    <img className='w-7/12 mx-auto pb-3' src={pioneerFlix} alt="" />
                    <p className='text-2xl text-neutral'>Download Our Mobile App</p>
                    <div className='flex py-5 gap-3'>
                        <a href="https://www.google.com/">
                            <img className='app-logo mr-1' src={playStore} alt="" />
                        </a>
                        <a href="https://www.google.com/">
                            <img className='app-logo ps-2 ml-1' src={appStore} alt="" />
                        </a>
                    </div>
                </div>

                <div className='company-others'>
                    <div>
                        <h5 className='text-neutral pb-2'>Company</h5>
                        <p className='text-accent'><a href="https://www.google.com/">Career</a></p>
                        <p className='text-accent'><a href="https://www.google.com/">Privacy Policy</a></p>
                        <p className='text-accent'><a href="https://www.google.com/">Refund Policy</a></p>

                    </div>

                    <div className='footer-others'>
                        <h5 className='pb-2 text-neutral'>Others</h5>
                        <p className='text-accent'><a href="https://www.google.com/">Blogs</a></p>
                        <p className='text-accent'><Link to='/about'>About</Link></p>
                        <p className='text-accent'><a href="https://www.google.com/">Want to be an affiliate</a></p>
                    </div>
                </div>

                <div className='social-media'>
                    <h5 className='text-neutral pb-2'>Through social media we</h5>
                    <p className='text-accent '>Contact: <span className='footer-span'>8244</span> (8AM - 11PM)</p>
                    <p className='text-accent'>SMS: SHCHelp to 440404 (24X7)</p>
                    <p className='text-accent'>Email: <span className='footer-span text-neutral'>support@pioneerflix.com</span></p>

                    <div className='social-icon-container'>
                        {/* <a href="https://www.google.com/"><FaFacebook className='social-icon' /></a>
                        <a href="https://www.google.com/"><FaInstagram className='social-icon'></FaInstagram></a>
                        <a href="https://www.google.com/"><FaTwitter className='social-icon'></FaTwitter></a>
                        <a href="https://www.google.com/"><FaYoutube className='social-icon'></FaYoutube></a> */}
                    </div>

                </div>

            </div>
            {/* <hr className='h-[0.5px] w-full bg-secondary' /> */}
            <div className='text-center text-accent py-4 copy-right'>Copyright &copy; pioneerflix.com</div>

        </footer>
    );
};

export default Footer;