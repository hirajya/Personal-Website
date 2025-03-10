"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Linkedin, Github } from "lucide-react"; // Importing icons

const UniformNavbar = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="h-15 flex items-center justify-between px-32 shadow-lg bg-gray-900">
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

      {/* Navbar Links & Social Icons (Aligned to the Right) */}
      <div className="flex items-center space-x-6">
        {/* Navbar Links */}
        <ul className="flex space-x-4 mr-8">
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT ME" },
            { href: "/projects", label: "PROJECTS" },
            { href: "/experience", label: "EXPERIENCE" },
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
  );
};

export default UniformNavbar;
