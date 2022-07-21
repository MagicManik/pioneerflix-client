import React from 'react';
import './Sidebar.css';

const Sidebar = ({ sidebar, toggleSidebar }) => {
    return (
        <nav className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
            <ul className='nav-link-container'>
                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/" target={"_blank"}>
                        <i class="fas fa-home"></i>Home
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/"><i class="fa fal fa-shopping-cart">
                    </i>Add to bag</a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fal fa-address-book"></i>Contact
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fad fa-sitemap"></i>Products
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fad fa-gift"></i>Magic Box
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fad fa-seedling"></i>Fruits and Vegetables
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fad fa-search"></i>Search
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fad fa-blog"></i>Blog
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fad fa-book"></i>Book
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fad fa-folder-open"></i>Folder
                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fas fa-pen-nib"></i>Review

                    </a>
                </li>

                <li onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fal fa-cog"></i>Setting
                    </a>
                </li>

                <li className='about-li' onClick={toggleSidebar}>
                    <a href="https://www.google.com/">
                        <i class="fa fal fa-exclamation-circle"></i>About
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;