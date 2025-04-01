import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src="/Projects/projectsPic.jpg"
          alt="Header Image"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-8 md:px-16 lg:px-32 xl:px-64 bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">About Me, Lei</h1>
        </div>
      </div>

      <div className="h-screen">page</div>
    </div>
  );
}
