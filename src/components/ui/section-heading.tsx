"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className = "" }: SectionHeadingProps) => {
  return (
    <motion.div 
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-opacity-100 mb-4 relative z-10">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm"></div>
      </div>
      
      {subtitle && (
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}; 