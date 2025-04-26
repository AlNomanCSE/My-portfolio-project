"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CiMobile1 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/section-heading";

// Project data
const projects = [
  {
    id: 1,
    title: "Pricing Page",
    image: "/1-d.JPG",
    link: "https://pricingpagedemo.netlify.app/",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Country Search",
    image: "/9-d.JPG",
    link: "https://searchyourcountryname.netlify.app/",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Design Studio",
    image: "/2-d.JPG",
    link: "https://designstudioofnoman.netlify.app/",
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    title: "Tour Page",
    image: "/3-d.JPG",
    link: "https://tourpagehomenoman.netlify.app/",
    color: "from-red-500 to-red-600",
  },
  {
    id: 5,
    title: "Multi-step App",
    image: "/4-d.JPG",
    link: "https://multistepappnoman.netlify.app",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 6,
    title: "Site Landing Page",
    image: "/5-d.JPG",
    link: "https://sitelandingpagenoman.netlify.app",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: 7,
    title: "Tip Calculator",
    image: "/6-d.JPG",
    link: "https://tipcalculatorappnextjs.netlify.app",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: 8,
    title: "News Home Page",
    image: "/7-d.JPG",
    link: "https://newshomepagemainnoman.netlify.app",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: 9,
    title: "Intro Section",
    image: "/8-d.JPG",
    link: "https://introsectionwithdropdownnvigation.netlify.app",
    color: "from-orange-500 to-orange-600",
  },
];

const PracticeProjects = () => {
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
          title="Practice Projects"
          subtitle="Fun frontend projects I created while learning web development"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Glowing border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
              
              <div className="relative h-full bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                {/* Project details */}
                <div className="p-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center text-gray-300">
                      <CgWebsite className="mr-2 text-blue-400" />
                      <span>Frontend development</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CiMobile1 className="mr-2 text-purple-400" />
                      <span>Mobile responsiveness</span>
                    </div>
                  </div>
                  
                  {/* View project button */}
                  <div className="mt-6">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        className="w-full py-2 px-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center">
                          Demo website <FaArrowRightToBracket className="ml-2" />
                        </span>
                      </motion.button>
                    </Link>
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

export default PracticeProjects; 