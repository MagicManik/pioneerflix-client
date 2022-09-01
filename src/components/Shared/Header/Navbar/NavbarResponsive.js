import { React, Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {FaAlignJustify,FaTimes,FaRegMoon, FaCaretDown,FaSearch,FaCaretUp,FaGrinAlt} from "react-icons/fa";
import {   GiDramaMasks,GiRocketThruster,GiBangingGavel,GiNewBorn,GiPapers,GiGamepad ,GiPartyPopper ,GiIncomingRocket,GiPaperClip,GiSlicedBread} from "react-icons/gi";
import userPhoto from '../../../../assets/app-logo/download.svg';
import { MdLightMode } from "react-icons/md";
import auth from "../../../../firebase.init";
import { BiLike } from "react-icons/bi";
import CustomLink from "../../customLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import pioneerFlix from "../../../../assets/app-logo/pioneerflix.png";
import "./NavbarResponsive.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Notification from "./Notification";
import { MdPlaylistAdd } from "react-icons/md";
// import useVideos from "../../../../hooks/useVideos";
import VoiceSearch from "../../SearchResults/VoiceSearch";


const megaMenuR1 = [
  { name: "Comedy", href: "/comedy", id: "293oc02c",icon:<FaGrinAlt/> },
  { name: "Drama", href: "/drama", id: "2aod030vkd",icon:<GiDramaMasks/> },
  { name: "Thriller", href: "/thriller", id: "8aod030vk",icon:<GiRocketThruster/> },
  { name: "Bangla", href: "/bangla", id: "6aod30kd" ,icon:<GiBangingGavel/>},
  { name: "Latest", href: "/latest", id: "6aod3014kd",icon:<GiNewBorn/> },
  { name: "Series", href: "/series", id: "6a5od3014kd",icon:<GiPapers/> },
];
const megaMenuR2 = [
  { name: "Live Games", href: "/games", id: "293oc02c",icon:<GiGamepad/> },
  { name: "Most Popular", href: "/popular", id: "2aod030vkd",icon:<GiPartyPopper/> },
  { name: "Clips", href: "/clips", id: "8aod030vk",icon:<GiPaperClip/> },
  { name: " Episodes", href: "/episodes", id: "6a2od30kd",icon:<GiSlicedBread/> },
  { name: "Upcoming", href: "/upComing", id: "6ao2d30kd",icon:<GiIncomingRocket/> },
];

const megaMenuR3 = [
  { name: "Bangla Movies", href: "/bangla", id: "293oc02c" },
  { name: "English Movies", href: "/english", id: "2aod030vkd" },
  { name: "Hindi Movies", href: "/hindi", id: "8aod030vk" },
  { name: "Tamil Movies", href: "/tamil", id: "6aod33w0kd" },
  { name: "Japanese Movies", href: "/Japanese", id: "6a3od30kd" },
  { name: "Chinese Movies", href: "/chinese", id: "69aod30kd" },
  { name: "Turkish Movies", href: "/turkish", id: "6ao2d30kd" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarResponsive = ({ theme, setTheme }) => {
  // const [videos] = useVideos();
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [mega, setMega] = useState(false);
  const [notification, setNotification] = useState(false);
  const [moviesMega, setMoviesMega] = useState(false);

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
    // console.log("object");
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className={
          scrollNavbar
            ? "sticky header-scrolling top-0  left-0 z-20 border-0"
            : "border-0 static lg:absolute left-0 right-0 z-20 bg-black lg:bg-transparent"
        }
      >
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div    className="max-w-8xl text-secondary mx-auto px-2 sm:px-6 lg:px-14 ">
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

                        {/* Mobile Device Logo */}
                        <img
                          className="block lg:hidden h-8 w-auto mr-20"
                          src={pioneerFlix}
                          alt="Workflow"
                        />
                      </Link>
                      <Link to={"/"}>

                        {/* Desktop Device Logo */}
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
                          className="   hover:text-error"
                        >
                          {" "}
                          {/* ........for multiple language......... */}
                          {t("Home")}
                        </CustomLink>
                        <CustomLink
                          to="/tv"
                          className="  hidden xl:block hover:text-error"
                        >
                          {/* ........for multiple language......... */}
                          {t("TVShows")}
                        </CustomLink>


                        {/* _____________________mmm_____________________ */}
                        <button
                          onClick={() => handleMovies(!moviesMega)}
                          onMouseEnter={() => handleMovies()}
                          className="   flex  items-end  hover:text-error"
                        >
                          {t("Movies")}{" "}
                          {moviesMega ? (
                            <FaCaretUp className="ml-1 text-xl" />
                          ) : (
                            <FaCaretDown className="ml-1 text-xl" />
                          )}
                        </button>

                        <button
                          onMouseEnter={() => handleMega()}
                          className="   flex  items-end  hover:text-error"
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
                          className="border-none text-center bg-[#222] py-0 decoration-white rounded-2xl"
                          onChange={handleLanguageChange}
                          value={localStorage.getItem("i18nextLng")}
                        >
                          <option value="en">English</option>
                          <option value="bn">বাংলা</option>
                          <option value="amharic">አማርኛ</option>
                          <option value="arabic">العربية</option>
                          <option value="hindi">हिन्दी</option>
                          <option value="russian">Russian</option>
                          <option value="ukraine">Ukraine</option>
                          <option value="armenian">Հայերեն</option>
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
                            className="block p-1 hover:p-1.5 py-1 hover:py-1 pl-10 duration-1000  text-white hover:pl-14 focus:pl-14 hover:pr-3 focus:pr-3  hover:text-white  hover:scale-x-100 mr-1 rounded-full border search-input sm:text-sm"
                            placeholder="search..."
                          />
                        </form>
                        <VoiceSearch></VoiceSearch>
                      </div>
                    </div>

                    {/* Voice Search Component || Shaila APu */}

                    <button
                      className="  text-xl"
                      onClick={() => setTheme(!theme)}
                    >
                      {theme ? (
                        <FaRegMoon onClick={() => handleTheme("white")} />
                      ) : (
                        <MdLightMode onClick={() => handleTheme("dark")} />
                      )}
                    </button>
                    <Notification notification={notification} setNotification={setNotification}/>
                    <Link
                      to="/solvePay"
                      className="  text-lg bg-[#d41821] hover:bg-[#ff1622] px-4 mx-3 py-1 rounded-lg hidden md:block hover:text-white"
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
                              src={user?.photoURL || userPhoto}
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


                      {/* My Profile || Manik Islam Mahi */}
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right w-[245px] absolute z-20 right-0 mt-2 rounded-[18px] shadow-lg custom-bg ring-1 ring-black ring-opacity-5 focus:outline-none py-4">
                          {/* custom-border-II */}
                          <Menu.Item>
                            {({ active }) => (
                              <img
                                className="block w-4/12 mx-auto rounded-full"
                                src={user?.photoURL || userPhoto}
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
                                to="watch/hisory"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left"
                                    : "w-full",
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <i className="fa fas fa-history mr-2"></i>
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
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <BiLike className="mr-2 text-lg" />
                                {t("Liked Videos")}
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="mylist"
                                className={classNames(
                                  active
                                    ? "bg-zinc-800 w-full text-left flex items-center"
                                    : "w-full flex items-center",
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <MdPlaylistAdd className="mr-2 text-lg"></MdPlaylistAdd>
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
                                  "block px-4 py-2 text-sm text-left"
                                )}
                              >
                                <i className="fa fal fa-film mr-2"></i>
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
                                <i className="fa fas fa-sign-out-alt mr-2"></i>
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


              {/* mobile devices togglebar menu */}
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 pl-4">

                  <CustomLink to="/" className=" text-white mb-4 block hover:text-white">
                    {" "}
                    {/* ........for multiple language......... */}
                    {t("Home")}
                  </CustomLink>

                  <CustomLink to="/movies" className=" text-white mb-4 block hover:text-white">
                    {" "}
                    {/* ........for multiple language......... */}
                    {t("Movies")}
                  </CustomLink>

                  <select
                    className="border-none text-center bg-[#222] py-0 decoration-white rounded-2xl"
                    onChange={handleLanguageChange}
                    value={localStorage.getItem("i18nextLng")}
                  >
                    <option value="en">English</option>
                    <option value="bn">বাংলা</option>
                    <option value="amharic">አማርኛ</option>
                    <option value="hindi">हिन्दी</option>
                    <option value="armenian">Հայերեն</option>
                    <option value="arabic">العربية</option>
                    <option value="russian">Russian</option>
                    <option value="ukraine">Ukraine</option>
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

                  {/* subscribe now phone version */}
                  <Link
                    to="/solvePay"
                    className=" text-white py-4 block text-lg hover:text-white"
                  >
                    {t("Subscribe")}
                  </Link>
                  <button
                    onClick={() => handleMega(!mega)}
                    className=" text-white  flex  items-end  hover:text-white"
                  >
                    Categories{" "}
                    {mega ? (
                      <FaCaretUp className="ml-1 text-xl" />
                    ) : (
                      <FaCaretDown className="ml-1 text-xl" />
                    )}
                  </button>

                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr />

        {mega && (
          <div  onMouseLeave={() => handleMega(false)} className="absolute duration-1000 transition bg-[#222] border-2 border-indigo-600 md:top-16 md:left-56 w-[90%] md:w-[60%] rounded z-30">
            <div className="grid py-5 px-4 relative mx-auto  max-w-screen-xl text-base grid-cols-2 md:grid-cols-3 md:px-10">
              <ul className=" relative space-y-3 md:mb-0 md:block">
                {megaMenuR1.map((m) => (
                  <div className="flex items-center   hover:text-blue-600 justify-start">
                    <span className="text-2xl  ">{m.icon}</span>
                    <li key={m.id}>
                    <Link
                      to={m.href}
                      onClick={() => setMega(!mega)}
                      className="duration-200 ml-3 text-lg  "
                    >
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
                      className="duration-200 text-lg ml-3  "
                    >
                      {m.name}
                    </Link>
                  </li>
                  </div>
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
            </div>
          </div>
        )}

        {moviesMega &&
          <div onMouseLeave={() =>  handleMovies()} className="absolute bg-[#222] border-2 border-indigo-600 md:top-16 md:left-72 rounded z-30">
            <div className="py-5 px-4 relative mx-auto  max-w-screen-xl text-base md:px-10">
              <ul className="mb-4 space-y-3 md:mb-0">
                {megaMenuR3.map((m) => (
                  <li key={m.id}>
                    <Link
                      to={m.href}
                      className="duration-200 hover:text-lg  hover:text-blue-600"
                    >
                      {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>}

      </div>
    </>
  );
};

export default NavbarResponsive;