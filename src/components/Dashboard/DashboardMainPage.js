import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import './DashboardMainPage.css';

const DashboardMainPage = () => {
    const [user] = useAuthState(auth);
    // console.log(user.displayName);
    const [admin] = useAdmin(user);

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
<<<<<<< HEAD
                    <label for="my-drawer-2" className="btn btn-secondary drawer-button lg:hidden">
=======
                    <label htmlFor="my-drawer-2" className="btn btn-secondary drawer-button lg:hidden">
>>>>>>> 47d9241e57f4f2b136812a500f5bc556e6f82a8e
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li><Link to='' className='uppercase font-bold text-secondary'>My Profile</Link></li>
                        <li><Link to='uploadVideo' className='uppercase font-bold text-secondary'>Upload video</Link></li>
                        <li><Link to='myVideos' className='uppercase font-bold text-secondary'>My Videos</Link></li>
                        {admin && <li><Link to='makeAdmin' className='uppercase font-bold text-secondary'>Make Admin</Link></li>}
                        {admin && <li><Link to='manageVideos' className='uppercase font-bold text-secondary'>Manage Videos</Link></li>}
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default DashboardMainPage;