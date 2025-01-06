import { Poppins } from "next/font/google";

// Google Font: https://fonts.google.com/specimen/Poppins
// Importing of Font Poppins

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const poppins = poppins_init.variable;
