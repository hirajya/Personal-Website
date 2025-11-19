"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Linkedin, Github, Menu, X } from "lucide-react";

const ScenicNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-32 py-2">
        <div className="text-2xl font-bold tracking-wide text-white p-1">
          <Link href="/">
            <Image src="/Logo_White.svg" alt="Logo" className="h-10" width={60} height={10} />
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
      </div>
      
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[55] bg-gray-900">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/" onClick={toggleMenu}>
                <Image src="/Logo_White.svg" alt="Logo" className="h-10" width={60} height={40} />
              </Link>
              <button 
                className="text-white p-2"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Navigation Items - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center px-6">
              <nav>
                <ul className="space-y-6 text-center">
                  {[
                    { href: "/", label: "HOME" },
                    { href: "/about", label: "ABOUT ME" },
                    { href: "/projects", label: "PROJECTS" },
                    { href: "/hackathons", label: "HACKATHONS" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      {pathname === href ? (
                        <span className="text-white font-bold text-3xl block py-3">
                          {label}
                        </span>
                      ) : (
                        <Link
                          href={href}
                          className="text-gray-300 font-light text-3xl block py-3 hover:text-white transition-all duration-300"
                          onClick={toggleMenu}
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Social Icons at Bottom */}
            <div className="pb-8">
              <div className="flex space-x-6 justify-center">
                <a 
                  href="mailto:rodneyestrada2425@gmail.com"
                  className="text-gray-400 hover:text-white p-4 transition-all duration-200"
                  title="Email"
                >
                  <Mail size={24} />
                </a>
                <Link
                  href="https://www.linkedin.com/in/rodneyleiestrada/"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-400 p-4 transition-all duration-200"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
                <Link 
                  href="https://github.com/hirajya" 
                  target="_blank"
                  className="text-gray-400 hover:text-white p-4 transition-all duration-200"
                  title="GitHub"
                >
                  <Github size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ScenicNavbar;