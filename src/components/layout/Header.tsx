'use client';
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,

} from "@tabler/icons-react";

import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {

  const links = [

    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-black dark:text-neutral-50" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-50" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-black dark:text-neutral-50" />
      ),
      href: "#",
    },
  ];

  return (
    <header className="h-40 flex justify-end items-end">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">A.A.Noman</h1>
        <div className="flex items-center gap-4 flex-row">
          <ThemeToggle />
          <FloatingDock
            items={links}
          />

        </div>
      </div>
    </header>
  );
}


