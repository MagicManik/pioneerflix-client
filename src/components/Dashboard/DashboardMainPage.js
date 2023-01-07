import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import "./DashboardMainPage.css";
import { useTranslation } from "react-i18next";
import { FiMonitor } from "react-icons/fi";
import { FaBackward } from "react-icons/fa";
import { ImProfile } from 'react-icons/im';
import { HiCloudUpload } from 'react-icons/hi';
import { AiOutlineMonitor } from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';
import { MdOutlineManageAccounts } from 'react-icons/md';
import DbCardMainPage from "./DbCardMainPage";


const DashboardMainPage = () => {

    const { t } = useTranslation(["dashboard"])
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const { pathname } = useLocation();

    return (
        <section className="lg:pt-16 pt-1 bg-black">
            <div className="drawer drawer-mobile pt-2 bg-primary">
                <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <DbCardMainPage />
                    <Outlet />
                    <label
                        for="sidebar-dashboard"
                        className="btn btn-secondary drawer-button lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                </div>
                <div className="drawer drawer-side ">
                    <label for="sidebar-dashboard" className="drawer-overlay"></label>

                    <ul className="menu p-2 overflow-y-auto sm:w-52 w-60 bg-primary">
                        {/* <!-- Sidebar content here --> */}
                        <FiMonitor className="text-blue-600 text-4xl w-full justify-center" />
                        <p className="uppercase font-bold mb-2 text-blue-600 text-xl text-center">Dashboard</p>
                        <li>
                            <Link to="" className="uppercase font-bold text-green-500 focus:bg-[#1f67f7]">
                            <ImProfile className="text-xl text-green-500" />{t("My Profile")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="uploadVideo"
                                className={`uppercase font-bold text-green-500 ${pathname.includes("/dashboard/uploadVideo") && "bg-[#1f67f7]"
                                    }`}
                            >
                                <HiCloudUpload className="text-xl text-green-500" />{t("Upload video")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="myVideos"
                                className={`uppercase font-bold text-green-500 ${pathname.includes("/dashboard/myVideos") && "bg-[#1f67f7]"
                                    }`}
                            >
                                <AiOutlineMonitor className="text-xl text-green-500" />{t("My Videos")}
                            </Link>
                        </li>
                        {admin && (
                            <li>
                                <Link
                                    to="makeAdmin"
                                    className={`uppercase font-bold text-green-500 ${pathname.includes("/dashboard/makeAdmin") && "bg-[#1f67f7]"
                                        }`}
                                >
                                    <RiAdminLine className="text-xl text-green-500" />{t("Make Admin")}
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link
                                    to="manageVideos"
                                    className={`uppercase font-bold text-green-500 ${pathname.includes("/dashboard/manageVideos") &&
                                        "bg-[#1f67f7]"
                                        }`}
                                >
                                    <MdOutlineManageAccounts className="text-xl text-green-500" />{t("Manage Videos")}
                                </Link>
                            </li>
                        )}
                        <label
                            for="sidebar-dashboard"
                            className="drawer-button mt-6 flex justify-end lg:hidden border"
                        >
                            <FaBackward className="text-3xl text-green-500 justify-end" />
                        </label>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DashboardMainPage;
