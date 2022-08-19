
            
 import { React, Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaAlignJustify, FaTimes, FaRegBell, FaRegMoon, FaSun, FaSearch, } from "react-icons/fa";
import auth from "../../../../firebase.init";
import CustomLink from "../../customLink/CustomLink";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import pioneerFlix from '../../../../assets/app-logo/pioneerflix.png';
import './NavbarResponsive.css';
import useVideos from "../../../../hooks/useVideos";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarResponsive = ({ theme, setTheme }) => {
  const [videos] = useVideos();
  const [searchResult, setSearchResult] = useState(videos);
  const [scrollNavbar, setScrollNavbar] = useState(false);


  // console.log(result)

  const navigateResultPage = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedValue = e.target.search.value;
    navigateResultPage(`result/${searchedValue}`);

  }




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
      <Disclosure as="nav" className={scrollNavbar ? "sticky header-scrolling top-0 left-0 z-20 border-0" : "border-0 absolute left-0 right-0 z-20 header-scrolling-mobile bg-transparent"}>
        {({ open }) => (
          <>
            <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-14 ">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden toggle-mobile-menu">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex hamburger-mobile-menu items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                  {/* search here */}
                  <div className="relative hidden md:block mr-5 text-black">
                    <div className="flex absolute inset-y-0  left-0 items-center pl-3 pointer-events-none">
                      <FaSearch className="text-sm search-icon" />
                    </div>
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        id="search-navbar"
                        name="search"
                        className="block p-1 hover:p-1.5 py-1 hover:py-1 pl-10 duration-1000 hover:px-14 text-white focus:px-14  hover:text-white  hover:scale-x-100 mr-1 rounded-full border search-input sm:text-sm"
                        placeholder="Search..."
                      />
                    </form>
                  </div>

                  <button
                    className=" text-white text-xl"
                    onClick={() => setTheme(!theme)}
                  >

                    {theme ? <FaSun onClick={() => handleTheme('white')} /> : <FaRegMoon className="h-5 w-5" onClick={() => handleTheme('dark')} />}

                  </button>

                  <button type="button" className=" text-white mx-2 md:mx-3">
                    <span className="sr-only">View notifications</span>

                    <FaRegBell className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className={user ? 'relative  custom-border-I' : 'ml-3 relative'}>
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
                      <Menu.Items className="origin-top-right absolute z-20 right-0 mt-2 w-60 rounded-[12px] shadow-lg custom-bg ring-1 ring-black ring-opacity-5 focus:outline-none py-4">
                        {/* custom-border-II */}
                        <Menu.Item>
                          {({ active }) => (
                            <img className="block w-4/12 mx-auto rounded-full" src={user?.photoURL} alt="" />
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <p className=" font-bold pt-3 text-center">{user?.displayName}</p>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <p className="user-email text-center">{user?.email}</p>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link to='/dashboard'
                              className={classNames(
                                active ? "my-profile-btn" : "my-profile-btn"
                              )}
                            >
                              My Profile
                            </Link >
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link to='watchList' className={classNames(
                              active ? "bg-zinc-800 w-full text-left" : "w-full",
                              "block px-4 py-2 text-sm text-left"
                            )}><i class="fa fas fa-history mr-2"></i>Watch history</Link>
                          )}

                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to='favorite' className={classNames(
                              active ? "bg-zinc-800 w-full text-left" : "w-full",
                              "block px-4 py-2 text-sm text-left"
                            )}><i class="fa fal fa-video mr-2"></i>Favorite Videos</Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link to='favorite' className={classNames(
                              active ? "bg-zinc-800 w-full text-left" : "w-full",
                              "block px-4 py-2 text-sm text-left"
                            )}><i class="fa fal fa-film mr-2"></i>My Videos</Link>
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
                              <i class="fa fas fa-sign-out-alt mr-2"></i>Sign out
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
                </CustomLink>
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


