import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";
import SLS_Logo from "./../assets/SLS_Logo.png";

const Navigation = () => {
    const { user, logOut } = useFirebase();
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white rounded-lg shadow dark:bg-gray-900 m-1">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={SLS_Logo} className="h-8 mr-3" alt="Logo" />
                <span className="font-semibold text-xl tracking-tight">
                    SLS Donations
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <NavLink
                        to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/NGOs"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        Affiliated NGOs
                    </NavLink>
                    {user?.email && user?.email === "admin@gmail.com" ? (
                        <NavLink
                            to="/admin-panel"
                            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                        >
                            Admin Panel
                        </NavLink>
                    ) : null}
                </div>
                {!user?.email ? (
                    <>
                        <div>
                            <NavLink
                                to="/login"
                                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-4"
                            >
                                Sign In
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/register"
                                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                            >
                                Register
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <button onClick={logOut}>Log out</button>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
