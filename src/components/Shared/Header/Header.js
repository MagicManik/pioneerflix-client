import { React, Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaAlignJustify, FaTimes, FaRegMoon, FaCaretDown, FaSearch, FaCaretUp, FaGrinAlt, FaRegClipboard } from "react-icons/fa";
import { GiDramaMasks, GiNewBorn, GiGamepad, GiSlicedBread } from "react-icons/gi";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { MdOutlineAttractions } from "react-icons/md";
import userPhoto from '../../../assets/download.svg';
import { MdLightMode } from "react-icons/md";
import auth from "../../../firebase.init";
import { BiLike } from "react-icons/bi";
import CustomLink from "../customLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import pioneerFlix from "../../../assets/app-logo/pioneerflix.png";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Notification from "./Notification";
import { MdPlaylistAdd } from "react-icons/md";
import VoiceSearch from "../SearchResults/VoiceSearch";


const megaMenuR1 = [
  { name: "Drama", href: "/drama", id: "2aod030vkd", icon: <GiDramaMasks /> },
  { name: "Thriller", href: "/thriller", id: "8aod030vk", icon: <MdOutlineAttractions /> },
  { name: "Clips", href: "/clips", id: "8aod030vk", icon: <FaRegClipboard /> },
  { name: "Comedy", href: "/comedy", id: "293oc02c", icon: <FaGrinAlt /> },
];

const megaMenuR2 = [
  { name: "Latest", href: "/latest", id: "6aod3014kd", icon: <GiNewBorn /> },
  { name: " Episodes", href: "/episodes", id: "6a2od30kd", icon: <GiSlicedBread /> },
  { name: "Upcoming", href: "/upComing", id: "6ao2d30kd", icon: <HiOutlinePaperAirplane /> },
  { name: "Live Games", href: "/games", id: "293oc02c", icon: <GiGamepad /> },
];

