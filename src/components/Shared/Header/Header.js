import { Disclosure, Menu, Transition } from "@headlessui/react";
import { signOut } from "firebase/auth";
import i18next from "i18next";
import { Fragment, React, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";
import { BiLike } from "react-icons/bi";
import { FaAlignJustify, FaCaretDown, FaCaretUp, FaGrinAlt, FaRegClipboard, FaRegMoon, FaSearch, FaTimes } from "react-icons/fa";
import { GiDramaMasks, GiGamepad, GiNewBorn, GiSlicedBread } from "react-icons/gi";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { MdLightMode, MdOutlineAttractions, MdPlaylistAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import pioneerFlix from "../../../assets/app-logo/pioneerflix.png";
import userPhoto from '../../../assets/download.svg';
import auth from "../../../firebase.init";
import VoiceSearch from "../SearchResults/VoiceSearch";
import CustomLink from "../customLink/CustomLink";
import "./Header.css";
import Notification from "./Notification";

const megaMenuR1 = [
  { name: "Drama", href: "/drama", id: "2aod030vkdb", icon: <GiDramaMasks /> },
  { name: "Thriller", href: "/thriller", id: "8aod030vkb", icon: <MdOutlineAttractions /> },
  { name: "Clips", href: "/clips", id: "8aod030vk", icon: <FaRegClipboard /> },
  { name: "Comedy", href: "/comedy", id: "293oc02cb", icon: <FaGrinAlt /> },
];

const megaMenuR2 = [
  { name: "Latest", href: "/latest", id: "6aod3014kd", icon: <GiNewBorn /> },
  { name: " Episodes", href: "/episodes", id: "6a2od30kd", icon: <GiSlicedBread /> },
  { name: "Upcoming", href: "/upComing", id: "6ao2d3d", icon: <HiOutlinePaperAirplane /> },
  { name: "Live Games", href: "/games", id: "29c02c", icon: <GiGamepad /> },
];

const megaMenuR3 = [
  { name: "Bangla Movies", href: "/bangla", id: "293oc02c" },
  { name: "English Movies", href: "/english", id: "2aod030vkd" },
  { name: "Hindi Movies", href: "/hindi", id: "8aod0c30vk" },
  { name: "Japanese Movies", href: "/Japanese", id: "6a3od30kd" },
  { name: "Chinese Movies", href: "/chinese", id: "69aod30kd" },
  { name: "Turkish Movies", href: "/turkish", id: "6ao2d30kd" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ theme, setTheme }) => {
  const navigateResultPage = useNavigate();
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [notification, setNotification] = useState(false);
  const [voiceSearch, setVoiceSearch] = useState(false);

  const [arrow, setArrow] = useState(false);
  const arrowRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!arrowRef.current.contains(event.target)) {
        setArrow(false)
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [arrowOne, setArrowOne] = useState(false);
  const arrowRefOne = useRef();

  useEffect(() => {
    let handlerOne = (event) => {
      if (!arrowRefOne.current.contains(event.target)) {
        setArrowOne(false)
      }
    };
    document.addEventListener("mousedown", handlerOne);
    return () => {
      document.removeEventListener("mousedown", handlerOne);
    };
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedValue = e.target.search.value;
    navigateResultPage(`result/${searchedValue}`);
    e.target.reset();
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
                    {open ?
                      (<FaTimes className="block h-6 w-6" aria-hidden="true" />)
                      :
                      (<FaAlignJustify
                        className="block h-6 w-6"
                        aria-hidden="true" />)}
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
                      <div className="flex items-center space-x-4">
                        <Link
                          to="/"
                          className="home">
                          {t("Home")}
                        </Link>
                        <Menu>
                          <Menu.Button
                            ref={arrowRefOne}
                            onClick={() => setArrowOne((arrowOne) => !arrowOne)}
                            className="flex items-center text-white"
                          >
                            {t("Movies")}
                            {arrowOne ?
                              (<FaCaretUp className="ml-1 text-xl" />)
                              :
                              (<FaCaretDown className="ml-1 text-xl" />)}
                          </Menu.Button>
                          <Menu.Items className="bg-[#222] rounded-md flex gap-3 flex-col px-8 py-5 absolute z-50 md:top-16">
                            {megaMenuR3.map((m) => (
                              <Menu.Item key={m.id}>
                                {({ active }) => (
                                  <CustomLink
                                    className={`${active && 'hover:text-red-600'} duration-200 hover:text-lg`}
                                    to={m.href}>
                                    {m.name}
                                  </CustomLink>)}
                              </Menu.Item>))}
                            <Menu.Item disabled>
                              <span className="opacity-75"></span>
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>


                        <Menu>
                          <Menu.Button
                            ref={arrowRef}
                            onClick={() => setArrow((arrow) => !arrow)}
                            className="flex items-center text-white"
                          >
                            {t("Categories")}
                            {arrow ?
                              <FaCaretUp className="ml-1 text-xl" />
                              :
                              <FaCaretDown className="ml-1 text-xl" />}
                          </Menu.Button>
                          <Menu.Items className="absolute duration-1000 grid grid-cols-4 transition bg-[#222] border-2 rounded-md border-indigo-600 md:top-16 md:left-56 w-[80%] md:w-[60%] z-30 px-5 py-5 ">
                            <div className="flex gap-5 flex-col py-5">
                              {megaMenuR1.map((m) => (
                                <Menu.Item key={m.id}>
                                  {({ active }) => (
                                    <CustomLink
                                      className={`${active && 'hover:text-red-600'} duration-200 hover:text-lg flex gap-3 items-center text-base`}
                                      to={m.href}>
                                      <span className="text-xl">{m.icon}</span>
                                      {m.name}
                                    </CustomLink>)}
                                </Menu.Item>))}
                            </div>
                            <div className="flex gap-5 flex-col py-5">
                              {megaMenuR2.map((m) => (
                                <Menu.Item key={m.id}>
                                  {({ active }) => (
                                    <CustomLink
                                      className={`${active && 'hover:text-red-600'} duration-200 hover:text-lg flex gap-3 items-center text-base`}
                                      to={m.href}>
                                      <span className="text-xl">{m.icon}</span>
                                      {m.name}
                                    </CustomLink>
                                  )}
                                </Menu.Item>))}
                            </div>
                            <div className="col-end-7 col-span-4 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 p-1 rounded-xl">
                              <iframe
                                width="100%"
                                height="100%"
                                className=" rounded-2xl overflow-hidden hidden md:block zoom-div-I  "
                                src="https://www.youtube.com/embed/ztspvPYybIY"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                              </iframe>
                            </div>
                            <Menu.Item disabled>
                              <span className="opacity-75"></span>
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>


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
                                    ? "bg-zinc-800 w-full text-left flex items-center"
                                    : "w-full flex items-center",
                                  "block px-4 py-2 text-sm text-left text-white")}>
                                <i className="fa fas fa-history text-white text-sm  mr-2" />
                                {t("Watch History")}
                              </Link>)}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="likedvideos"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left flex items-center"
                                    : "w-full flex items-center",
                                  "block px-4 py-2 text-sm text-left text-white")}>
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

                  <Menu>
                    <Menu.Button
                      className="flex items-center text-white"
                    >
                      {t("Movies")}
                      {megaMenuR1 ?
                        (<FaCaretUp className="ml-1 text-xl" />)
                        :
                        (<FaCaretDown className="ml-1 text-xl" />)}
                    </Menu.Button>
                    <Menu.Items className="bg-[#222] rounded-md flex gap-3 flex-col px-5 py-3 absolute z-50">
                      {megaMenuR3.map((m) => (
                        <Menu.Item key={m.id}>
                          {({ active }) => (
                            <CustomLink
                              className={`${active && 'hover:text-red-600'} duration-200 hover:text-lg`}
                              to={m.href}>
                              {m.name}
                            </CustomLink>)}
                        </Menu.Item>))}
                      <Menu.Item disabled>
                        <span className="opacity-75"></span>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>

                  <Menu>
                    <Menu.Button className="flex items-center text-white pt-3"
                    >
                      {t("Categories")}
                      {megaMenuR1 ?
                        (<FaCaretUp className="ml-1 text-xl" />)
                        :
                        (<FaCaretDown className="ml-1 text-xl" />)}
                    </Menu.Button>
                    <Menu.Items className="bg-[#222] rounded-md flex justify-between items-center w-11/12 absolute z-50 px-5">
                      <div className="flex gap-3 flex-col py-5">
                        {megaMenuR1.map((m) => (
                          <Menu.Item key={m.id}>
                            {({ active }) => (
                              <CustomLink
                                className={`${active && 'hover:text-red-600'} duration-200 hover:text-lg flex gap-3 items-center`}
                                to={m.href}>
                                <span className="text-xl">{m.icon}</span>
                                {m.name}
                              </CustomLink>)}
                          </Menu.Item>))}
                      </div>
                      <div className="flex gap-3 flex-col py-5">
                        {megaMenuR2.map((m) => (
                          <Menu.Item key={m.id}>
                            {({ active }) => (
                              <CustomLink
                                className={`${active && 'hover:text-red-600'} duration-200 hover:text-lg flex gap-3 items-center`}
                                to={m.href}>
                                <span className="text-xl">{m.icon}</span>
                                {m.name}
                              </CustomLink>)}
                          </Menu.Item>))}
                      </div>
                      <Menu.Item disabled>
                        <span className="opacity-75"></span>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>

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