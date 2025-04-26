'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const links = [
    {
      title: "Email",
      icon: <IconMail className="h-5 w-5" />,
      href: "mailto:abdullahalnomancse@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/abdullahalnomancse",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-5 w-5" />,
      href: "https://github.com/AlNomanCSE",
    },
  ];

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center">
            {/* <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-70"></div>
              <div className="relative bg-gray-900 rounded-full p-2">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div> */}
            <div className="ml-3 flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Abdullah Al Noman
              </span>
              <span className="text-xs text-gray-400 tracking-wider uppercase">Full Stack Developer</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href.substring(1))}
              className="text-gray-300 hover:text-white transition-colors relative group font-medium tracking-wide"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 relative group"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-70 blur transition duration-300"></div>
              <div className="relative">
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href.substring(1))}
                  className="text-gray-300 hover:text-white py-2 transition-colors font-medium tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.title}
                </motion.a>
              ))}
              <div className="flex items-center space-x-4 pt-2 border-t border-gray-800">
                {links.map((link, index) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


