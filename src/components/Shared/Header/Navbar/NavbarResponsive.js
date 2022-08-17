import { React, Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  FaAlignJustify,
  FaTimes,
  FaRegBell,
  FaRegMoon,
  FaSun,
  FaSearch,
} from "react-icons/fa";
import auth from "../../../../firebase.init";
import CustomLink from "../../customLink/CustomLink";

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import pioneerFlix from '../../../../assets/app-logo/pioneerflix.png';
import './NavbarResponsive.css';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



const NavbarResponsive = ({ theme, setTheme }) => {
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate("/");
  };

  const handleTheme = (colorTheme) => {

    if (colorTheme === 'dark') {
      localStorage.setItem('colorTheme', colorTheme)
    }
    else {
      localStorage.setItem('colorTheme', colorTheme)
    }
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Disclosure as="nav" className={scrollNavbar ? "sticky header-scrolling top-0 left-0 z-20 border-0" : "border-0 absolute left-0 right-0 z-20 bg-transparent"}>
        {({ open }) => (
          <>
            <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-14 ">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaTimes className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaAlignJustify
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to={'/'}>
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src={pioneerFlix}
                        alt="Workflow"
                      />
                    </Link>
                    <Link to={'/'}>
                      <img
                        className="hidden lg:block h-12 pt-2 w-auto"
                        src={pioneerFlix}
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <CustomLink
                        to="/"
                        className=" text-white  hover:text-white"
                      >
                        {" "}
                        Home
                      </CustomLink>
                      <CustomLink
                        to="/tv"
                        className=" text-white  hover:text-white"
                      >
                        TV Shows
                      </CustomLink>
                      <CustomLink
                        to="/movies"
                        className=" text-white  hover:text-white"
                      >
                        Movies
                      </CustomLink>
                      {user && (
                        <CustomLink
                          to="/dashboard"
                          className=" text-white  hover:text-white"
                        >
                          {" "}
                          Dashboard
                        </CustomLink>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* search here */}
                  <div className="relative hidden md:block mr-5 text-black">
                    <div className="flex absolute inset-y-0  left-0 items-center pl-3 pointer-events-none">
                      <FaSearch className="text-sm search-icon" />
                    </div>
                    <input
                      type="text"
                      id="search-navbar"
                      className="block p-1 hover:p-1.5 py-1 hover:py-1 pl-10 duration-1000 hover:px-14 text-white focus:px-14  hover:text-white  hover:scale-x-100 mr-1 rounded-full border search-input sm:text-sm"
                      placeholder="Search..."
                    />
                  </div>

                  <button
                    className=" text-white text-xl"
                    onClick={() => setTheme(!theme)}
                  >

                    {theme ? <FaRegMoon onClick={() => handleTheme('white')} /> : <FaSun onClick={() => handleTheme('dark')} />}

                  </button>

                  <button type="button" className=" text-white mx-2 md:mx-3">
                    <span className="sr-only">View notifications</span>

                    <FaRegBell className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className={user ? 'ml-3 relative  custom-border-I' : 'ml-3 relative'}>
                    <div>
                      <Menu.Button className=" flex text-sm">
                        <span className="sr-only">Open user menu</span>

                        {
                          user
                            ?
                            <img
                              className="h-9 w-9 rounded-full"
                              src={user?.photoURL}
                              alt=""
                            />
                            :
                            <Link to="/logIn" className='bg-black custom-border-II px-4 login-btn rounded-xl'>LOG IN</Link>
                        }

                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-primary ring-1 ring-black ring-opacity-5 focus:outline-none custom-border-II">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to='/dashboard'
                              className={classNames(
                                active ? "bg-zinc-800 w-full text-left" : "w-full",
                                "block px-4 py-2 text-sm text-left"
                              )}
                            >
                              Your Profile
                            </Link >
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link to='watchList' className={classNames(
                              active ? "bg-zinc-800 w-full text-left" : "w-full",
                              "block px-4 py-2 text-sm text-left"
                            )}>Watch history</Link>
                          )}

                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to='favorite' className={classNames(
                              active ? "bg-zinc-800 w-full text-left" : "w-full",
                              "block px-4 py-2 text-sm text-left"
                            )}>Favorite Videos</Link>
                          )}

                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogOut}
                              className={classNames(
                                active ? "bg-zinc-800 w-full text-left" : "w-full",
                                "block px-4 py-2 text-sm text-left"
                              )}
                            >
                              Sign out
                            </button>
                          )}

                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <CustomLink to="/" className=" text-white  hover:text-white">
                  {" "}
                  Home
                </CustomLink>
                <CustomLink
                  to="/tv"
                  className=" text-white  hover:text-white"
                >
                  TV Shows
                </CustomLink>
                <CustomLink
                  to="/movies"
                  className=" text-white  hover:text-white"
                >
                  Movies



                  <div id="mega-menu-full-image-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid py-5 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul class="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Segmentation
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Marketing CRM
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Online Stores
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Resources
                    </a>
                </li>
            </ul>
            <a href="#" class="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style="background-image: url(/docs/images/dashboard-overview.png)">
                <p class="mb-5 max-w-xl font-extrabold tracking-tight leading-tight text-white">Preview the new Flowbite dashboard navigation.</p>
                <button type="button" class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                    Get started
                    <svg class="ml-1 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </a>
        </div>
    </div>
                </CustomLink>
                {user && (
                  <CustomLink
                    to="/dashboard"
                    className=" text-white my-3 hover:text-white"
                  >
                    {" "}
                    Dashboard
                  </CustomLink>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <hr />
    </>
  );
};

export default NavbarResponsive;
