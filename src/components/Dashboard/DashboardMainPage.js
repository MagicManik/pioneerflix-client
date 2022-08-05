import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import './DashboardMainPage.css';

const DashboardMainPage = () => {
    const [user] = useAuthState(auth);
    // console.log(user.displayName);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                
                <div className='w-full flex justify-center mt-4'>
                    <p className='section-title text-[20px] md:text-[30px]'>Hi, <span className='text-red-500'>{user?.displayName}</span> Welcome to Dashboard</p>
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
                    <li><Link to='' className='uppercase font-bold text-black'>My Profile</Link></li>
                    <li><Link to='uploadVideo' className='uppercase font-bold text-black'>Upload video</Link></li>
                    <li><Link to='myVideos' className='uppercase font-bold text-black'>My Videos</Link></li>
                    <li><Link to='makeAdmin' className='uppercase font-bold text-black'>Make Admin</Link></li>
                    <li><Link to='manageVideos' className='uppercase font-bold text-black'>Manage Videos</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardMainPage;