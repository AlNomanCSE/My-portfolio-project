"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative p-[1px] group/btn",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 group-hover/btn:opacity-100 transition duration-1000 group-hover/btn:duration-200"
      />
      <div className="relative">{children}</div>
    </div>
  );
}; 