import SLS_Logo from "./../assets/SLS_Logo.png";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                        <img src={SLS_Logo} className="h-8 mr-3" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            SLS Donations
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                className="mr-4 hover:underline md:mr-6"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/"
                                className="mr-4 hover:underline md:mr-6 "
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.twitter.com/"
                                className="hover:underline"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="#" className="hover:underline">
                        SLS Donations™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
