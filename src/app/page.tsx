import Image from "next/image";
import ScenicNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <section className="bg-bannerImg bg-repeat bg-cover bg-bottom">
        <ScenicNavbar />
        <div className="w-full h-screen flex items-center justify-center bg-blackOverlay">
          <div className="text-white text-left w-full px-8">
            <div className="container mx-auto mb-40">
              <h1 className="text-8xl font-bold">
                Never Stop <br /> Exploring World
              </h1>
              <p className="py-3 font-semibold text-gray-400 mb-3">
                Created by Rodney Lei Estrada
              </p>
              <p className="text-lg mt-4 max-w-2xl">
                This website is your gateway to discovering the most incredible
                destinations across the globe. From hidden gems to iconic
                landmarks, we'll take you on a journey to places that inspire
                curiosity and wanderlust. Whether you’re looking for tranquil
                retreats or thrilling adventures, this platform will showcase
                the dream destinations I hope to explore. Join me in exploring
                the endless beauty our world has to offer—where every place
                tells a story and every adventure leaves a lasting impression.
              </p>
              <a
                href="/places"
                className="bg-green-600 text-white uppercase font-semibold px-6 py-3 rounded-md transition-all inline-block hover:scale-105 mt-6"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
