import { inter } from "@/utils/fonts";
import { Linkedin, Github } from "lucide-react"; // Added Menu and X icons


export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="bg-bannerImg bg-repeat bg-cover bg-[center_80%] h-[50vh] flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center bg-blackOverlay">
          <div className="text-white text-left w-full px-8 md:px-16 lg:px-32 xl:px-64 xl:ml-44">
            <div className="container mx-auto">
              <p className="font-semibold text-white text-2xl">This is</p>
              <h1 className="text-6xl font-bold">Rodney Lei Estrada.</h1>
              <p className="pb-3 pt-2 font-semibold text-gray-400 text-xs">
                Updated as of 3/18/2025
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/rodneyleiestrada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-all"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="https://github.com/hirajya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-all"
                >
                  <Github size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Background Section */}
      <section className="bg-[#F8F8FF] py-12">
        <div className="container mx-auto px-8 md:px-16 lg:px-32 xl:px-64">
          <p className="font-semibold text-black text-2xl">I&apos;m a</p>
          <p style={{ fontFamily: 'var(--font-inter)' }} className="text-md mt-4 max-w-2xl">
            - Retail Tech Intern at{" "}
            <a
              href="https://careers.ing.com/en/about-ing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline hover:underline hover:font-semibold"
            >
              ING Hubs Philippines
            </a>
            <br />-{" "}
            <a
              href="https://pycon-apac.python.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline hover:underline hover:font-semibold"
            >
              PyCon
            </a>{" "}
            &{" "}
            <a
              href="https://python.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline hover:underline hover:font-semibold"
            >
              Python Philippines
            </a>{" "}
            Core Volunteer <br />- Student at{" "}
            <a
              href="https://national-u.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline hover:underline hover:font-semibold"
            >
              National University - Manila
            </a>
            <br />
            - Tech Community Nomad <br />
            - Guitar Player <br />
            - Likes Spaghetti & Elephants <br />
            - Anime Watcher & Manhwa Reader <br />
          </p>

          <div className={`${inter}`}>
            <p
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-md py-6 max-w-2xl"
            >
              I&apos;m passionate about learning and lifelong growth, and I love
              sharing knowledge and connecting with people through tech meetups
              and communities. Being part of these spaces has helped me grow,
              and now, I want to give back by contributing and helping others on
              their journeys. I&apos;m always looking for ways to bridge the gap
              and bring the tech community closer together.
              <br />
              <br />
              This is my humble story.
            </p>
          </div>
          
          <a
            href="/about"
            className="bg-green-600 text-white uppercase font-semibold px-6 py-2 rounded-md transition-all inline-block hover:text-black mt-2"
          >
            View more About Me!
          </a>
          
        </div>
      </section>
      
    </div>
  );
}
