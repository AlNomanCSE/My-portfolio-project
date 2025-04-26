"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

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
    imageSrc: "/nb-school.png", // Add your image path
    githubLink: "https://github.com/AlNomanCSE/NB-School---java--springbot--MVC.git",
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
    imageSrc: "/nb-bank.png", // Add your image path
    githubLink: "https://github.com/AlNomanCSE/spring-bank-security.git",
  },
];

const CoreProjects = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background with glowing effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob shadow-[0_0_50px_rgba(59,130,246,0.5)]"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 shadow-[0_0_50px_rgba(168,85,247,0.5)]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 shadow-[0_0_50px_rgba(236,72,153,0.5)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Core Projects"
          subtitle="Built with Spring & Angular"
        />
        
        <div className="grid grid-cols-1 gap-16">
          {coreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group perspective"
            >
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Card with 3D effect */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.5)]"></div>
                  
                  <div className="relative z-10 p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Project image with glow effect */}
                      <div className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                        <Image
                          src={project.imageSrc}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Project content */}
                      <div className="lg:w-2/3 flex flex-col">
                        <h3 className="text-3xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-colors duration-500">
                          {project.title}
                        </h3>
                        
                        <div className="mb-6">
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
                          
                          <Link 
                            href={project.githubLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
                          >
                            <FaGithub className="mr-2 text-xl" />
                            <span>View Code</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreProjects; 