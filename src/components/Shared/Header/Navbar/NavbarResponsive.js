import { React, Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  FaAlignJustify,
  FaTimes,
  FaRegBell,
  FaRegMoon,
  FaCaretDown,
  FaSearch,
  FaCaretUp,
} from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import auth from "../../../../firebase.init";
import CustomLink from "../../customLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import pioneerFlix from "../../../../assets/app-logo/pioneerflix.png";
import "./NavbarResponsive.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
// import VoiceSearch from "../../SearchResults/VoiceSearch";


const megaMenuR1 = [
  { name: "Comedy", href: "/comedy", id: "293oc02c" },
  { name: "Drama", href: "/drama", id: "2aod030vkd" },
  { name: "Thriller", href: "/thriller", id: "8aod030vk" },
  { name: "Bangla", href: "/bangla", id: "6aod30kd" },
  { name: "Latest", href: "/latest", id: "6aod3014kd" },
  { name: "Series", href: "/series", id: "6a5od3014kd" },
];
const megaMenuR2 = [
  { name: "Live Games", href: "/games", id: "293oc02c" },
  { name: "Most Popular", href: "/popular", id: "2aod030vkd" },
  { name: "Clips", href: "/clips", id: "8aod030vk" },
  { name: " Episodes", href: "/episodes", id: "6aod30kd" },
  { name: "Upcoming", href: "/upComing", id: "6ao2d30kd" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarResponsive = ({ theme, setTheme }) => {
  // const [videos] = useVideos();
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [mega, setMega] = useState(false);

  const navigateResultPage = useNavigate();

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

  const handleTheme = (colorTheme) => {
    if (colorTheme === "dark") {
      localStorage.setItem("colorTheme", colorTheme);
    } else {
      localStorage.setItem("colorTheme", colorTheme);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNavbar(true);
      setMega(false);
    } else {
      setScrollNavbar(false);
    }
  };

  //<-------------multiple Language ----------->
  const { i18n, t } = useTranslation(["profile"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log("object");
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className={
          scrollNavbar
            ? "sticky header-scrolling top-0  left-0 z-20 border-0"
            : "border-0 absolute left-0 right-0 z-20 bg-transparent"
        }
      >
        <Disclosure as="nav">
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
                      <Link to={"/"}>
                        <img
                          className="block lg:hidden h-8 w-auto"
                          src={pioneerFlix}
                          alt="Workflow"
                        />
                      </Link>
                      <Link to={"/"}>
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
                          {/* ........for multiple language......... */}
                          {t("Home")}
                        </CustomLink>
                        <CustomLink
                          to="/tv"
                          className=" text-white  hover:text-white"
                        >
                          {/* ........for multiple language......... */}
                          {t("TVShows")}
                        </CustomLink>
                        <CustomLink
                          to="/movies"
                          className=" text-white  hover:text-white"
                        >
                          {/* ........for multiple language......... */}
                          {t("Movies")}
                        </CustomLink>

                        <button
                          onClick={() => setMega(!mega)}
                          className=" text-white  flex  items-end  hover:text-white"
                        >
                          {t("Categories")}{" "}
                          {mega ? (
                            <FaCaretUp className="ml-1 text-xl" />
                          ) : (
                            <FaCaretDown className="ml-1 text-xl" />
                          )}
                        </button>

                        {/*.............. Select your Language ..............*/}
                        <select
                          className="text-center bg-[#222] py-0 decoration-white rounded-2xl"
                          onChange={handleLanguageChange}
                          value={localStorage.getItem("i18nextLng")}
                        >
                          <option value="en">English</option>
                          <option value="bn">বাংলা</option>
                          <option value="bn">አማርኛ</option>
                          <option value="bn">हिन्दी</option>
                          <option value="bn">Հայերեն</option>
                          <option value="bn">العربية</option>
                          <option value="bn">Башҡорт</option>
                          <option value="bn">Беларуская</option>
                          <option value="bn">Нохчийн</option>
                          <option value="bn">Чăваш</option>
                          <option value="bn">ᐃᓄᒃᑎᑐᑦ</option>
                          <option value="bn">ქართული</option>
                          <option value="bn">ქართული</option>
                          <option value="bn">Gĩkũyũ</option>
                          <option value="bn">Қазақша</option>
                          <option value="bn">Kuanyama</option>
                          <option value="bn">Kazakh</option>
                        </select>
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

                    {/* Voice Search Component */}
                    {/* <VoiceSearch></VoiceSearch> */}
                    <button
                      className=" text-white text-xl"
                      onClick={() => setTheme(!theme)}
                    >
                      {theme ? (
                        <FaRegMoon onClick={() => handleTheme("white")} />
                      ) : (
                        <MdLightMode onClick={() => handleTheme("dark")} />
                      )}
                    </button>

                    <button type="button" className=" text-white mx-2 md:mx-3">
                      <span className="sr-only">View notifications</span>

                      <FaRegBell className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* subscribe now pc version */}
                    <Link
                      to="/solvePay"
                      className=" text-white text-lg bg-[#d41821] hover:bg-[#ff1622] px-4 mx-3 py-1 rounded-lg hidden md:block hover:text-white"
                    >
                      {t("Subscribe")}
                    </Link>
                    {/* Profile dropdown */}
                    <Menu
                      as="div"
                      className={
                        user
                          ? "ml-3 relative  custom-border-I"
                          : "ml-3 relative"
                      }
                    >
                      <div>
                        <Menu.Button className=" flex text-sm">
                          <span className="sr-only">Open user menu</span>

                          {user ? (
                            <img
                              className="h-9 w-9 rounded-full"
                              src={user?.photoURL}
                              alt=""
                            />
                          ) : (
                            <Link
                              to="/logIn"
                              className="bg-black custom-border-II px-4 login-btn rounded-xl"
                            >
                              {t("LOG IN")}
                            </Link>
                          )}
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
                        <Menu.Items className="origin-top-right w-[255px] absolute z-20 right-0 mt-2 rounded-[12px] shadow-lg custom-bg ring-1 ring-black ring-opacity-5 focus:outline-none py-4">
                          {/* custom-border-II */}
                          <Menu.Item>
                            {({ active }) => (
                              <img
                                className="block w-4/12 mx-auto rounded-full"
                                src={user?.photoURL}
                                alt=""
                              />
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <p className=" font-bold pt-3 text-center">
                                {user?.displayName}
                              </p>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <p className="user-email text-center">
                                {user?.email}
                              </p>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/dashboard"
                                className={classNames(
                                  active ? "my-profile-btn" : "my-profile-btn"
                                )}
                              >
                                {t("My Profile")}
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="watchList"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left"
                                    : "w-full",
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <i class="fa fas fa-history mr-2"></i>
                                {t("Watch history")}
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="favorite"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left"
                                    : "w-full",
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <i class="fa fal fa-video mr-2"></i>
                                {t("Favorite Videos")}
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="favorite"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left"
                                    : "w-full",
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <i class="fa fal fa-film mr-2"></i>
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
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <i class="fa fas fa-sign-out-alt mr-2"></i>
                                {t("LOG OUT")}
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
                    {/* ........for multiple language......... */}
                    {t("Home")}
                  </CustomLink>
                  <CustomLink
                    to="/tv"
                    className=" text-white  hover:text-white"
                  >
                    {/* ........for multiple language......... */}
                    {t("TVShows")}
                  </CustomLink>
                  <CustomLink
                    id="mega-menu-full-image-dropdown"
                    to="/movies"
                    className=" text-white  hover:text-white"
                  >
                    {/* ........for multiple language......... */}
                    {t("Movies")}
                  </CustomLink>
                  {/* subscribe now phone version */}
                  <Link
                    to="/solvePay"
                    className=" text-white text-lg hover:text-white"
                  >
                    {t("Subscribe")}
                  </Link>
                  <button
                    onClick={() => setMega(!mega)}
                    className=" text-white  flex  items-end  hover:text-white"
                  >
                    Categories{" "}
                    {mega ? (
                      <FaCaretUp className="ml-1 text-xl" />
                    ) : (
                      <FaCaretDown className="ml-1 text-xl" />
                    )}
                  </button>
                  {user && (
                    <CustomLink
                      to="/dashboard"
                      className=" text-white my-3 hover:text-white"
                    >
                      {" "}
                      {/* ........for multiple language......... */}
                      {t("Dashboard")}
                    </CustomLink>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr />

        {mega && (
          <div className="absolute bg-[#222] border-2 border-indigo-600 md:top-16 md:left-56 w-[90%] md:w-[40%] rounded z-30">
            <div className="grid py-5 px-4 relative mx-auto  max-w-screen-xl text-base grid-cols-2 md:grid-cols-3 md:px-10">
              <ul className=" relative space-y-3 md:mb-0 md:block">
                {megaMenuR1.map((m) => (
                  <li key={m.id}>
                    <Link
                      to={m.href}
                      onClick={() => setMega(!mega)}
                      className="duration-200 hover:text-lg  hover:text-blue-600 "
                    >
                      {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mb-4 space-y-3 md:mb-0">
                {megaMenuR2.map((m) => (
                  <li key={m.id}>
                    <Link
                      to={m.href}
                      onClick={() => setMega(!mega)}
                      className="duration-200 hover:text-lg  hover:text-blue-600 "
                    >
                      {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <iframe
                width="100%"
                height="100%"
                className="rounded-sm hidden md:block"
                src="https://www.youtube.com/embed/sxSa0MItDkg?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <FaTimes
                onClick={() => setMega(!mega)}
                className="absolute top-2 right-2 text-secondary text-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarResponsive;
