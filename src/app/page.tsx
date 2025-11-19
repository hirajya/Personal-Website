import { inter } from "@/utils/fonts";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/background-pic.jpg"
          alt="Rodney Lei Estrada - Home"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="text-white text-left w-full">
            <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
              <p className="font-semibold text-white text-lg sm:text-xl md:text-2xl">This is</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Rodney Lei Estrada.
              </h1>
              <p className="pb-3 pt-2 font-semibold text-gray-400 text-xs sm:text-sm">
                Updated as of 11/19/2025
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/rodneyleiestrada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={28} className="sm:w-8 sm:h-8" />
                </a>
                <a
                  href="https://github.com/hirajya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github size={28} className="sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Background Section */}
      <section className="bg-[#F8F8FF] py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          <p className="font-semibold text-black text-lg sm:text-xl md:text-2xl mb-4">I&apos;m a</p>
          
          <div className={`${inter} space-y-2 sm:space-y-3`}>
            <p className="text-sm sm:text-base lg:text-lg text-[#313638] leading-relaxed">
              - Former Retail Tech Intern at{" "}
              <a
                href="https://careers.ing.com/en/about-ing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:underline hover:font-semibold text-[#313638] transition-all duration-200"
              >
                ING Hubs Philippines
              </a>
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-[#313638] leading-relaxed">
              -{" "}
              <a
                href="https://pycon-apac.python.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:underline hover:font-semibold text-[#313638] transition-all duration-200"
              >
                PyCon
              </a>{" "}
              &{" "}
              <a
                href="https://python.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:underline hover:font-semibold text-[#313638] transition-all duration-200"
              >
                Python Philippines
              </a>{" "}
              Core Volunteer
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg text-[#313638] leading-relaxed">
              - Student at{" "}
              <a
                href="https://national-u.edu.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:underline hover:font-semibold text-[#313638] transition-all duration-200"
              >
                National University - Manila
              </a>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4">
              <p className="text-sm sm:text-base lg:text-lg text-[#313638]">
                - Tech Community Nomad
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[#313638]">
                - Guitar Player
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[#313638]">
                - Likes Spaghetti & Elephants
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[#313638]">
                - Anime Watcher & Manhwa Reader
              </p>
            </div>
          </div>

          <div className={`${inter} mt-6 lg:mt-8`}>
            <p className="text-sm sm:text-base lg:text-lg py-4 sm:py-6 max-w-4xl text-[#313638] leading-relaxed">
              I&apos;m passionate about learning and lifelong growth, and I love
              sharing knowledge and connecting with people through tech meetups
              and communities. Being part of these spaces has helped me grow,
              and now, I want to give back by contributing and helping others on
              their journeys. I&apos;m always looking for ways to bridge the gap
              and bring the tech community closer together.
            </p>
            
            <p className="text-sm sm:text-base lg:text-lg max-w-4xl text-[#313638] leading-relaxed">
              This is my humble story.
            </p>
          </div>
          
          <a
            href="/about"
            className="bg-green-600 text-white uppercase font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 inline-block hover:bg-green-700 hover:text-white hover:shadow-lg transform hover:-translate-y-1 mt-4 sm:mt-6 text-sm sm:text-base"
          >
            View more About Me!
          </a>
          
        </div>
      </section>
    </div>
  );
}
