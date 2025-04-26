"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaCode, FaDatabase, FaMobile, FaTools } from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, 
  SiMui, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiNestjs, SiReact as SiReactNative, SiExpo, SiGit, SiDocker, 
  SiAmazon, SiFirebase 
} from "react-icons/si";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <FaCode className="text-blue-400" />,
    description: "Creating responsive and interactive user interfaces",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      { name: "Material UI", icon: <SiMui className="text-[#007FFF]" /> }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    icon: <FaDatabase className="text-green-400" />,
    description: "Building robust server-side applications and APIs",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "NestJS (Learning)", icon: <SiNestjs className="text-[#E0234E]" />, isLearning: true }
    ]
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: <FaMobile className="text-purple-400" />,
    description: "Developing cross-platform mobile applications",
    skills: [
      { name: "React Native", icon: <SiReactNative className="text-[#61DAFB]" /> },
      { name: "Expo", icon: <SiExpo className="text-white" /> }
    ]
  },
  {
    id: "tools",
    name: "Tools & Others",
    icon: <FaTools className="text-amber-400" />,
    description: "Essential tools and technologies for development",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "AWS", icon: <SiAmazon className="text-[#FF9900]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob shadow-[0_0_50px_rgba(59,130,246,0.3)]"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 shadow-[0_0_50px_rgba(168,85,247,0.3)]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 shadow-[0_0_50px_rgba(34,197,94,0.3)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="My Top Skills"
          subtitle="Technologies I work with to bring ideas to life"
        />
        
        {/* Category navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Skills display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCategory === null || activeCategory === category.id ? 1 : 0,
                  y: activeCategory === null || activeCategory === category.id ? 0 : 20,
                  display: activeCategory === null || activeCategory === category.id ? 'block' : 'none'
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-12 last:mb-0"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                    {category.icon}
                    {category.name}
                  </h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(59,130,246,0.4)"
                      }}
                      onHoverStart={() => setHoveredSkill(index)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className={`relative group ${skill.isLearning ? 'learning-skill' : ''}`}
                    >
                      <div className={`
                        bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center
                        border border-gray-800/50 transition-all duration-300
                        ${hoveredSkill === index ? 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''}
                        ${skill.isLearning ? 'border-dashed border-yellow-500/50' : ''}
                      `}>
                        <div className="w-16 h-16 mb-3 relative flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-md"></div>
                          <div className="text-4xl relative z-10">
                            {skill.icon}
                          </div>
                          {skill.isLearning && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center text-xs text-yellow-400">
                              ✨
                            </div>
                          )}
                        </div>
                        <h4 className="text-white font-medium text-center">{skill.name}</h4>
                        
                        {/* Glowing effect on hover */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills; 