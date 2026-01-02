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
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only check sections if we are on the home page
      if (pathname === '/') {
        const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const offset = 200; // Increased offset for better detection
            const isInView = rect.top <= offset && rect.bottom >= offset;
            return isInView;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    // Initial check for active section
    handleScroll();

    // Add throttling to prevent too many updates
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [pathname]);

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const id = href.substring(1);

      if (pathname === '/') {
        // We are on home page, smooth scroll
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          setActiveSection(id);

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        // We are on another page, navigate to home with hash
        router.push('/' + href);
      }
    } else {
      // It's a page navigation (e.g. /projects)
      if (pathname !== href) {
        router.push(href);
      }
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
    { title: "About Me", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-800/50"
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
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10">
              <Image
                src="/LogoPic.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
            </div>
            <div className="ml-3 flex flex-col">
              <div className="relative">
                <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Abdullah Al Noman
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>
              <div className="mt-1">
                <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">SW & Product Manager</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.title}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative group font-medium tracking-wide transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.title}
                {!isActive && (
                  <>
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 w-0 group-hover:w-full"
                    />
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 delay-75 w-0 group-hover:w-full"
                    />
                  </>
                )}
              </motion.a>
            );
          })}
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
          className="md:hidden p-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
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
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 fixed top-20 left-0 right-0 z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2 transition-colors font-medium tracking-wide flex items-center ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-2 ${isActive
                        ? 'bg-white'
                        : 'bg-blue-500'
                        }`}
                    />
                    {link.title}
                  </motion.a>
                );
              })}
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


