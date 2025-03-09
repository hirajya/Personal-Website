import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../utils/fonts";
import Footer from "@/components/Footer";
import NavbarWrapper from "../components/Navbar/NavbarWrapper"; // Import the Navbar wrapper

export const metadata: Metadata = {
  title: "RLDE",
  description: "Personal Website of Rodney Lei Estrada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>RLDE</title>
        <meta name="description" content="Personal Website of Rodney Lei Estrada" />
        <link rel="icon" href="/LogoWhite.svg" type="image/svg+xml" />
      </head>
      <body className={poppins}>
        <NavbarWrapper /> {/* Apply the wrapper here */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
