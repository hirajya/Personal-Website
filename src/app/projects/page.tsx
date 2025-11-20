"use client";

import React from "react";
import Image from "next/image";

// Project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    imageUrl: "/Projects/projectsPic.jpg",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://your-ecommerce-demo.com",
    featured: true,
    category: "Full Stack",
    year: "2024",
    status: "Production"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
    imageUrl: "/Projects/projectsPic.jpg",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-manager.com",
    featured: true,
    category: "Frontend",
    year: "2024",
    status: "Beta"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy using advanced language models.",
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
    imageUrl: "/Projects/projectsPic.jpg",
    githubUrl: "https://github.com/yourusername/ai-content-generator",
    liveUrl: "https://your-ai-tool.com",
    featured: false,
    category: "AI/ML",
    year: "2023",
    status: "Development"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasting, interactive maps, and historical weather data visualization.",
    technologies: ["Vue.js", "Chart.js", "Weather API", "Geolocation API"],
    imageUrl: "/Projects/projectsPic.jpg",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-app.com",
    featured: false,
    category: "Frontend",
    year: "2023",
    status: "Production"
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "A secure, transparent voting system built on blockchain technology ensuring tamper-proof elections and voter anonymity.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "MetaMask"],
    imageUrl: "/Projects/projectsPic.jpg",
    githubUrl: "https://github.com/yourusername/blockchain-voting",
    liveUrl: "https://your-voting-system.com",
    featured: false,
    category: "Blockchain",
    year: "2024",
    status: "Concept"
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for social media managers to track engagement, growth metrics, and audience insights across multiple platforms.",
    technologies: ["Django", "Python", "Redis", "Celery", "Chart.js", "PostgreSQL"],
    imageUrl: "/Projects/projectsPic.jpg",
    githubUrl: "https://github.com/yourusername/social-analytics",
    liveUrl: "https://your-analytics-platform.com",
    featured: false,
    category: "Backend",
    year: "2023",
    status: "Production"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML", "Blockchain"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [activeProject, setActiveProject] = React.useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section with Background Image - Like About Me page */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/Projects/projectsPic.jpg"
          alt="Projects - Creative Solutions"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Portfolio Showcase</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Creative</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300">
                Solutions
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-medium opacity-90">
              Exploring the intersection of design and technology through digital experiences
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-24 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="inline-block px-3 py-1 border border-gray-600 text-gray-400 text-sm font-mono mb-4">
                01 — Featured Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Selected Projects
              </h2>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center text-gray-500 text-sm">
                <div className="w-12 h-px bg-gray-600 mr-3" />
                {featuredProjects.length} Featured
              </div>
            </div>
          </div>

          <div className="space-y-24">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className={`lg:col-span-7 ${project.id % 2 === 0 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/20 transition-all duration-500" />
                      
                      {/* Project Links Overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                        activeProject === project.id ? 'translate-y-0' : 'translate-y-4'
                      }`}>
                        <div className="flex gap-4">
                          <a
                            href={project.githubUrl}
                            className="p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-colors duration-200"
                          >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                          <a
                            href={project.liveUrl}
                            className="p-4 bg-white/10 backdrop-blur-sm border border-gray-700 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-200"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-5 ${project.id % 2 === 0 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 font-mono text-sm">
                          {project.year} — {project.status}
                        </span>
                        <span className="px-3 py-1 border border-gray-600 text-gray-400 text-xs font-mono">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="text-gray-500 text-sm font-mono">Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm font-mono hover:border-gray-500 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
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

      {/* All Projects - Masonry Grid */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <div className="inline-block px-3 py-1 border border-gray-300 text-gray-600 text-sm font-mono mb-4">
                02 — Complete Archive
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                All Projects
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-mono transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-50 border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/10 transition-all duration-300" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-mono">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-500">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.githubUrl}
                      className="flex-1 text-center py-2 px-3 border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-all duration-200 text-sm font-mono"
                    >
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center py-2 px-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 text-sm font-mono"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
