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

      {/* Resume Download Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
              <span className="text-gray-300 text-sm font-medium">Professional Documents</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Download My
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-white">
                Resume
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive overview of my experience, skills, and achievements in a professionally formatted document.
            </p>
            
            {/* Resume Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Standard Resume */}
              <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 border border-blue-600 rounded-full mb-6 mx-auto group-hover:bg-blue-600/30 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Standard Resume</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Traditional format with complete work history, education, and technical skills. Perfect for formal applications.
                </p>
                <div className="flex items-center justify-center text-gray-500 text-sm mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                  PDF • 2 pages • Updated Nov 2025
                </div>
                <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Download Standard Resume
                </button>
              </div>

              {/* Creative Resume */}
              <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-green-600/20 border border-green-600 rounded-full mb-6 mx-auto group-hover:bg-green-600/30 transition-colors duration-300">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Creative Resume</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Modern design showcasing projects and achievements with visual elements. Ideal for creative and tech roles.
                </p>
                <div className="flex items-center justify-center text-gray-500 text-sm mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                  PDF • 2 pages • Updated Nov 2025
                </div>
                <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                  Download Creative Resume
                </button>
              </div>
            </div>

            {/* Additional Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <button className="px-4 py-3 border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition-all duration-300 text-sm">
                <svg className="w-5 h-5 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                LinkedIn Profile
              </button>
              <button className="px-4 py-3 border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition-all duration-300 text-sm">
                <svg className="w-5 h-5 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Portfolio
              </button>
              <button className="px-4 py-3 border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition-all duration-300 text-sm">
                <svg className="w-5 h-5 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Contact
              </button>
              <button className="px-4 py-3 border border-gray-600 text-gray-300 font-medium hover:border-gray-400 hover:text-white transition-all duration-300 text-sm">
                <svg className="w-5 h-5 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                References
              </button>
            </div>

            <div className="mt-12 text-gray-500 text-sm">
              <p>All documents are regularly updated and reflect my latest experience and achievements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
