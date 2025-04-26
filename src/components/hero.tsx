"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function Hero() {
    const words = [
        {
            text: "Hello!",
            className: "text-blue-400",
        },
        {
            text: "I'm",
            className: "text-blue-400",
        },
        {
            text: "Noman",
            className: "text-blue-400 font-bold",
        },
    ];

    return (
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Animated background elements - Adjusted for better visibility on all screens */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob shadow-[0_0_50px_rgba(59,130,246,0.3)]"></div>
                    <div className="absolute top-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 shadow-[0_0_50px_rgba(168,85,247,0.3)]"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 shadow-[0_0_50px_rgba(236,72,153,0.3)]"></div>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 lg:py-16 relative z-10">
                {/* Text Content - Improved spacing and sizing */}
                <CardContainer className="flex-1 w-full lg:w-auto">
                    <CardBody className="relative backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardItem translateZ="50" className="w-full">
                            <div className="text-2xl sm:text-3xl lg:text-4xl">
                                <TypewriterEffect words={words} />
                            </div>
                        </CardItem>
                        <CardItem translateZ="60" className="w-full">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-base sm:text-lg lg:text-xl text-gray-300 mt-4 sm:mt-6 leading-relaxed"
                            >
                                As a recent graduate with a Bachelor of Technology in Computer Science and Engineering from the National Institute of Technology Rourkela India (NITRKL), I bring a unique blend of academic excellence and professional experience to the technology field.
                            </motion.p>
                        </CardItem>
                        <CardItem translateZ="70" className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6"
                            >
                                <BackgroundGradient className="rounded-full p-[1px]">
                                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium bg-transparent text-blue-100 whitespace-nowrap">
                                        Full Stack Developer
                                    </span>
                                </BackgroundGradient>
                                {/* <BackgroundGradient className="rounded-full p-[1px]">
                                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium bg-transparent text-green-100 whitespace-nowrap">
                                        Web Development
                                    </span>
                                </BackgroundGradient> */}
                                <BackgroundGradient className="rounded-full p-[1px]">
                                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium bg-transparent text-purple-100 whitespace-nowrap">
                                        Problem Solver
                                    </span>
                                </BackgroundGradient>
                            </motion.div>
                        </CardItem>
                        
                        {/* Social Links - Improved spacing and touch targets */}
                        <CardItem translateZ="80" className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8"
                            >
                                <motion.a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                                >
                                    <FaGithub className="text-xl sm:text-2xl" />
                                </motion.a>
                                <motion.a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                                >
                                    <FaLinkedin className="text-xl sm:text-2xl" />
                                </motion.a>
                                <motion.a 
                                    href="https://x.com/alnomancse" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                                >
                                    <FaTwitter className="text-xl sm:text-2xl" />
                                </motion.a>
                                <motion.a 
                                    href="https://leetcode.com/u/Abdullah_noman/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                                >
                                    <SiLeetcode className="text-xl sm:text-2xl" />
                                </motion.a>
                            </motion.div>
                        </CardItem>
                    </CardBody>
                </CardContainer>

                {/* Profile Image - Modern redesign for transparent background */}
                <CardContainer className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                    <CardBody className="relative">
                        <CardItem translateZ="100">
                            <div className="relative w-full h-full">
                                {/* Modern geometric background */}
                                <div className="absolute inset-0">
                                    {/* Primary background shape */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2rem] transform rotate-3"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-[2rem] transform -rotate-3"></div>
                                    
                                    {/* Decorative grid pattern */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px] rounded-[2rem]"></div>
                                    
                                    {/* Glowing border effect */}
                                    <div className="absolute inset-0 rounded-[2rem] border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]"></div>
                                </div>
                                
                                {/* Profile image container with modern styling */}
                                <div className="relative w-full h-full flex items-center justify-center p-4">
                                    <div className="relative w-full h-full">
                                        {/* Floating elements */}
                                        <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
                                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
                                        
                                        {/* Main image container */}
                                        <div className="relative top-4 w-full h-full flex items-center justify-center">
                                            <Image
                                                src="/profileimage.png"
                                                alt="Noman's Profile"
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Modern floating badges */}
                                <motion.div 
                                    className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg px-3 py-1.5 text-white text-xs font-medium shadow-lg backdrop-blur-sm"
                                    animate={{ 
                                        y: [0, -5, 0],
                                        rotate: [0, 2, 0]
                                    }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <span className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        Full Stack
                                    </span>
                                </motion.div>
                                <motion.div 
                                    className="absolute -bottom-3 -left-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg px-3 py-1.5 text-white text-xs font-medium shadow-lg backdrop-blur-sm"
                                    animate={{ 
                                        y: [0, 5, 0],
                                        rotate: [0, -2, 0]
                                    }}
                                    transition={{ 
                                        duration: 3, 
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: 1
                                    }}
                                >
                                    <span className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                        Developer
                                    </span>
                                </motion.div>
                                
                                {/* Decorative corner accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg"></div>
                            </div>
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    );
} 