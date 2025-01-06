import React from "react";
import Link from "next/link";
import Image from "next/image";

const ScenicNavbar = () => {
  return (
    <nav className="h-20 flex items-center justify-between px-32 shadow-lg bg-transparent">
      <div className="text-2xl font-bold tracking-wide text-white">
        <Link href="/">
          <Image src="/LogoWhite.svg" alt="Logo" className="h-10" width={100} height={40} />
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            PLACES
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-300 font-medium text-lg px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            CONTACT
          </Link>
        </li>
      </ul>
      <Link href="/contact">
        <button className="px-4 py-2 rounded-md font-medium border-2 border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
          Reach out
        </button>
      </Link>
    </nav>
  );
};

export default ScenicNavbar;
