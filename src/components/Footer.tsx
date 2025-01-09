import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* All Rights Reserved */}
        <p className="text-xs text-center mb-2">
          &copy; {new Date().getFullYear()} Rodney Lei Estrada. All Rights Reserved.
        </p>

        {/* Image Credit */}
        <p className="text-[10px] text-center">
          Image credits to various sources. Creative Commons.
        </p>

        {/* Social Links */}
        <div className="absolute bottom-2 left-4 flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/rodneyleiestrada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            <FaLinkedin size={20} /> {/* LinkedIn Icon */}
          </Link>
          <Link
            href="https://github.com/hirajya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            <FaGithub size={20} /> {/* GitHub Icon */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
