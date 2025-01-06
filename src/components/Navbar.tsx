import React from "react";

const ScenicNavbar = () => {
    return (
        <nav className="h-20 flex items-center justify-between px-32 shadow-lg bg-transparent">
            <div className="text-2xl font-bold tracking-wide text-white">
                <img src="/LogoWhite.svg" alt="Logo" className="h-10" />
            </div>
            <ul className="flex space-x-6">
                <li>
                    <a
                        href="/"
                        className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300"
                    >
                        HOME
                    </a>
                </li>
                <li>
                    <a
                        href="/about"
                        className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300"
                    >
                        ABOUT
                    </a>
                </li>
                <li>
                    <a
                        href="/gallery"
                        className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300"
                    >
                        PLACES
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300"
                    >
                        CONTACT
                    </a>
                </li>
            </ul>
            <a href="/contact">
                <button className="px-4 py-2 rounded-md font-medium border-2 border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
                    Reach out
                </button>
            </a>
        </nav>
    );
};

export default ScenicNavbar;
