"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaServer, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

// Pin Button Component
const PinButton = ({ href, icon, text, onClick, isExternal = true }: { 
  href?: string; 
  icon: React.ReactNode; 
  text: string; 
  onClick?: () => void;
  isExternal?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const buttonContent = (
    <motion.div
      className="relative flex items-center justify-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pin shadow */}
      <motion.div 
        className="absolute inset-0 bg-black/30 rounded-lg"
        animate={{ 
          y: isHovered ? 8 : 4,
          scale: isHovered ? 1.05 : 1,
          opacity: isHovered ? 0.8 : 0.6
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      {/* Pin head */}
      <motion.div 
        className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-md"
        animate={{ 
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 15 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      
      {/* Button content */}
      <motion.div
        className={`relative flex items-center justify-center px-6 py-3 rounded-lg ${
          href ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500' : 
          'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-blue-500/50'
        } text-white transition-all duration-300 shadow-lg`}
        animate={{ 
          y: isHovered ? -4 : 0,
          boxShadow: isHovered 
            ? "0 10px 25px -5px rgba(59, 130, 246, 0.7)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="mr-2 text-xl">{icon}</span>
        <span>{text}</span>
      </motion.div>
    </motion.div>
  );
  
  if (href) {
    return (
      <Link 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button 
      onClick={onClick}
      className="inline-block"
    >
      {buttonContent}
    </button>
  );
};

const coreProjects = [
  {
    title: "NB School Management System",
    description: [
      "Developed a comprehensive school management system using Java, Spring Boot, and Spring MVC",
      "Designed and implemented RESTful APIs for data management",
      "Created dynamic web pages using Thymeleaf templates",
      "Implemented robust security with Spring Security",
    ],
    technologies: [
      "Spring Security",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "Thymeleaf",
    ],
    imageSrc: "/nb-school.png",
    githubLink: "https://github.com/AlNomanCSE/NB-School---java--springbot--MVC.git",
    features: [
      { icon: <FaCode />, title: "Full Stack", description: "Complete end-to-end solution" },
      { icon: <FaServer />, title: "RESTful API", description: "Well-structured backend services" },
      { icon: <FaShieldAlt />, title: "Security", description: "Role-based access control" },
    ],
    importance: "high",
  },
  {
    title: "NB Bank",
    description: [
      "Developed RESTful APIs for banking operations",
      "Implemented secure authentication with role-based access",
      "Utilized environment variables for flexible deployment",
      "Configured detailed security logging",
    ],
    technologies: [
      "Angular",
      "Spring Data JPA",
      "Spring Security",
      "MySQL",
    ],
    imageSrc: "/nb-bank.png",
    githubLink: "https://github.com/AlNomanCSE/spring-bank-security.git",
    features: [
      { icon: <FaShieldAlt />, title: "Security", description: "Bank-grade security measures" },
      { icon: <FaServer />, title: "API Design", description: "Clean, documented APIs" },
      { icon: <FaCode />, title: "Frontend", description: "Responsive Angular UI" },
    ],
    importance: "high",
  },
];

const CoreProjects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background with enhanced glowing effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob shadow-[0_0_50px_rgba(59,130,246,0.7)]"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 shadow-[0_0_50px_rgba(168,85,247,0.7)]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 shadow-[0_0_50px_rgba(236,72,153,0.7)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Core Projects"
          subtitle="Built with Spring & Angular"
        />
        
        <div className="grid grid-cols-1 gap-20">
          {coreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group perspective"
            >
              {/* Project card with enhanced 3D effect */}
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12">
                {/* Enhanced glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Card with 3D effect and importance indicator */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Importance badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-3 py-1 rounded-full shadow-lg">
                      <FaStar className="mr-1" />
                      <span className="font-bold">Core Project</span>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full filter blur-2xl shadow-[0_0_30px_rgba(59,130,246,0.7)]"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/30 rounded-full filter blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.7)]"></div>
                  
                  <div className="relative z-10 p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Project image with enhanced glow effect */}
                      <div className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg group-hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 mix-blend-overlay"></div>
                        <Image
                          src={project.imageSrc}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Image overlay with project title */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4">
                          <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Project content with enhanced layout */}
                      <div className="lg:w-2/3 flex flex-col">
                        {/* Key features section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {project.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.1 * i }}
                              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                            >
                              <div className="text-blue-400 text-xl mb-2">{feature.icon}</div>
                              <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                              <p className="text-gray-400 text-sm">{feature.description}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Project description */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
                            Project Highlights:
                          </h4>
                          <ul className="space-y-3">
                            {project.description.map((item, i) => (
                              <motion.li 
                                key={i} 
                                className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                              >
                                <span className="text-blue-400 mr-2 mt-1 group-hover:text-blue-300 transition-colors duration-300">•</span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-auto">
                          {/* Technology section with highlighted title */}
                          <div className="mb-3">
                            <h4 className="text-lg font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
                              Technologies Used:
                            </h4>
                          </div>
                          
                          {/* Enhanced technology tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-900/80 to-purple-900/80 text-blue-200 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:border-blue-400/50 group-hover:from-blue-800/80 group-hover:to-purple-800/80 transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                          
                          {/* Action buttons with 3D Pin effect */}
                          <div className="flex flex-wrap gap-4">
                            <PinButton 
                              href={project.githubLink}
                              icon={<FaGithub />}
                              text="View Code"
                            />
                            <PinButton 
                              icon={<FaExternalLinkAlt />}
                              text="Learn More"
                              onClick={() => setActiveProject(activeProject === index ? null : index)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Expanded project details modal */}
              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-white">Project Details</h3>
                      <button 
                        onClick={() => setActiveProject(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technical Implementation</h4>
                        <p className="text-gray-300 mb-4">
                          This project demonstrates advanced software engineering principles including clean architecture, 
                          secure authentication, and efficient data management. The implementation follows industry best 
                          practices for scalability and maintainability.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            <span>Architecture: Layered architecture with clear separation of concerns</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            <span>Security: JWT-based authentication with role-based access control</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            <span>Database: Optimized schema design with proper indexing</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                        <p className="text-gray-300 mb-4">
                          This project showcases my ability to build complex, production-ready applications with 
                          attention to security, performance, and user experience.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            <span>Successfully implemented secure authentication system</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            <span>Designed intuitive user interfaces for complex workflows</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            <span>Optimized database queries for improved performance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProjects; 