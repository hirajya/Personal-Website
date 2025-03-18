"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Linkedin, Github, Menu, X } from "lucide-react"; // Added Menu and X icons

const UniformNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-15 flex items-center justify-between px-4 md:px-8 lg:px-32 shadow-lg bg-gray-900">
      {/* Logo */}
      <div className="p-1">
        <Link href="/">
          <Image
            src="/Logo_White.svg"
            alt="Logo"
            className="h-10"
            width={60}
            height={10}
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Navbar Links */}
        <ul className="flex space-x-4 mr-8">
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT ME" },
            { href: "/projects", label: "PROJECTS" },
            { href: "/hackathons", label: "HACKATHONS" },
          ].map(({ href, label }) => (
            <li key={href}>
              {pathname === href ? (
                <span className="text-white font-semibold text-[0.65rem] px-3 py-2 rounded-sm">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-gray-200 font-light text-[0.65rem] px-3 py-2 rounded-sm hover:text-gray-100 hover:underline hover:underline-offset-4 transition-all duration-300"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-3 items-center">
          <a href="mailto:rodneyestrada2425@gmail.com">
            <Mail
              className="text-gray-400 hover:text-white transition-all duration-300"
              size={15}
            />
          </a>
          <Link
            href="https://www.linkedin.com/in/rodneyleiestrada/"
            target="_blank"
          >
            <Linkedin
              className="text-gray-400 hover:text-white transition-all duration-300"
              size={15}
            />
          </Link>
          <Link href="https://github.com/hirajya" target="_blank">
            <Github
              className="text-gray-400 hover:text-white transition-all duration-300"
              size={15}
            />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-15 left-0 w-full bg-gray-900 shadow-lg z-50">
          <ul className="flex flex-col p-4">
            {[
              { href: "/", label: "HOME" },
              { href: "/about", label: "ABOUT ME" },
              { href: "/projects", label: "PROJECTS" },
              { href: "/hackathons", label: "HACKATHONS" },
            ].map(({ href, label }) => (
              <li key={href} className="py-2">
                {pathname === href ? (
                  <span className="text-white font-semibold text-sm px-3 py-2 rounded-sm">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-gray-200 font-light text-sm px-3 py-2 rounded-sm hover:text-gray-100 hover:underline hover:underline-offset-4 transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
            
            {/* Social Icons in Mobile Menu */}
            <li className="py-2">
              <div className="flex space-x-4 items-center px-3">
                <a href="mailto:rodneyestrada2425@gmail.com">
                  <Mail
                    className="text-gray-400 hover:text-white transition-all duration-300"
                    size={18}
                  />
                </a>
                <Link
                  href="https://www.linkedin.com/in/rodneyleiestrada/"
                  target="_blank"
                >
                  <Linkedin
                    className="text-gray-400 hover:text-white transition-all duration-300"
                    size={18}
                  />
                </Link>
                <Link href="https://github.com/hirajya" target="_blank">
                  <Github
                    className="text-gray-400 hover:text-white transition-all duration-300"
                    size={18}
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default UniformNavbar;