const megaMenuR3 = [
  { name: "Bangla Movies", href: "/bangla", id: "293oc02c" },
  { name: "English Movies", href: "/english", id: "2aod030vkd" },
  { name: "Hindi Movies", href: "/hindi", id: "8aod030vk" },
  { name: "Japanese Movies", href: "/Japanese", id: "6a3od30kd" },
  { name: "Chinese Movies", href: "/chinese", id: "69aod30kd" },
  { name: "Turkish Movies", href: "/turkish", id: "6ao2d30kd" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ theme, setTheme }) => {
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [mega, setMega] = useState(false);
  const [notification, setNotification] = useState(false);
  const [moviesMega, setMoviesMega] = useState(false);
  const [voiceSearch, setVoiceSearch] = useState(false);

  const navigateResultPage = useNavigate();

  const handleMega = () => {
    setMega(!mega);
    setMoviesMega(false);
  }
  const handleMovies = () => {
    setMega(false);
    setMoviesMega(!moviesMega);
  }
  const handleSearch = (e) => {
    e.preventDefault();
    const searchedValue = e.target.search.value;
    navigateResultPage(`result/${searchedValue}`);
  };

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const handleTheme = (color) => {
    if (color === "light") {
      localStorage.setItem("theme", color);
    } else {
      localStorage.setItem("theme", color);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNavbar(true);
      setMega(false);
      setNotification(false)
    } else {
      setScrollNavbar(false);
    }
  };

  //<-------------multiple Language ----------->
  const { i18n, t } = useTranslation(["profile"], [""]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  window.addEventListener("scroll", changeBackground);

  const userAgent = navigator.userAgent;

  useEffect(() => {
    if (userAgent.match(/chrome|chromium|crios/i)) {
      setVoiceSearch(true);
    }
  }, [userAgent]);

  return (
    <>
      <div
        className={
          scrollNavbar
            ? "sticky header-scrolling top-0  left-0 z-20 border-0 mx-auto max-w-[1440px]"
            : "border-0 static lg:absolute left-0 right-0 z-20 bg-black lg:bg-transparent mx-auto max-w-[1440px]"}>
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="max-w-8xl text-accent mx-auto px-2 sm:px-6 lg:px-11 ">
                <div className="relative flex items-center justify-between h-16">
                  {/* hamburger icon for smale devices*/}
                  <Disclosure.Button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hamburger-icon">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaTimes className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaAlignJustify
                        className="block h-6 w-6"
                        aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  {/* site logo start for small and large devices */}
                  <div className="flex-1 flex items-center sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <Link to={"/"}>
                        <img
                          className="lg:w-32 w-auto lg:h-auto h-8 lg:pt-2 site-logo"
                          src={pioneerFlix}
                          alt="Workflow" />
                      </Link>
                    </div>
                    {/* nav menu start for large devices */}
                    <div className="nav-items sm:block sm:ml-4">
                      <div className="flex space-x-4">
                        <Link
                          to="/"
                          className="home">
                          {t("Home")}
                        </Link>
                        <button
                          onClick={() => handleMovies(!moviesMega)}
                          onMouseEnter={() => handleMovies()}
                          className=" text-white  flex  items-end  hover:text-error">
                          {t("Movies")}
                          {moviesMega ? (
                            <FaCaretUp className="ml-1 text-xl" />
                          ) : (
                            <FaCaretDown className="ml-1 text-xl" />
                          )}
                        </button>
                        {moviesMega &&
                          <div onMouseLeave={() => handleMovies()} className="absolute lg:block hidden bg-[#222] border-2 border-indigo-600 md:top-16 rounded z-30">
                            <div className="py-5 px-4 relative mx-auto  max-w-screen-xl text-base md:px-10">
                              <ul className="mb-4 space-y-3 md:mb-0">
                                {megaMenuR3.map((m) => (
                                  <li key={m.id}>
                                    <Link
                                      to={m.href}
                                      className="duration-200 hover:text-lg  hover:text-blue-600">
                                      {m.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>}
                        <button
                          onMouseEnter={() => handleMega()}
                          className="text-white  flex  items-end  hover:text-error">
                          {t("Categories")}
                          {mega ? (
                            <FaCaretUp className="ml-1 text-xl" />
                          ) : (
                            <FaCaretDown className="ml-1 text-xl" />
                          )}
                        </button>
                        {mega && (
                          <div onMouseLeave={() => handleMega(false)} className="absolute duration-1000 lg:block hidden transition bg-[#222] border-2 rounded-md border-indigo-600 md:top-16 md:left-56 w-[90%] md:w-[60%] z-30">
                            <div className="grid py-5 px-4 relative mx-auto  max-w-screen-xl text-base grid-cols-2 md:grid-cols-3 md:px-10">
                              <ul className=" relative space-y-3 md:mb-0 md:block">
                                {megaMenuR1.map((m) => (
                                  <div className="flex items-center   hover:text-blue-600 justify-start zoom-div-I pb-1">
                                    <span className="text-2xl">{m.icon}</span>
                                    <li key={m.id}>
                                      <Link
                                        to={m.href}
                                        onClick={() => setMega(!mega)}
                                        className="duration-200 ml-3 text-lg  ">
                                        {m.name}
                                      </Link>
                                    </li>
                                  </div>
                                ))}
                              </ul>
                              <ul className="mb-4 space-y-3 md:mb-0">
                                {megaMenuR2.map((m) => (
                                  <div className="flex items-center hover:text-blue-600 justify-start zoom-div-I pb-1">
                                    <span className="text-3xl  ">{m.icon}</span>
                                    <li key={m.id}>
                                      <Link
                                        to={m.href}
                                        onClick={() => setMega(!mega)}
                                        className="duration-200 text-lg ml-3  ">
                                        {m.name}
                                      </Link>
                                    </li>
                                  </div>
                                ))}
                              </ul>
                              <iframe
                                width="100%"
                                height="100%"
                                className="rounded-sm hidden md:block zoom-div-I"
                                src="https://www.youtube.com/embed/sxSa0MItDkg?controls=0"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                              </iframe>
                            </div>
                          </div>
                        )}
                        <select
                          className="border-none text-center bg-[#222] py-0 decoration-white text-white rounded"
                          onChange={handleLanguageChange}
                          value={localStorage.getItem("i18nextLng")}>
                          <option value="en">English</option>
                          <option value="bn">বাংলা</option>
                          <option value="amharic">አማርኛ</option>
                          <option value="arabic">العربية</option>
                          <option value="hindi">हिन्दी</option>
                          <option value="russian">Russian</option>
                          <option value="ukraine">Ukraine</option>
                          <option value="armenian">Հայերեն</option>
                        </select>
                      </div>
                    </div>
                    {/* nav menu close for large devices */}
                  </div>
                  {/* site logo close for small and large devices */}

                  <div className="absolute inset-y-0 right-0 flex items-center mr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* search menu start for large devices */}
                    <div className="relative hidden md:block mr-5 ">
                      <div className="flex absolute inset-y-0  left-0 items-center pl-3 pointer-events-none">
                        <FaSearch className="text-sm search-icon" />
                      </div>
                      <div className="flex search-container bg-[#222]">
                        <form onSubmit={handleSearch}>
                          <input
                            type="text"
                            id="search-navbar"
                            name="search"
                            className="block p-1 hover:p-1.5 py-1 hover:py-1 pl-10 duration-1000  text-white hover:pl-14 focus:pl-14 hover:pr-3 focus:pr-3  hover:text-white lg:text-base  hover:scale-x-100 mr-1 rounded-full border search-input sm:text-sm"
                            placeholder="search..." />
                        </form>
                        {
                          voiceSearch && <VoiceSearch></VoiceSearch>
                        }
                      </div>
                    </div>
                    {/* search menu close for large devices */}

                    {/* theme, notification and login button start for small and large devices */}
                    <button
                      className="  text-xl"
                      onClick={() => setTheme(!theme)}>
                      {theme ? (
                        <FaRegMoon className="text-white" onClick={() => handleTheme("light")} />
                      ) : (
                        <MdLightMode className="text-white" onClick={() => handleTheme("dark")} />
                      )}
                    </button>
                    <Notification notification={notification} setNotification={setNotification} />
                    {/* subscribe button start for large devices */}
                    <Link
                      to="/pay"
                      className="  text-lg bg-[#d41821] hover:bg-[#ff1622] px-3 mx-2 py-1 rounded-lg hidden md:block text-white hover:text-white">
                      {t("Subscribe")}
                    </Link>
                    {/* subscribe button close for large devices */}

                    {/* Profile dropdown start for large and small devices */}
                    <Menu as="div" className={user ?
                      "ml-3 relative  custom-border-I" : "ml-3 relative"}>
                      <div>
                        <Menu.Button className=" flex text-sm">
                          <span className="sr-only">Open user menu</span>
                          {user ?
                            (<img
                              className="h-9 w-9 rounded-full"
                              src={user?.photoURL || userPhoto}
                              alt="" />)
                            :
                            (<Link
                              to="/logIn"
                              className="bg-black text-white custom-border-II px-3 login-btn rounded-xl">
                              {t("LOG IN")}
                            </Link>
                            )}
                        </Menu.Button>
                      </div>
                      {/* my profile menu */}
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-right w-[245px] absolute z-20 right-0 mt-2 rounded-[18px] shadow-lg custom-bg ring-1 ring-black ring-opacity-5 focus:outline-none py-4">
                          {/* custom-border-II */}
                          <Menu.Item>
                            {({ active }) => (
                              <img
                                className="block w-4/12 mx-auto rounded-full"
                                src={user?.photoURL || userPhoto}
                                alt="" />)}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <p className=" font-semibold text-lg pt-3 text-center text-[#f5f5f7]">
                                {user?.displayName}
                              </p>)}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <p className="user-email text-center text-white">{user?.email}</p>)}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/dashboard"
                                className={classNames(
                                  active ? "my-profile-btn text-white" : "my-profile-btn text-info")}>
                                {t("My Profile")}
                              </Link>)}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="watch/hisory"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left"
                                    : "w-full",
                                  "block px-4 py-2 text-white text-left")}>
                                <i className="fa fas text-white fa-history mr-2" />
                                {t("Watch history")}
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="likedvideos"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left flex items-center"
                                    : "w-full flex items-center",
                                  "block px-4 py-2  text-white text-sm text-left")}>
                                <BiLike className="mr-2 text-lg" />
                                {t("Liked Videos")}
                              </Link>)}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="mylist"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left flex items-center"
                                    : "w-full flex items-center",
                                  "block px-4 py-2 text-sm text-left text-white")}>
                                <MdPlaylistAdd className="mr-2 text-lg text-center text-white"></MdPlaylistAdd>
                                {t("My List")}
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="dashboard/myVideos"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left"
                                    : "w-full",
                                  "block px-4 py-2 text-sm text-left text-white")}>
                                <i className="fa fal fa-film mr-2" />
                                {t("My Videos")}
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogOut}
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left"
                                    : "w-full",
                                  "block px-4 py-2 text-sm text-left text-white")}>
                                <i className="fa fas fa-sign-out-alt mr-2"></i>
                                {t("LOG OUT")}
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    {/* Profile dropdown close for small and large device */}
                  </div>
                </div>
              </div>
              {/* ----------------------- mobile devices nav items start --------------- */}
              <Disclosure.Panel className=" border-[#333] border-b-2 border-solid">
                <div className="px-4 pt-1 pb-3 space-y-1">
                  {/* search here */}
                  <div className="relative mb-4 mobile-search-container">
                    <div className="flex absolute inset-y-0  left-0 items-center pl-3 pointer-events-none">
                      <FaSearch className="text-sm search-icon" />
                    </div>
                    <div className="flex search-container bg-[#222]">
                      <form onSubmit={handleSearch} className=" w-full">
                        <input
                          type="text"
                          id="search-navbar"
                          name="search"
                          className="block p-1 hover:p-1.5 py-1 hover:py-1 pl-9 duration-1000  text-white hover:pl-10 focus:pl-14 hover:pr-3 focus:pr-3  hover:text-white  hover:scale-x-100 mr-1 rounded-full border search-input sm:text-sm w-full pr-2"
                          placeholder="search..." />
                      </form>
                    </div>
                  </div>
                  <CustomLink to="/" className=" text-white mb-6 pb-3 block hover:text-white">
                    {t("Home")}
                  </CustomLink >
                  <button
                    onClick={() => handleMovies(!moviesMega)}
                    onMouseEnter={() => handleMovies()}
                    className="text-white flex items-end">
                    {t("Movies")}
                    {moviesMega ?
                      (<FaCaretUp className="ml-1 text-xl" />)
                      :
                      (<FaCaretDown className="ml-1 text-xl" />)}
                  </button>
                  {moviesMega &&
                    <div onMouseLeave={() => handleMovies()} className="absolute lg:hidden block bg-[#222] border-2 border-indigo-600 md:top-16 md:left-72 rounded z-30">
                      <div className="py-5 px-4 relative mx-auto  max-w-screen-xl text-base md:px-10">
                        <ul className="mb-4 space-y-3 md:mb-0">
                          {megaMenuR3.map((m) => (
                            <li key={m.id}>
                              <Link
                                to={m.href}
                                className="duration-200 hover:text-lg  hover:text-blue-600">
                                {m.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>}
                  <button
                    onClick={() => handleMega(!mega)}
                    className=" text-white pt-3 flex  items-end">
                    Categories
                    {mega ?
                      (<FaCaretUp className="ml-1 text-xl" />)
                      :
                      (<FaCaretDown className="ml-1 text-xl" />)}
                  </button>
                  {mega && (
                    <div onMouseLeave={() => handleMega(false)} className="absolute duration-1000 transition lg:hidden block bg-[#222] border-2 rounded-md border-indigo-600 md:top-16 md:left-56 w-[90%] md:w-[60%] z-30">
                      <div className="grid py-5 px-4 relative mx-auto  max-w-screen-xl text-base grid-cols-2 md:grid-cols-3 md:px-10">
                        <ul className=" relative space-y-3 md:mb-0 md:block">
                          {megaMenuR1.map((m) => (
                            <div className="flex items-center   hover:text-blue-600 justify-start">
                              <span className="text-2xl  ">{m.icon}</span>
                              <li key={m.id}>
                                <Link
                                  to={m.href}
                                  onClick={() => setMega(!mega)}
                                  className="duration-200 ml-3 text-lg  ">
                                  {m.name}
                                </Link>
                              </li>
                            </div>
                          ))}
                        </ul>
                        <ul className="mb-4 space-y-3 md:mb-0">
                          {megaMenuR2.map((m) => (
                            <div className="flex items-center hover:text-blue-600 justify-start">
                              <span className="text-3xl  ">{m.icon}</span>
                              <li key={m.id}>
                                <Link
                                  to={m.href}
                                  onClick={() => setMega(!mega)}
                                  className="duration-200 text-lg ml-3">
                                  {m.name}
                                </Link>
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>)}
                  <CustomLink to="/pay" className=" text-white pt-3 pb-4 block hover:text-white">
                    {t("Subscribe")}
                  </CustomLink >
                  <div className="pb-3">
                    <select
                      className="border-none text-center bg-[#222] py-0 decoration-white lg:rounded-2xl rounded-md"
                      onChange={handleLanguageChange}
                      value={localStorage.getItem("i18nextLng")}>
                      <option value="en">English</option>
                      <option value="bn">বাংলা</option>
                      <option value="amharic">አማርኛ</option>
                      <option value="hindi">हिन्दी</option>
                      <option value="armenian">Հայերեն</option>
                      <option value="arabic">العربية</option>
                      <option value="russian">Russian</option>
                      <option value="ukraine">Ukraine</option>
                    </select>
                  </div>
                </div>
              </Disclosure.Panel>
              {/* mobile devices nav items end */}
            </>
          )}
        </Disclosure>
        <hr />
      </div>
    </>
  );
};

export default Header;