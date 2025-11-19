"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Linkedin, Github, Menu, X } from "lucide-react";

const UniformNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="h-16 flex items-center justify-between px-4 md:px-8 lg:px-32 shadow-lg bg-gray-900 relative z-50">
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
          className="md:hidden text-white p-2 z-[60]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-gray-900 bg-opacity-95 backdrop-blur-md z-[55]">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header - matches navbar height */}
            <div className="flex items-center justify-between px-4 py-2 h-16">
              <Link href="/" onClick={toggleMenu}>
                <Image src="/Logo_White.svg" alt="Logo" className="h-10" width={60} height={10} />
              </Link>
              <button 
                className="text-white p-2"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col justify-center px-6">
              <ul className="space-y-8">
                {[
                  { href: "/", label: "HOME" },
                  { href: "/about", label: "ABOUT ME" },
                  { href: "/projects", label: "PROJECTS" },
                  { href: "/hackathons", label: "HACKATHONS" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    {pathname === href ? (
                      <span className="text-white font-bold text-2xl block py-2">
                        {label}
                      </span>
                    ) : (
                      <Link
                        href={href}
                        className="text-gray-200 font-light text-2xl block py-2 hover:text-white transition-all duration-300"
                        onClick={toggleMenu}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Social Icons in Mobile Menu */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="flex space-x-6 justify-center">
                  <a 
                    href="mailto:rodneyestrada2425@gmail.com"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <Mail size={24} />
                  </a>
                  <Link
                    href="https://www.linkedin.com/in/rodneyleiestrada/"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link 
                    href="https://github.com/hirajya" 
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <Github size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UniformNavbar;