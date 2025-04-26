"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const Projects = () => {
  const projects = [
    {
      title: "Core Project 1",
      description: "A full-stack application built with Spring Boot and React",
      image: "/project1.jpg",
      tags: ["Spring Boot", "React", "Docker"],
      link: "#",
    },
    {
      title: "Core Project 2",
      description: "Microservices architecture with Spring Cloud",
      image: "/project2.jpg",
      tags: ["Spring Cloud", "Docker", "Kubernetes"],
      link: "#",
    },
    {
      title: "Practice Project 1",
      description: "A responsive web application with modern UI",
      image: "/project3.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Practice Project 2",
      description: "Real-time data visualization dashboard",
      image: "/project4.jpg",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-900 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-900 rounded-full mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="My Projects"
          subtitle="A showcase of my work and learning journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col h-full p-6 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800/50">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 