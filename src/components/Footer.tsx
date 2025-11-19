import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links - moved to top for mobile */}
          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/rodneyleiestrada/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/hirajya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition-colors"
            >
              <FaGithub size={24} />
            </Link>
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Rodney Lei Estrada. All Rights Reserved.
          </p>

          {/* Image Credit */}
          <p className="text-xs text-center text-gray-400">
            Image credits to various sources. Creative Commons.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
