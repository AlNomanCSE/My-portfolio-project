"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/section-heading";

const Contact = () => {
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
          title="Let&apos;s Connect"
          subtitle="I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mt-12 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h3>
          
          <p className="text-gray-300 mb-8">
            The best way to reach me is directly through email or WhatsApp. I&apos;ll get back to you as soon as possible!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.a
              href="mailto:abdullahalnomancse@gmail.com"
              className="flex items-center p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                <FaEnvelope className="text-blue-400 text-xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white">Email Me</h4>
                <p className="text-gray-400 text-sm">abdullahalnomancse@gmail.com</p>
              </div>
              <FaArrowRight className="text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
            </motion.a>
            
            <motion.a
              href="https://wa.me/8801883217001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors">
                <FaWhatsapp className="text-green-400 text-xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-white">WhatsApp Me</h4>
                <p className="text-gray-400 text-sm">+880 1883-217001</p>
              </div>
              <FaArrowRight className="text-green-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
            </motion.a>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-lg font-medium text-white mb-4">Connect on Social Media</h4>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://linkedin.com/in/abdullahalnomancse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaLinkedin className="text-blue-400 mr-2" />
                <span className="text-gray-300">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/AlNomanCSE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub className="text-blue-400 mr-2" />
                <span className="text-gray-300">GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 