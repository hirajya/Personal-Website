"use client";

import { usePathname } from "next/navigation";
import ScenicNavbar from "./NavbarMain";
import UniformNavbar from "./NavbarUniform";

const NavbarWrapper = () => {
  const pathname = usePathname(); // Get current route

  return pathname === "/" ? <ScenicNavbar /> : <UniformNavbar />;
};

export default NavbarWrapper;
