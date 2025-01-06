import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <Link
            href="https://www.linkedin.com/in/rodneyleiestrada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/hirajya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400"
          >
            GitHub
          </Link>
        </div>

        {/* All Rights Reserved */}
        <p className="text-sm text-center mb-2">
          &copy; {new Date().getFullYear()} Rodney Lei Estrada. All Rights Reserved.
        </p>

        {/* Image Credit */}
        <p className="text-xs text-center">
          Image credits to various sources. Creative Commons.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
