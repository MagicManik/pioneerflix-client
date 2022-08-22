import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './DashboardMainPage.css';

const DashboardMainPage = () => {
    const [user] = useAuthState(auth);
    // console.log(user.displayName);
    const [admin] = useAdmin(user)
    const { pathname } = useLocation();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 4.2,
                    slidesToScroll: 4
                }
            }
        ]
    };

    return (
        <section className='pt-16 bg-black'>
            <div className="drawer drawer-mobile pt-2 bg-primary">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}

                    <div className='w-full flex justify-center mt-4'>
                        <p className='section-title text-green-500 text-[20px] md:text-[25px]'>Hi, <span className='text-[#e6020c]'>{user?.displayName}</span> Welcome to Dashboard</p>
                    </div>
                    <Outlet />
                    <label for="my-drawer-2" className="btn btn-secondary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li><Link to='' className='uppercase font-bold text-secondary'>My Profile</Link></li>
                        <li><Link to='uploadVideo' className={`uppercase font-bold text-secondary ${pathname.includes('/dashboard/uploadVideo') && 'bg-[#1f67f7]'}`}>Upload video</Link></li>
                        <li><Link to='myVideos' className={`uppercase font-bold text-secondary ${pathname.includes('/dashboard/myVideos') && 'bg-[#1f67f7]'}`}>My Videos</Link></li>
                        {admin && <li><Link to='makeAdmin' className={`uppercase font-bold text-secondary ${pathname.includes('/dashboard/makeAdmin') && 'bg-[#1f67f7]'}`}>Make Admin</Link></li>}
                        {admin && <li><Link to='manageVideos' className={`uppercase font-bold text-secondary ${pathname.includes('/dashboard/manageVideos') && 'bg-[#1f67f7]'}`}>Manage Videos</Link></li>}
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default DashboardMainPage;