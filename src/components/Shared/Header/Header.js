import React, { useState } from 'react';
// import Backdrop from './Backdrop';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import './Header.css';

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    }

    return (
        <header className='header-container flex'>
            <Toolbar openSidebar={toggleSidebar}></Toolbar>
            <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}></Sidebar>
            {/* <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}></Backdrop> */}
        </header>
    );
};

export default Header;