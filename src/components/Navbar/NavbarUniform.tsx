"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const UniformNavbar = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="h-15 flex items-center justify-between px-32 shadow-lg bg-gray-900">
      <div className="p-1">
        <Link href="/">
          <Image src="/LogoWhite.svg" alt="Logo" className="h-10" width={60} height={10} />
        </Link>
      </div>
      <ul className="flex space-x-6">
        {[
          { href: "/", label: "HOME" },
          { href: "/about", label: "ABOUT ME" },
          { href: "/projects", label: "PROJECTS" },
          { href: "/experience", label: "EXPERIENCE" },
        ].map(({ href, label }) => (
          <li key={href}>
            {pathname === href ? (
              <span className="text-white font-semibold text-xs px-3 py-2 rounded-sm cursor-not-allowed">
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="text-gray-200 font-light text-xs px-3 py-2 rounded-sm hover:text-gray-100 hover:underline hover:underline-offset-4 transition-all duration-300"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default UniformNavbar;
