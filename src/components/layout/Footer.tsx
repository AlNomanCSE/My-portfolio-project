'use client';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 