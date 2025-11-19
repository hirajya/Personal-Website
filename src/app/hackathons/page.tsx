import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/Hackathon/hackathonPic.jpeg"
          alt="Hackathons - Rodney Lei Estrada"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8 lg:px-16 xl:px-32 bg-black bg-opacity-60">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hackathons
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-medium opacity-90">
              My Journey Through Competitive Programming & Innovation
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen">page</div>
    </div>
  );
}
