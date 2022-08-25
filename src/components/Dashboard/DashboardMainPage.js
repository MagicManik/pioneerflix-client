import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import "./DashboardMainPage.css";
import { useTranslation } from "react-i18next";
import { FiMonitor } from "react-icons/fi";
import { FaBackward } from "react-icons/fa";

const DashboardMainPage = () => {

    const { t } = useTranslation(["dashboard"])
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const { pathname } = useLocation();

    return (
        <section className="pt-16 bg-black">
            <div className="drawer drawer-mobile pt-2 bg-primary">
                <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label
                        for="sidebar-dashboard"
                        className="btn btn-secondary drawer-button lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 stroke-current"
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

                    <ul className="menu p-4 overflow-y-auto sm:w-52 w-2/3 bg-primary">
                        {/* <!-- Sidebar content here --> */}
                        <FiMonitor className="text-blue-600 text-4xl w-full justify-center" />
                        <p className="uppercase font-bold mb-2 text-blue-600 text-xl text-center">Dashboard</p>
                        <li>
                            <Link to="" className="uppercase font-bold text-secondary focus:bg-[#1f67f7]">
                                {t("My Profile")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="uploadVideo"
                                className={`uppercase font-bold text-secondary ${pathname.includes("/dashboard/uploadVideo") && "bg-[#1f67f7]"
                                    }`}
                            >
                                {t("Upload video")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="myVideos"
                                className={`uppercase font-bold text-secondary ${pathname.includes("/dashboard/myVideos") && "bg-[#1f67f7]"
                                    }`}
                            >
                                {t("My Videos")}
                            </Link>
                        </li>
                        {admin && (
                            <li>
                                <Link
                                    to="makeAdmin"
                                    className={`uppercase font-bold text-secondary ${pathname.includes("/dashboard/makeAdmin") && "bg-[#1f67f7]"
                                        }`}
                                >
                                    {t("Make Admin")}
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link
                                    to="manageVideos"
                                    className={`uppercase font-bold text-secondary ${pathname.includes("/dashboard/manageVideos") &&
                                        "bg-[#1f67f7]"
                                        }`}
                                >
                                    {t("Manage Videos")}
                                </Link>
                            </li>
                        )}
                        <label
                            for="sidebar-dashboard"
                            className="drawer-button mt-6 flex justify-end lg:hidden border"
                        >
                            <FaBackward className="text-3xl text-secondary justify-end" />
                        </label>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DashboardMainPage;
