'use client';

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          © {currentYear} Abdullah Al Noman. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 