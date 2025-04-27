"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaGithub, FaCode, FaChartLine } from "react-icons/fa";

const GitHubActivity = () => {
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
          title="GitHub Activity"
          subtitle="My coding activity and contributions"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mt-12"
        >
          {/* Terminal-style container */}
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            {/* Terminal header */}
            <div className="bg-gray-800 px-6 py-3 flex items-center">
              <div className="flex space-x-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-gray-300 text-base font-mono">github-stats.sh</div>
              <div className="w-12"></div>
            </div>
            
            {/* Terminal content */}
            <div className="p-8 font-mono text-base">
              {/* Command line */}
              <div className="flex items-center mb-8">
                <span className="text-green-400 mr-3 text-lg">$</span>
                <span className="text-blue-400 text-lg">cat</span>
                <span className="text-gray-300 ml-3 text-lg">github-stats.json</span>
              </div>
              
              {/* Stats display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* GitHub Stats */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    <FaGithub className="text-blue-400 mr-3 text-xl" />
                    <span className="text-blue-400 font-bold text-lg">profile_stats</span>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://github-readme-stats.vercel.app/api?username=AlNomanCSE&show_icons=true&theme=dark&hide_border=true&count_private=true&bg_color=0d1117&title_color=58a6ff&text_color=8b949e&icon_color=38d353" 
                      alt="GitHub Stats" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </motion.div>
                
                {/* Programming Languages */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    <FaCode className="text-purple-400 mr-3 text-xl" />
                    <span className="text-purple-400 font-bold text-lg">languages</span>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlNomanCSE&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=8b949e" 
                      alt="Top Languages" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </motion.div>
                
                {/* Contribution Streak */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50"
                >
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-green-400 mr-3 text-xl" />
                    <span className="text-green-400 font-bold text-lg">streak</span>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://github-readme-streak-stats.herokuapp.com/?user=AlNomanCSE&theme=dark&hide_border=true&background=0d1117&ring=38d353&fire=58a6ff&currStreakLabel=58a6ff" 
                      alt="Contribution Streak" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Command line footer */}
              <div className="flex items-center mt-8">
                <span className="text-green-400 mr-3 text-lg">$</span>
                <span className="text-gray-300 text-lg">exit</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity; 