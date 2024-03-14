import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerSpinner from "./CustomSpinner";
import useFirebase from "../Firebase/useFirebase";
import SLS_iconLogo from "../assets/SLS_iconLogo.png";
import registerPagePic from "../assets/registerPagePic.png";


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { register, loading, firebaseError } = useFirebase();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        register(username, password);
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    if (loading) {
        return <CustomerSpinner />;
    }

    return (
        <section className="h-screen"
            style={{
                backgroundImage: `url(${registerPagePic})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
                <div className="h-full mx-4 md:mx-8 lg:mx-16">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        {/* Left column container with background */}
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src={SLS_iconLogo}
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>

                        {/* Right column container */}
                        <div 
                            className="mb-12 md:mb-0 md:w-6/12 lg:w-6/12 xl:w-6/12 bg-black bg-opacity-100 rounded-lg shadow-lg"
                            >
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-row items-center justify-center lg:justify-start font-cursive">
                                        <p className="mb-0 mr-4 text-2xl">Join us today, kind souls!</p>
                                    </div>

                                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-green-500 after:mt-0.5 after:flex-1 after:border-t after:border-green-500">
                                        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                            Register
                                        </p>
                                    </div>

                                    {/* Email input */}
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="email"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="peer block min-h-[auto] w-full rounded border border-green-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            placeholder="Email address"
                                            required
                                        />
                                        <label
                                            htmlFor="username"
                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >
                                            Email address
                                        </label>
                                    </div>

                                    {/* Password input */}
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="peer block min-h-[auto] w-full rounded border border-green-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            placeholder="Password"
                                            required
                                        />
                                        <label
                                            htmlFor="password"
                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >
                                            Password
                                        </label>
                                    </div>   

                                    {/* Register button */}
                                    <div className="text-center lg:text-left">
                                        <button
                                            type="submit"
                                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            style={{
                                                background:
                                                    "linear-gradient(to right, #ffff00, #00ff00)",
                                            }}
                                        >
                                            Register
                                        </button>
                                    </div>
                                    {/* Login button */}
                                    <div className="flex items-center bg-blue-400 justify-center">
                                                <p className="mb-0 mr-2 text-red-600 font-bold underline">
                                                    Already have an account?
                                                </p>
                                                <button
                                                    onClick = {handleLoginClick}
                                                    type="button"
                                                    className="inline-block rounded border-2 border-danger border-red-600 px-6 pb-[6px] pt-2 text-xs font-extrabold uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                    {firebaseError ? <p className="text-center text-red-600">{firebaseError}</p> : null}
                                </form>
                        </div>
                    </div>
                </div>
        </section>                        
    );
};

export default Register;
