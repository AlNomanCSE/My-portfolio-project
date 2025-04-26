"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useState, useContext } from "react";

const MouseEnterContext = createContext<{
  mouseX: number;
  mouseY: number;
  setMouseX: React.Dispatch<React.SetStateAction<number>>;
  setMouseY: React.Dispatch<React.SetStateAction<number>>;
}>({
  mouseX: 0,
  mouseY: 0,
  setMouseX: () => {},
  setMouseY: () => {},
});

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  }

  return (
    <MouseEnterContext.Provider value={{ mouseX, mouseY, setMouseX, setMouseY }}>
      <div
        className={cn("relative group/card", containerClassName)}
        onMouseMove={handleMouseMove}
      >
        <div className={cn("relative", className)}>{children}</div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("relative", className)}>{children}</div>;
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
}) => {
  const { mouseX, mouseY } = useContext(MouseEnterContext);

  return (
    <div
      className={cn("transition duration-200 ease-linear", className)}
      style={{
        transform: `perspective(1000px) rotateX(${
          mouseY / 20
        }deg) rotateY(${mouseX / 20}deg) translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`,
      }}
    >
      {children}
    </div>
  );
}; 