import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../utils/fonts";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>RLDE Go-To</title>
        <meta name="RLDE Go-To" content="Places that i want to travel" />
        <link rel="icon" href="/LogoWhite.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${poppins} `}
      >
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
