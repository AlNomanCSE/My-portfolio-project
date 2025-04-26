'use client';

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-neutral-300">
            © {new Date().getFullYear()} Abdullah Al Noman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 