"use client";

import React from "react";
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
  Music,
  Heart,
  Globe,
  Book,
} from "lucide-react";

export default function Page() {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111827' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header Section with Background Image - Keeping Original */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/AboutMe/aboutMePic.jpg"
          alt="About Me - Rodney Lei Estrada"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80">
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-white/20 rotate-45 opacity-30" />
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-white/20 rounded-full opacity-25" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">About Me, Lei</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-medium opacity-90">
              4th Year CS Student • Tech Community Enthusiast • Lifelong Learner
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section - Dark Theme */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="inline-block px-3 py-1 border border-gray-600 text-gray-400 text-sm font-mono mb-4">
                01 — Introduction
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Who I Am
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className={`${inter} space-y-4`}>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Good day! I&apos;m a 4th year Computer Science student scholar
                  at National University Manila, with a specialization in Machine
                  Learning. As a lifelong learner, I&apos;m passionate about
                  bridging the connection between communities and the tech world.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I&apos;m a consistent learner who enjoys collaborating to
                  achieve common goals. With strong leadership and communication
                  skills, I&apos;m committed to making education accessible for
                  everyone and contributing to the growth of the tech community.
                </p>
              </div>

              {/* Contact & Location */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-700">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="mr-3" size={20} />
                  <span className="text-sm md:text-base">rodneyestrada2425@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="mr-3" size={20} />
                  <span className="text-sm md:text-base">Manila, Philippines</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">4th</div>
                  <div className="text-gray-400 text-sm">Year Student</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">3.7</div>
                  <div className="text-gray-400 text-sm">GWA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">ML</div>
                  <div className="text-gray-400 text-sm">Specialization</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">3+</div>
                  <div className="text-gray-400 text-sm">Years Active</div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/rodneyleiestrada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <Linkedin className="inline mr-2" size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/hirajya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-4 border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white transition-all duration-300 font-medium"
                >
                  <Github className="inline mr-2" size={20} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-gray-300 text-gray-600 text-sm font-mono mb-4">
              02 — Professional Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
          </div>

          <div 
            className="group bg-gray-50 border border-gray-200 p-8 hover:shadow-xl hover:border-gray-400 transition-all duration-300"
            onMouseEnter={() => setActiveSection("experience")}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-600/20 border border-green-600 rounded-none flex items-center justify-center group-hover:bg-green-600/30 transition-colors duration-300">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">ING Hubs Philippines</h3>
                    <h4 className="text-xl font-semibold text-green-600 mb-2">Retail Tech Intern | Test Automation</h4>
                  </div>
                  <span className="text-gray-500 flex items-center font-mono text-sm">
                    <Calendar className="mr-2" size={16} />
                    March - September 2025
                  </span>
                </div>
                
                <p className={`${inter} text-gray-700 leading-relaxed mb-4`}>
                  Worked as a Retail Tech Intern focusing on Test Automation,
                  supporting the maintenance and enhancement of the test
                  framework to ensure system reliability and performance.
                  Contributed to automated testing efforts aligned with business
                  needs, particularly on the Know Your Customer (KYC) side of
                  the platform.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["Test Automation", "Framework Enhancement", "KYC Systems", "QA Testing"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Dark Theme */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="inline-block px-3 py-1 border border-gray-600 text-gray-400 text-sm font-mono mb-4">
                03 — Educational Background
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Education & Training
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {/* National University */}
            <div 
              className="group bg-gray-800/50 border border-gray-700 p-8 hover:border-gray-500 hover:bg-gray-800/70 transition-all duration-300"
              onMouseEnter={() => setActiveSection("education-nu")}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600/20 border border-purple-600 rounded-none flex items-center justify-center group-hover:bg-purple-600/30 transition-colors duration-300">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">National University - Manila</h3>
                      <h4 className="text-xl font-semibold text-purple-400 mb-2">BS Computer Science (Machine Learning Specialization)</h4>
                    </div>
                    <span className="text-gray-400 flex items-center font-mono text-sm">
                      <Calendar className="mr-2" size={16} />
                      2022 - Present
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className={`${inter} text-gray-300`}>
                      • National University Blue Scholar
                    </p>
                    <p className={`${inter} text-gray-300`}>
                      • Consistent Dean&apos;s Lister with GWA of 3.7
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {["Computer Science", "Machine Learning", "Academic Excellence", "Dean's List"].map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-purple-900/30 border border-purple-600/30 text-purple-300 text-sm font-mono"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project SPARTA & DICT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group bg-gray-800/50 border border-gray-700 p-6 hover:border-gray-500 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600 rounded-none flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Project SPARTA</h3>
                    <p className="text-blue-400 font-semibold">Data Scientist Scholar</p>
                  </div>
                </div>
                <p className={`${inter} text-gray-300 text-sm leading-relaxed mb-3`}>
                  Data science and analytics training through specialized learning pathways.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Python", "SQL", "Data Analytics", "Excel"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group bg-gray-800/50 border border-gray-700 p-6 hover:border-gray-500 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-600/20 border border-orange-600 rounded-none flex items-center justify-center">
                    <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">DICT</h3>
                    <p className="text-orange-400 font-semibold">Course Scholar</p>
                  </div>
                </div>
                <p className={`${inter} text-gray-300 text-sm leading-relaxed mb-3`}>
                  Comprehensive training in data foundations, analysis, and visualization.
                </p>
                <div className="flex flex-wrap gap-1">
                  {["Statistics", "Data Viz", "Python", "Analytics"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-orange-900/30 text-orange-300 text-xs font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - White Theme */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-gray-300 text-gray-600 text-sm font-mono mb-4">
              04 — Community Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership & Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building bridges in the tech community through leadership and collaboration
            </p>
          </div>

          <div className="space-y-8">
            {/* PyCon APAC */}
            <div className="group bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 p-8 hover:shadow-xl hover:border-red-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600/20 border border-red-600 rounded-none flex items-center justify-center group-hover:bg-red-600/30 transition-colors duration-300">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">PyCon APAC (Asia-Pacific) 2025</h3>
                      <h4 className="text-xl font-semibold text-red-600 mb-2">PyCon Chairman</h4>
                    </div>
                    <span className="text-gray-500 flex items-center font-mono text-sm">
                      <Calendar className="mr-2" size={16} />
                      October 2024 - March 2025
                    </span>
                  </div>
                  
                  <p className={`${inter} text-gray-700 leading-relaxed mb-4`}>
                    PyCon is an annual event, and Python Conference Asia-Pacific
                    (PyCon APAC 2025) is hosted by the Philippines, transitioning
                    from PyCon PH to PyCon APAC this year. Serving as
                    chairman/project manager overseeing all committees for the
                    success and execution of the event.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {["Event Management", "Team Leadership", "Project Management", "Community Building"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-red-100 text-red-800 text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Python Philippines */}
            <div className="group bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-8 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-600/20 border border-yellow-600 rounded-none flex items-center justify-center group-hover:bg-yellow-600/30 transition-colors duration-300">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Python Philippines</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="text-lg font-semibold text-yellow-600 mb-2">Board of Trustees | Secretary</h4>
                      <p className="text-gray-700 text-sm mb-2">May 2025 - Present</p>
                      <p className={`${inter} text-gray-700 text-sm leading-relaxed`}>
                        Supporting strategic planning efforts. Oversees board
                        documentation, records meeting minutes, and handles the
                        signing of official documents.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="text-lg font-semibold text-yellow-600 mb-2">Core Volunteer</h4>
                      <p className="text-gray-700 text-sm mb-2">December 2022 - Present</p>
                      <p className={`${inter} text-gray-700 text-sm leading-relaxed`}>
                        Part of the main and core volunteer handling successful and free tech meetups
                        and online sessions for everyone. Serving as committee lead for
                        consecutive years of PyCon 2023 & 2024.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Organizations Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* DEVCON */}
              <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-lg hover:border-gray-400 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-600/20 border border-indigo-600 rounded-none flex items-center justify-center">
                    <Code className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">DEVCON Pro Summit 2023</h3>
                    <p className="text-indigo-600 font-semibold text-sm">Creatives Project Manager</p>
                  </div>
                </div>
                <p className={`${inter} text-gray-700 text-sm leading-relaxed`}>
                  Managing tasks for creatives and delivering event content materials
                  for the tech conference organized by DEVCON Philippines.
                </p>
              </div>

              {/* GDSC */}
              <div className="bg-gray-50 border border-gray-200 p-6 hover:shadow-lg hover:border-gray-400 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-600 rounded-none flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">GDSC - NU Manila</h3>
                    <p className="text-green-600 font-semibold text-sm">Committee Member (OVP)</p>
                  </div>
                </div>
                <p className={`${inter} text-gray-700 text-sm leading-relaxed`}>
                  Working as a committee member enabling communication with external affairs
                  and partnerships within the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Dark Theme */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="inline-block px-3 py-1 border border-gray-600 text-gray-400 text-sm font-mono mb-4">
                05 — Technical Expertise
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Skills & Technologies
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="group bg-gray-800/50 border border-gray-700 p-8 hover:border-gray-500 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-600 rounded-none flex items-center justify-center mr-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Programming</h3>
              </div>
              <div className="space-y-3">
                {["Python", "JavaScript", "TypeScript", "Java"].map((tech) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-gray-300 font-mono">{tech}</span>
                    <span className="px-2 py-1 bg-blue-900/30 border border-blue-600/30 text-blue-300 text-xs font-mono">
                      Advanced
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="group bg-gray-800/50 border border-gray-700 p-8 hover:border-gray-500 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600/20 border border-green-600 rounded-none flex items-center justify-center mr-4 group-hover:bg-green-600/30 transition-colors duration-300">
                  <BarChart className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Data & ML</h3>
              </div>
              <div className="space-y-3">
                {["Data Analytics", "Machine Learning", "Data Visualization", "Statistics"].map((tech) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-gray-300 font-mono">{tech}</span>
                    <span className="px-2 py-1 bg-green-900/30 border border-green-600/30 text-green-300 text-xs font-mono">
                      Advanced
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Database */}
            <div className="group bg-gray-800/50 border border-gray-700 p-8 hover:border-gray-500 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600/20 border border-purple-600 rounded-none flex items-center justify-center mr-4 group-hover:bg-purple-600/30 transition-colors duration-300">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Tools & DB</h3>
              </div>
              <div className="space-y-3">
                {["SQL", "Microsoft Excel", "TensorFlow", "Test Automation"].map((tech) => (
                  <div key={tech} className="flex items-center justify-between">
                    <span className="text-gray-300 font-mono">{tech}</span>
                    <span className="px-2 py-1 bg-purple-900/30 border border-purple-600/30 text-purple-300 text-xs font-mono">
                      Proficient
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section - White Theme */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-gray-300 text-gray-600 text-sm font-mono mb-4">
              06 — Personal Side
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Beyond Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What makes me human - my interests, hobbies, and personality outside of coding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Music, title: "Guitar Player", desc: "Expressing creativity through music", color: "blue" },
              { icon: Heart, title: "Spaghetti Lover", desc: "Life's simple pleasures", color: "red" },
              { icon: Globe, title: "Elephant Enthusiast", desc: "Fascinated by these gentle giants", color: "gray" },
              { icon: Book, title: "Anime Watcher", desc: "Exploring stories and cultures", color: "purple" },
              { icon: Book, title: "Manhwa Reader", desc: "Digital storytelling appreciation", color: "green" },
              { icon: Users, title: "Tech Community Nomad", desc: "Connecting people through technology", color: "orange" }
            ].map((interest, index) => (
              <div key={index} className="group bg-gray-50 border border-gray-200 p-6 hover:shadow-lg hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 bg-${interest.color}-100 border border-${interest.color}-300 rounded-none flex items-center justify-center mb-4 group-hover:bg-${interest.color}-200 transition-colors duration-300`}>
                  <interest.icon className={`w-6 h-6 text-${interest.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{interest.title}</h3>
                <p className="text-gray-600 text-sm">{interest.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Always excited to meet fellow tech enthusiasts, share knowledge, and collaborate on meaningful projects.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:rodneyestrada2425@gmail.com"
                className="px-6 py-3 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
