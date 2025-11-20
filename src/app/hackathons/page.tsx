"use client";

import React from "react";
import Image from "next/image";

// Hackathon data - replace with your actual hackathon experiences
const hackathons = [
  {
    id: 1,
    title: "TechCrunch Disrupt Hackathon",
    date: "October 2025",
    location: "San Francisco, CA",
    duration: "48 hours",
    description:
      "Built an AI-powered financial advisor app that helps users make informed investment decisions using real-time market data and machine learning algorithms.",
    project: "FinanceAI Assistant",
    technologies: [
      "React Native",
      "Python",
      "TensorFlow",
      "Firebase",
      "Alpha Vantage API",
    ],
    achievement: "1st Place Winner",
    prize: "$10,000",
    teamSize: 4,
    github: "https://github.com/yourusername/financeai-hackathon",
    demo: "https://devpost.com/your-project",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Google Developer Student Clubs Hackathon",
    date: "September 2025",
    location: "Virtual",
    duration: "36 hours",
    description:
      "Developed a sustainable transportation app that gamifies eco-friendly commuting and connects users with carpooling opportunities.",
    project: "EcoCommute",
    technologies: [
      "Flutter",
      "Node.js",
      "MongoDB",
      "Google Maps API",
      "Socket.io",
    ],
    achievement: "2nd Place",
    prize: "$5,000",
    teamSize: 3,
    github: "https://github.com/yourusername/ecocommute",
    demo: "https://ecocommute-demo.com",
    featured: true,
    category: "Sustainability",
  },
  {
    id: 3,
    title: "NASA Space Apps Challenge",
    date: "August 2025",
    location: "Houston, TX",
    duration: "48 hours",
    description:
      "Created a Mars terrain visualization tool using satellite data to help mission planners identify optimal landing sites for future Mars expeditions.",
    project: "Mars Landing Navigator",
    technologies: ["Three.js", "React", "NASA APIs", "WebGL", "Python"],
    achievement: "Best Use of NASA Data",
    prize: "NASA Internship Opportunity",
    teamSize: 5,
    github: "https://github.com/yourusername/mars-navigator",
    demo: "https://mars-navigator.space",
    featured: false,
    category: "Space Tech",
  },
  {
    id: 4,
    title: "Meta Reality Hack",
    date: "July 2025",
    location: "Menlo Park, CA",
    duration: "60 hours",
    description:
      "Built an immersive VR education platform that allows students to explore historical events and scientific concepts in virtual reality environments.",
    project: "HistoryVR",
    technologies: ["Unity", "C#", "Oculus SDK", "Blender", "Firebase"],
    achievement: "Most Innovative Project",
    prize: "$7,500",
    teamSize: 4,
    github: "https://github.com/yourusername/history-vr",
    demo: "https://history-vr-demo.com",
    featured: false,
    category: "VR/AR",
  },
  {
    id: 5,
    title: "Blockchain for Good Hackathon",
    date: "June 2025",
    location: "New York, NY",
    duration: "72 hours",
    description:
      "Developed a decentralized supply chain tracking system to ensure transparency and authenticity in organic food distribution.",
    project: "FarmChain",
    technologies: ["Solidity", "Ethereum", "React", "IPFS", "Web3.js"],
    achievement: "People&apos;s Choice Award",
    prize: "$3,000",
    teamSize: 3,
    github: "https://github.com/yourusername/farmchain",
    demo: "https://farmchain.eth",
    featured: false,
    category: "Blockchain",
  },
  {
    id: 6,
    title: "Health Tech Innovation Challenge",
    date: "May 2025",
    location: "Boston, MA",
    duration: "48 hours",
    description:
      "Created a mental health support app using AI to provide personalized meditation sessions and mood tracking with real-time feedback.",
    project: "MindfulAI",
    technologies: [
      "React Native",
      "Express.js",
      "PostgreSQL",
      "OpenAI API",
      "Chart.js",
    ],
    achievement: "Best Healthcare Solution",
    prize: "$8,000",
    teamSize: 4,
    github: "https://github.com/yourusername/mindful-ai",
    demo: "https://mindful-ai-demo.com",
    featured: false,
    category: "HealthTech",
  },
  {
    id: 7,
    title: "Local University Hackathon",
    date: "April 2025",
    location: "Campus",
    duration: "24 hours",
    description:
      "My first hackathon experience! Built a simple campus event discovery app to help students find and join activities happening around university.",
    project: "Campus Connect",
    technologies: ["JavaScript", "HTML/CSS", "Firebase", "Bootstrap"],
    achievement: "Best Beginner Project",
    prize: "$500",
    teamSize: 2,
    github: "https://github.com/yourusername/campus-connect",
    demo: "https://campus-connect-demo.com",
    featured: false,
    category: "Web App",
  },
];

const categories = [
  "All",
  "AI/ML",
  "Sustainability",
  "Space Tech",
  "VR/AR",
  "Blockchain",
  "HealthTech",
  "Web App",
];

