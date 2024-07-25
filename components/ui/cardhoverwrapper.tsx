"use client";
import { cn } from "@/utils/cn";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import proPic from "../../../public/Arrow-down.svg";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    src: string;
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 my-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full  bg-orange-400 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card src={item.src} description={item.description}>
            <CardTitle className=" font-poppins text-md sm:text-lg w-2/3">
              {item.title}
            </CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  src,
  description,
}: {
  className?: string;
  children: React.ReactNode;
  src: string;
  description: string;
}) => {
  const animation: any = {
    initial: { y: "0px", transition: { duration: 0.5, ease: "easeInOut" } },
    animate: {
      y: "-500px",
      transition: { delay: 0.5, duration: 0.75, ease: "easeInOut" },
    },
  };
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      onHoverStart={(e) => {
        setIsHovered(true);
      }}
      onHoverEnd={(e) => {
        setIsHovered(false);
      }}
      onTouchStartCapture={() => setIsHovered(true)}
      onTouchEndCapture={() => setIsHovered(false)}
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden bg-ki-main border border-white dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <AnimatePresence>
        <motion.div
          variants={animation}
          initial="initial"
          animate={isHovered ? "animate" : ""}
          className="w-full h-[150px] sm:h-[250px] bg-ki-main relative z-50 pr-44 p-4 grid"
        >
          {children}
          <img
            className="w-32 sm:w-48 right-[0] bottom-0 sm:bottom-[-50px] absolute rounded-tl-[5em] opacity-50"
            src={src}
            alt=""
          />
        </motion.div>
      </AnimatePresence>
      <div className=" absolute top-0 w-full h-full py-4 lg:py-12">
        <div className="text-white text-xs lg:text-sm px-12 h-3/4 ">
          {description}
        </div>
        <div className="text-xs lg:text-sm text-center text-white font-semibold mt-2 h-1/4 ">
          Bitte klicken Sie auf das Feld, um auf die Broschüre zu gelangen
        </div>
      </div>
    </motion.div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center">
      <h4 className={cn("text-zinc-100 text-2xl font-bold  ", className)}>
        {children}
      </h4>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed ",
        className
      )}
    >
      {children}
    </p>
  );
};
