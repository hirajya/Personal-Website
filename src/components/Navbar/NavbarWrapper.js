"use client";

import { usePathname } from "next/navigation";
import UniformNavbar from "./NavbarUniform";

const NavbarWrapper = () => {
  const pathname = usePathname(); // Get current route

  return <UniformNavbar />;
};

export default NavbarWrapper;
