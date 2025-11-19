import Image from "next/image";
import { inter } from "@/utils/fonts";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Code,
  Database,
  BarChart,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Image */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/AboutMe/aboutMePic.jpg"
          alt="About Me - Rodney Lei Estrada"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8 lg:px-16 xl:px-32 bg-black bg-opacity-60">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About Me, Lei
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-medium opacity-90">
              4th Year CS Student • Tech Community Leader • Lifelong Learner
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Introduction Section */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="mr-3 text-blue-600" size={32} />
              Introduction
            </h2>
            <div className={`${inter} space-y-4`}>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Good day! I&apos;m a 4th year Computer Science student scholar
                at National University Manila, with a specialization in Machine
                Learning. As a lifelong learner, I&apos;m passionate about
                bridging the connection between communities and the tech world.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                I&apos;m a consistent learner who enjoys collaborating to
                achieve common goals. With strong leadership and communication
                skills, I&apos;m committed to making education accessible for
                everyone and contributing to the growth of the tech community.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:rodneyestrada2425@gmail.com"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                <span className="text-sm md:text-base">
                  rodneyestrada2425@gmail.com
                </span>
              </a>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2" size={20} />
                <span className="text-sm md:text-base">
                  Manila, Philippines
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/in/rodneyleiestrada/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="mr-2" size={20} />
                <span className="text-sm md:text-base">LinkedIn</span>
              </a>
              <a
                href="https://github.com/hirajya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
              >
                <Github className="mr-2" size={20} />
                <span className="text-sm md:text-base">GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Briefcase className="mr-3 text-green-600" size={32} />
              Professional Experience
            </h2>

            <div className="space-y-8">
              {/* ING Hubs */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    ING Hubs Philippines
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    March - September 2025
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
                  Retail Tech Intern | Test Automation
                </h4>
                <p
                  className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed`}
                >
                  Worked as a Retail Tech Intern focusing on Test Automation,
                  supporting the maintenance and enhancement of the test
                  framework to ensure system reliability and performance.
                  Contributed to automated testing efforts aligned with business
                  needs, particularly on the Know Your Customer (KYC) side of
                  the platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-purple-600" size={32} />
              Education
            </h2>

            <div className="space-y-8">
              {/* National University */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    National University - Manila
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    2022 - Present
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-purple-600 mb-2">
                  BS Computer Science (Machine Learning Specialization)
                </h4>
                <div className="space-y-2">
                  <p className={`${inter} text-gray-700 text-sm md:text-base`}>
                    • National University Blue Scholar
                  </p>
                  <p className={`${inter} text-gray-700 text-sm md:text-base`}>
                    • Consistent Dean&apos;s Lister with GWA of 3.7
                  </p>
                </div>
              </div>

              {/* Project SPARTA */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Project SPARTA
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    2022
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
                  Data Scientist Scholar
                </h4>
                <p
                  className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed mb-2`}
                >
                  Project SPARTA scholars take courses on various fields of data
                  science and analytics through their learning pathways.
                </p>
                <p className={`${inter} text-gray-600 text-sm font-semibold`}>
                  Skills: Microsoft Excel, SQL, Python, Data Visualization, Data
                  Analytics
                </p>
              </div>

              {/* DICT */}
              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    DICT
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    2022
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-orange-600 mb-2">
                  Course Scholar
                </h4>
                <p
                  className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed mb-2`}
                >
                  Completed various courses about Foundations, Analyzing Data,
                  Statistics, and Data Visualization in Python.
                </p>
                <p className={`${inter} text-gray-600 text-sm font-semibold`}>
                  Skills: Data Analytics, Data Visualization, Python
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Organizations Section */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Award className="mr-3 text-red-600" size={32} />
              Leadership & Organizations
            </h2>

            <div className="space-y-8">
              {/* PyCon APAC */}
              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    PyCon APAC (Asia-Pacific) 2025
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    October 2024 - March 2025
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-red-600 mb-3">
                  PyCon Chairman
                </h4>
                <p
                  className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed`}
                >
                  PyCon is an annual event, and Python Conference Asia-Pacific
                  (PyCon APAC 2025) is hosted by the Philippines, transitioning
                  from PyCon PH to PyCon APAC this year. Serving as
                  chairman/project manager overseeing all committees for the
                  success and execution of the event.
                </p>
              </div>

              {/* Python Philippines */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Python Philippines
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    May 2025 - Present & December 2022 - Present
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-yellow-600 mb-2">
                      Board of Trustees | Secretary
                    </h4>
                    <p
                      className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed`}
                    >
                      Supporting strategic planning efforts. Oversees board
                      documentation, records meeting minutes, and handles the
                      signing of official documents, contributing to the
                      organization&apos;s governance, compliance, and
                      community-driven mission.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-yellow-600 mb-2">
                      Core Volunteer
                    </h4>
                    <p
                      className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed`}
                    >
                      Part of the main and core volunteer for Python Philippines
                      handling successful and free tech meetups and online
                      sessions for everyone. Serving as committee lead for
                      consecutive years of PyCon 2023 & 2024.
                    </p>
                  </div>
                </div>
              </div>

              {/* DEVCON Pro Summit */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    DEVCON Pro Summit 2023
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    June - October 2023
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-indigo-600 mb-3">
                  Creatives Project Manager
                </h4>
                <p
                  className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed`}
                >
                  DEVCON Pro Summit 2023, a conference for tech geeks organized
                  by DEVCON Philippines. Worked closely with event heads,
                  managing tasks for creatives and delivering event content
                  materials. Also acted as an all-around seasonal volunteer for
                  DEVCON Philippines.
                </p>
              </div>

              {/* GDSC */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Google Developer Student Club (GDSC) - NU Manila
                  </h3>
                  <span className="text-sm md:text-base text-gray-500 flex items-center mt-1 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    September 2024 - May 2025
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-green-600 mb-3">
                  Committee Member (Office of the Vice President)
                </h4>
                <p
                  className={`${inter} text-gray-700 text-sm md:text-base leading-relaxed`}
                >
                  GDSC NU Manila is a tech student organization. Working as a
                  committee member enables communication with external affairs
                  and partnerships within the organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 md:mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <Code className="mr-3 text-blue-600" size={32} />
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Programming Languages */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Code className="mr-2 text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Programming
                  </h3>
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Python
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    JavaScript
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    TypeScript
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Java
                  </span>
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <BarChart className="mr-2 text-green-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Data & Analytics
                  </h3>
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Data Analytics
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Data Visualization
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Machine Learning
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Statistics
                  </span>
                </div>
              </div>

              {/* Database & Tools */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Database className="mr-2 text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Database & Tools
                  </h3>
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    SQL
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Microsoft Excel
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    TensorFlow
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2 mb-2">
                    Test Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Beyond Tech
            </h2>
            <div className={`${inter} grid grid-cols-1 md:grid-cols-2 gap-6`}>
              <div className="space-y-3">
                <p className="text-gray-700 text-sm md:text-base">
                  🎸 <strong>Music:</strong> Guitar Player
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  🍝 <strong>Food:</strong> Loves Spaghetti
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  🐘 <strong>Animals:</strong> Elephant Enthusiast
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700 text-sm md:text-base">
                  📺 <strong>Entertainment:</strong> Anime Watcher
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  📚 <strong>Reading:</strong> Manhwa Reader
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  🌐 <strong>Community:</strong> Tech Community Nomad
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
