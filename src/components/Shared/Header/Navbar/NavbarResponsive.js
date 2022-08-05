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
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import pioneerFlix from '../../../../assets/app-logo/pioneerflix.png';


const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const NavbarResponsive = ({ theme, setTheme }) => {
  const [scrollNavbar, setScrollNavbar] = useState(false)

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth);
    navigate('/')
  }
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScrollNavbar(true)
    }
    else {
      setScrollNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <Disclosure as="nav" className={scrollNavbar ? "sticky bg-primary top-0 left-0 z-20 border-0" : "border-0 absolute left-0 right-0 z-20 bg-transparent"}>
        {({ open }) => (
          <>
            <div className="max-w-8xl  mx-auto px-2 sm:px-6 lg:px-14 ">
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
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
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
                        className="hidden lg:block h-12 w-auto"
                        src={pioneerFlix}
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <>
                          <Link
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900  text-white"
                                : "text-white  hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>

                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* search here */}
                  <div className="relative hidden md:block text-black">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <FaSearch className="text-sm" />
                    </div>
                    <input
                      type="text"
                      id="search-navbar"
                      className="block p-1 pl-10 w-[95%]  bg-gray-50 rounded-sm border  sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search..."
                    />
                  </div>

                  <button
                    className=" text-white text-xl"
                    onClick={() => setTheme(!theme)}
                  >
                    {theme ? <FaRegMoon /> : <FaSun />}
                  </button>
                  <button type="button" className=" text-white mx-2 md:mx-3">
                    <span className="sr-only">View notifications</span>

                    <FaRegBell className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
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
                            <Link to="/logIn" className='bg-black px-4 py-2 rounded-xl'>LOG IN</Link>
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
                      <Menu.Items className="origin-top-right absolute z-20 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-primary ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? "bg-zinc-800 w-full text-left" : "w-full",
                                "block px-4 py-2 text-sm text-left"
                              )}
                            >
                              Your Profile
                            </button>
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
                {navigation.map(item => (
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
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
