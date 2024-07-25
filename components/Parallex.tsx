"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface pageProps {
  id: number;
  title: string;
  description: string;
  link: string;
  text: string;
  imgUrl: StaticImageData;
}

export const Section: React.FC<pageProps> = ({
  id,
  title,
  description,
  text,
  link,
  imgUrl,
}) => {
  const [hovered, SetHovered] = useState<boolean>(false);
  const redBoxRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { scrollYProgress } = useScroll({
    target: redBoxRef,
    offset: [
      [1, 0],
      [0, 1],
    ],
  });
  const yTransform = isLargeScreen ? [-300, 300] : [-25, 250];
  const y = useSpring(useTransform(scrollYProgress, [0, 1], yTransform), {
    damping: 100,
    stiffness: 300,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Box scroll: ", latest);
  });

  return (
    <section className=" h-screen  w-full relative flex justify-center px-32 items-center snap-center">
      <motion.div
        ref={redBoxRef}
        className=" hidden lg:block  rounded-lg  overflow-hidden relative w-1/3 left-0   "
      >
        {" "}
        <Image
          src={imgUrl}
          alt="Beiträge"
          className=" object-fill h-[400px] aspect-square  "
        />
      </motion.div>

      <motion.div
        style={{ y: y }}
        className="  lg:h-[400px] px-12 rounded-md   lg:w-2/3 bg-white flex flex-col justify-center gap-y-12 p-8 "
      >
        <div className="flex flex-col gap-y-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <p className="text-sm leading-4">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          accusamus dolorem molestias explicabo assumenda? At labore doloremque
          maiores ea nemo reiciendis possimus dignissimos laboriosam numquam?
          Maxime nulla eum quam quae! Totam similique ipsa voluptatibus culpa
          corrupti quod, voluptatem deserunt error consectetur molestiae
          consequuntur dolores nostrum illum quis iste aperiam pariatur
          reprehenderit qui cum modi numquam blanditiis odio repudiandae.
          Perspiciatis, odit?
        </p>

        <div className="h-[48px] w-[256px]"></div>
        <div
          onMouseEnter={() => SetHovered(true)}
          onMouseLeave={() => SetHovered(false)}
          className={`absolute h-[48px] w-[256px] cursor-pointer bottom-6 flex justify-center items-center border-2  z-50 ${
            hovered
              ? "text-white border-white"
              : "text-blue-600 border-blue-600"
          } `}
        >
          <Link href={link}>Go visit me</Link>
        </div>
        <motion.svg
          viewBox="0 0 50 2"
          className="absolute h-[48px] w-[256px] cursor-pointer bottom-6 "
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hovered ? 1 : 0 }}
            d="M 0 1 L 50 1 "
            className="stroke-[20px] stroke-blue-500"
          ></motion.path>
        </motion.svg>
      </motion.div>
    </section>
  );
};
