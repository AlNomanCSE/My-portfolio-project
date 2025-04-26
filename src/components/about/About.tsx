"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaUser, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob shadow-[0_0_50px_rgba(59,130,246,0.3)]"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 shadow-[0_0_50px_rgba(168,85,247,0.3)]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 shadow-[0_0_50px_rgba(236,72,153,0.3)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="About Me"
          subtitle="Get to know more about who I am and what I do"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-12 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile image */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Abdullah Al Noman" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bio content */}
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Abdullah Al Noman
              </h3>
              <p className="text-gray-300 mb-6">
                I&apos;m a software developer passionate about building innovative solutions using a diverse tech stack. I aim to secure challenging positions where I can leverage my technical expertise and problem-solving skills to contribute to impactful projects while fostering personal and professional growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div 
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(59,130,246,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                      <FaUser className="text-blue-400" />
                    </div>
                    <h4 className="font-medium text-white">Full Stack Developer</h4>
                  </div>
                  <p className="text-sm text-gray-400">Specializing in MERN stack and Spring Boot applications</p>
                </motion.div>
                
                <motion.div 
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(59,130,246,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-2">
                      <FaCode className="text-purple-400" />
                    </div>
                    <h4 className="font-medium text-white">Problem Solver</h4>
                  </div>
                  <p className="text-sm text-gray-400">Strong in algorithms and data structures</p>
                </motion.div>
                
                <motion.div 
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(59,130,246,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-2">
                      <FaRocket className="text-pink-400" />
                    </div>
                    <h4 className="font-medium text-white">Continuous Learner</h4>
                  </div>
                  <p className="text-sm text-gray-400">Always exploring new technologies and frameworks</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 