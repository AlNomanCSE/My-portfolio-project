"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaBuilding, FaMapMarkerAlt, FaCode, FaArrowRight } from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTypescript, 
  SiNodedotjs, SiExpress, SiMongodb, SiGraphql, SiJavascript,
  SiReact as SiReactNative
} from "react-icons/si";

const experiences = [
  {
    company: "OutNet",
    position: "Web Developer (Intern)",
    period: "March 2024 – Present",
    type: "Remote",
    description: "Developing and maintaining scalable web and mobile applications using MERN stack, React Native, and frameworks like Next.js or Remix.",
    responsibilities: [
      "Implementing state management solutions (Redux, MobX, Recoil) and designing RESTful APIs/GraphQL endpoints",
      "Enforcing coding standards, conducting code reviews, and collaborating with cross-functional teams",
      "Optimizing applications for performance, scalability, and security",
      "Troubleshooting and resolving technical issues across platforms"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "React Native", "Next.js", "Redux", "GraphQL"]
  },
  {
    company: "BarracK LifeStyle",
    position: "Fullstack Developer (Intern)",
    period: "January 2024 – March 2024",
    type: "Remote",
    description: "Design and maintenance of robust backend APIs for seamless data management.",
    responsibilities: [
      "Implementation of secure user authentication systems",
      "Collaboration with cross-functional teams to enhance user experience"
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "Authentication"]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob shadow-[0_0_50px_rgba(99,102,241,0.3)]"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 shadow-[0_0_50px_rgba(236,72,153,0.3)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Work Experience"
          subtitle="My professional journey and contributions"
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left column - Timeline and date */}
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center border border-gray-700/50 shadow-lg">
                    <FaBuilding className="text-xl text-indigo-400" />
                  </div>
                  <div className="h-full w-0.5 bg-gradient-to-b from-indigo-500 to-pink-500 my-4 hidden md:block"></div>
                  <div className="text-center md:text-right">
                    <div className="text-indigo-400 font-medium">{exp.period}</div>
                    <div className="text-gray-400 text-sm flex items-center justify-center md:justify-end mt-1">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right column - Content */}
                <div className="md:w-3/4">
                  <div 
                    className={`bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${activeIndex === index ? 'border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : ''}`}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-gray-400">{exp.position}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-gray-800/30 rounded-lg p-4 mb-4 border border-gray-700/50">
                            <h4 className="text-white font-medium mb-3 flex items-center">
                              <FaCode className="mr-2 text-indigo-400" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-indigo-400 mr-2">•</span>
                                  <span className="text-gray-300">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => {
                        // Map technology names to their corresponding icons
                        const getTechIcon = (techName: string) => {
                          switch (techName.toLowerCase()) {
                            case 'react':
                              return <SiReact className="text-[#61DAFB]" />;
                            case 'next.js':
                              return <SiNextdotjs className="text-white" />;
                            case 'typescript':
                              return <SiTypescript className="text-[#3178C6]" />;
                            case 'node.js':
                              return <SiNodedotjs className="text-[#339933]" />;
                            case 'express':
                              return <SiExpress className="text-white" />;
                            case 'mongodb':
                              return <SiMongodb className="text-[#47A248]" />;
                            case 'graphql':
                              return <SiGraphql className="text-[#E535AB]" />;
                            case 'javascript':
                              return <SiJavascript className="text-[#F7DF1E]" />;
                            case 'react native':
                              return <SiReactNative className="text-[#61DAFB]" />;
                            default:
                              return <FaCode className="text-indigo-400" />;
                          }
                        };

                        return (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: techIndex * 0.1 }}
                            className="px-3 py-1.5 text-sm bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 flex items-center gap-2 hover:bg-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
                          >
                            <span className="text-lg">{getTechIcon(tech)}</span>
                            <span className="group-hover:text-white transition-colors duration-300">{tech}</span>
                          </motion.span>
                        );
                      })}
                    </div>
                    
                    <div className="mt-4 text-right">
                      <button 
                        className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors flex items-center justify-end ml-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(activeIndex === index ? null : index);
                        }}
                      >
                        {activeIndex === index ? "Show Less" : "Show More"} 
                        <FaArrowRight className={`ml-1 transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
                      </button>
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

export default Experience; 