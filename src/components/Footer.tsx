import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
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
