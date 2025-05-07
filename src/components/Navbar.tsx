'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';
// import { useTranslations } from 'next-intl';

export function Navbar() {
  // const t = useTranslations('Home');

  return (
    <nav className="bg-[rgb(var(--color-background))] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          [Your Name]
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="#about" className="hover:text-primary">
            About
          </Link>
          <Link href="#projects" className="hover:text-primary">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-primary">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-primary">
            Contact
          </Link>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="md:hidden">
            <Menu className="w-6 h-6" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-[rgb(var(--color-background))] shadow-lg rounded-md p-2 mt-2">
              <DropdownMenu.Item>
                <Link href="#about" className="block px-4 py-2 hover:text-primary">
                  About
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link
                  href="#projects"
                  className="block px-4 py-2 hover:text-primary"
                >
                  Projects
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link href="#skills" className="block px-4 py-2 hover:text-primary">
                  Skills
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link
                  href="#contact"
                  className="block px-4 py-2 hover:text-primary"
                >
                  Contact
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
}