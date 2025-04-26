'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        // First increment the visitor count
        await fetch('/api/visitors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        // Then fetch the updated count
        const response = await fetch('/api/visitors');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error tracking visitor:', error);
      } finally {
        setIsLoading(false);
      }
    };

    incrementVisitor();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2">
        {isLoading ? (
          <motion.div
            className="w-3 h-3 border-2 border-blue-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          <>
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
            <span>Visitors: {count?.toLocaleString() || 0}</span>
          </>
        )}
      </div>
    </div>
  );
} 