import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashboardMainPage.css';

const DashboardMainPage = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-green-500 text-center'>Hello, Welcome to Dashboard</h1>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to=''>My Profile</Link></li>
                    <li><Link to='uploadVideo'>Upload video</Link></li>
                    <li><Link to='myVideos'>My Videos</Link></li>
                    <li><Link to='makeAdmin'>Make Admin</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardMainPage;