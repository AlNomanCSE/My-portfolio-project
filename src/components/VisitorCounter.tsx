'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye } from 'react-icons/fa';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        // First, increment the count
        await fetch('/api/visitors', { method: 'POST' });
        
        // Then, get the updated count
        const response = await fetch('/api/visitors');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error updating visitor count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    incrementVisitor();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-xs text-gray-400/70">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-3 h-3 border-2 border-gray-400/70 border-t-transparent rounded-full mr-1"
        />
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-gray-700/20 shadow-md"
    >
      <div className="flex items-center space-x-1.5">
        <FaEye className="text-blue-400/80 text-xs" />
        <motion.span 
          className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400/90 to-purple-400/90 text-xs"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {count?.toLocaleString()}
        </motion.span>
        <span className="text-gray-300/70 text-xs">visitors</span>
      </div>
    </motion.div>
  );
} 