export default function HackathonsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [timelineView, setTimelineView] = React.useState(false);
  const [activeHackathon, setActiveHackathon] = React.useState<number | null>(
    null
  );

  const filteredHackathons =
    selectedCategory === "All"
      ? hackathons
      : hackathons.filter(
          (hackathon) => hackathon.category === selectedCategory
        );

  const featuredHackathons = hackathons.filter(
    (hackathon) => hackathon.featured
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111827' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Section with Dark Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-600 rotate-45 opacity-20" />
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-600 rotate-12 opacity-30" />
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-gray-500 rounded-full opacity-25" />
        </div>

        <div className="relative z-10 px-4 md:px-8 lg:px-16 xl:px-32 py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                  <span className="text-white">Hackathon</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-white">
                    Journey
                  </span>
                </h1>

                <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                  Competitive programming meets innovation. Building
                  breakthrough solutions under pressure.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {hackathons.length}
                    </div>
                    <div className="text-gray-400 text-sm">Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {
                        hackathons.filter(
                          (h) =>
                            h.achievement.includes("Place") ||
                            h.achievement.includes("Winner")
                        ).length
                      }
                    </div>
                    <div className="text-gray-400 text-sm">Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {hackathons.reduce((total, h) => total + h.teamSize, 0)}
                    </div>
                    <div className="text-gray-400 text-sm">Teammates</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button
                    onClick={() =>
                      document
                        .getElementById("featured-hackathons")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-none hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-1"
                  >
                    View Achievements
                  </button>
                  <button
                    onClick={() => setTimelineView(!timelineView)}
                    className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition-all duration-300"
                  >
                    {timelineView ? "Grid View" : "Timeline View"}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square relative">
                  <Image
                    src="/Hackathon/hackathonPic.jpeg"
                    alt="Hackathon Experience"
                    fill
                    className="object-cover filter grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
                    style={{
                      clipPath: "polygon(0 0, 85% 0, 100% 85%, 15% 100%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Hackathons - Dark Section */}
      <section
        id="featured-hackathons"
        className="py-24 px-4 md:px-8 lg:px-16 xl:px-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="inline-block px-3 py-1 border border-gray-600 text-gray-400 text-sm font-mono mb-4">
                01 — Featured Achievements
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Championship Wins
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center text-gray-500 text-sm">
                <div className="w-12 h-px bg-gray-600 mr-3" />
                {featuredHackathons.length} Winners
              </div>
            </div>
          </div>

          <div className="space-y-24">
            {featuredHackathons.map((hackathon) => (
              <div
                key={hackathon.id}
                className="group relative"
                onMouseEnter={() => setActiveHackathon(hackathon.id)}
                onMouseLeave={() => setActiveHackathon(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div
                    className={`lg:col-span-7 ${
                      hackathon.id % 2 === 0 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                      <Image
                        src="/Hackathon/hackathonPic.jpeg"
                        alt={hackathon.title}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/20 transition-all duration-500" />

                      {/* Achievement Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-none text-sm font-bold shadow-lg">
                          🏆 {hackathon.achievement}
                        </div>
                      </div>

                      {/* Project Links Overlay */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                          activeHackathon === hackathon.id
                            ? "translate-y-0"
                            : "translate-y-4"
                        }`}
                      >
                        <div className="flex gap-4">
                          <a
                            href={hackathon.github}
                            className="p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-colors duration-200"
                          >
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                          <a
                            href={hackathon.demo}
                            className="p-4 bg-white/10 backdrop-blur-sm border border-gray-700 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-200"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 ${
                      hackathon.id % 2 === 0 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-mono text-sm">
                          {hackathon.date} — {hackathon.duration}
                        </span>
                        <span className="px-3 py-1 border border-gray-600 text-gray-400 text-xs font-mono">
                          {hackathon.category}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                        {hackathon.title}
                      </h3>

                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            />
                          </svg>
                          {hackathon.location}
                        </span>
                        <span>Team of {hackathon.teamSize}</span>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-300 mb-2">
                          Project: {hackathon.project}
                        </h4>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {hackathon.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="text-gray-500 text-sm font-mono">
                          Technologies:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {hackathon.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm font-mono hover:border-gray-500 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="text-green-400 font-bold text-lg">
                          {hackathon.prize}
                        </div>
                        <div className="text-yellow-400 font-medium">
                          {hackathon.achievement}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Hackathons Section - White Background */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 border border-gray-300 text-gray-600 text-sm font-mono mb-4">
              02 — Complete Archive
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All Hackathons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              A comprehensive timeline of innovation challenges and breakthrough
              solutions
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {timelineView ? (
            /* Timeline View */
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>
              {filteredHackathons.map((hackathon) => (
                <div
                  key={hackathon.id}
                  className={`relative flex items-center mb-12 ${
                    hackathon.id % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      hackathon.id % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gray-50 p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-gray-900 text-white text-sm font-medium">
                          {hackathon.category}
                        </span>
                        <span className="text-sm text-gray-600">
                          {hackathon.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {hackathon.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {hackathon.location} • {hackathon.duration}
                      </p>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {hackathon.project}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">
                        {hackathon.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium">
                          {hackathon.achievement}
                        </span>
                        <span className="text-green-600 font-semibold text-sm">
                          {hackathon.prize}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gray-900 border-4 border-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredHackathons.map((hackathon) => (
                <div
                  key={hackathon.id}
                  className="group bg-gray-50 border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gray-900 text-white text-sm font-medium">
                        {hackathon.category}
                      </span>
                      <span className="text-sm text-gray-600">
                        {hackathon.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                      {hackathon.title}
                    </h3>
                    <div className="text-sm text-gray-600 mb-3">
                      {hackathon.location} • {hackathon.duration}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {hackathon.project}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {hackathon.description.slice(0, 120)}...
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {hackathon.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-200 text-gray-700 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {hackathon.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs">
                          +{hackathon.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium">
                          {hackathon.achievement}
                        </span>
                        <span className="text-green-600 font-semibold text-sm">
                          {hackathon.prize}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={hackathon.github}
                          className="flex-1 text-center py-2 px-3 border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
                        >
                          Code
                        </a>
                        <a
                          href={hackathon.demo}
                          className="flex-1 text-center py-2 px-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
