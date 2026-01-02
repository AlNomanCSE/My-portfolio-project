"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaTasks } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiDocker,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiFlutter
} from "react-icons/si";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: "Spring Boot", icon: <SiSpring className="text-[#6DB33F]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }
    ]
  },
  {
    name: "Mobile",
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
      // { name: "Expo", icon: <SiExpo className="text-white" /> } 
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "OpenProject", icon: <FaTasks className="text-blue-400" /> }
    ]
  }
];

const Skills = () => {
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
          subtitle="The technologies I use to build proficient solutions"
        />

        <div className="max-w-7xl mx-auto mt-16 space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-800/50 shadow-xl">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                {category.name}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 h-full">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center text-4xl sm:text-5xl bg-gray-900/50 rounded-lg p-2 group-hover:bg-gray-900/80 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors text-center">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;