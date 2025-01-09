import React from "react";
import Link from "next/link";
import Image from "next/image";

const ScenicNavbar = () => {
  return (
    <nav className="h-15 flex items-center justify-between px-32 shadow-lg bg-transparent">
      <div className="text-2xl font-bold tracking-wide text-white p-1">
        <Link href="/">
          <Image src="/LogoWhite.svg" alt="Logo" className="h-10" width={60} height={10} />
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-gray-300 font-medium text-xs px-3 py-2 rounded-sm hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-300 font-medium text-xs px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="text-gray-300 font-medium text-xs px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            PLACES
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-300 font-medium text-xs px-3 py-2 rounded-lg hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white transition-all duration-300">
            CONTACT
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default ScenicNavbar;
