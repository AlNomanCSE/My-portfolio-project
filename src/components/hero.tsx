"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";
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
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob shadow-[0_0_50px_rgba(59,130,246,0.3)]"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 shadow-[0_0_50px_rgba(168,85,247,0.3)]"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 shadow-[0_0_50px_rgba(236,72,153,0.3)]"></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 lg:py-16 relative z-10">
                {/* Text Content - Redesigned to match image style */}
                <div className="relative w-full lg:w-auto mt-12 sm:mt-16 lg:mt-0">
                    {/* Content container */}
                    <div className="relative backdrop-blur-sm rounded-[1.5rem] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full">
                            {/* Animated circles */}
                            <motion.div
                                className="absolute top-0 left-0 w-4 h-4 bg-blue-500 rounded-full"
                                animate={{
                                    x: [0, 20, 0],
                                    y: [0, 20, 0],
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            ></motion.div>
                            <motion.div
                                className="absolute bottom-0 right-0 w-4 h-4 bg-purple-500 rounded-full"
                                animate={{
                                    x: [0, -20, 0],
                                    y: [0, -20, 0],
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 1
                                }}
                            ></motion.div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="text-2xl sm:text-3xl lg:text-4xl">
                                <TypewriterEffect words={words} />
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-base sm:text-lg lg:text-xl text-gray-300 mt-4 sm:mt-6 leading-relaxed"
                            >
                                Dynamic Software Developer and Product Lead with a degree from NIT Rourkela. Currently driving product strategy at Innovative Skills BD, where I bridge technical execution with business objectives. Expert in full-stack development and <span className="font-bold text-blue-400">Project Management (OpenProject)</span>, with additional experience in HR operations and technical mentorship. Committed to evolving into a <span className="font-bold text-purple-400">Product Manager/Owner</span> role to build high-impact, user-centric solutions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="flex flex-wrap gap-3 mt-6 sm:mt-8"
                            >
                                <motion.a
                                    href="#contact"
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get In Touch
                                </motion.a>

                                <motion.a
                                    href="/Abdullah_Al_Noman_CV_2025.pdf"
                                    download
                                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaFileDownload />
                                    <span>Download CV</span>
                                </motion.a>
                            </motion.div>

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
                                    className="text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <FaGithub className="text-xl sm:text-2xl" />
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <FaLinkedin className="text-xl sm:text-2xl" />
                                </motion.a>
                                <motion.a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <FaTwitter className="text-xl sm:text-2xl" />
                                </motion.a>
                                <motion.a
                                    href="https://leetcode.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="text-gray-300 hover:text-white transition-all duration-300"
                                >
                                    <SiLeetcode className="text-xl sm:text-2xl" />
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
} 