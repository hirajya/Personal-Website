import { Poppins, Inter } from "next/font/google";

// Google Font: https://fonts.google.com/specimen/Poppins
// Importing of Font Poppins
const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Import Inter (Only Used When Assigned)
const inter_init = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = poppins_init.variable; // Default font
export const inter = inter_init.variable; // Manually assigned font

// Export a convenience class name for using Inter directly
export const interClass = "font-inter";