import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";
import CustomerSpinner from "./CustomSpinner";
import loginPic from "./../assets/loginPic.jpeg";
import bg from "./../assets/banner-2.jpg";
import SLS_iconLogo from "../assets/SLS_iconLogo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { login, firebaseError, loading } = useFirebase();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    if (loading) {
        return <CustomerSpinner />;
    }
    return (
        <section
            className="gradient-form h-screen dark:bg-neutral-700"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* Left column container */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48"
                                                src={loginPic}
                                            />
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Welcome to SLS Donations
                                            </h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p className="mb-4">
                                                Please login to your account
                                            </p>
                                            {/* Username input */}
                                            <div
                                                className="relative mb-4"
                                                data-te-input-wrapper-init
                                            >
                                                <input
                                                    type="email"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput1"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            {/* Password input */}
                                            <div
                                                className="relative mb-4"
                                                data-te-input-wrapper-init
                                            >
                                                <input
                                                    type="password"
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInput11"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor="exampleFormControlInput11"
                                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                                >
                                                    Password
                                                </label>
                                            </div>

                                            {/* <!--Submit button--> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <button
                                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                    type="submit"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                    style={{
                                                        background:
                                                            "linear-gradient(to right, #ffff00, #00ff00)",
                                                    }}
                                                >
                                                    Log in
                                                </button>

                                                {firebaseError ? (
                                                    <p>{firebaseError}</p>
                                                ) : null}
                                            </div>

                                            {/* Register button */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">
                                                    Don't have an account?
                                                </p>
                                                <button
                                                    onClick={
                                                        handleRegisterClick
                                                    }
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Right column container with background and description */}
                                <div
                                    className="flex flex-col items-center justify-between rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        backgroundImage: `url(${SLS_iconLogo})`,
                                        minHeight: "100%",
                                    }}
                                >
                                    <div style={{ flex: "4" }}></div>
                                    <div
                                        className="px-4 py-6 text-white text-center md:mx-6 md:p-12"
                                        style={{ flex: "1" }}
                                    >
                                        <h4 className="mb-6 text-black text-xl font-extrabold underline">
                                            Feeding the needy, one soul at a
                                            time...
                                        </h4>
                                        <p className=" text-pink-600 font-cursive text-lg">
                                            Join us at our venture to donate for
                                            the homeless, as we make donations
                                            as easy and efficient as ordering
                                            fast food for you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
