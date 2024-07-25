import React, { FC } from "react";
import { motion } from "framer-motion";

interface BgProps {}

const animation = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeIn",
    },
  },
};

const Bg: FC<BgProps> = ({}) => {
  return (
    <motion.svg
      viewBox={"0 0 100 100"}
      //preserve aspect ratio of the svg
      preserveAspectRatio="none"
      className={"absolute h-full w-full blur-lg"}
    >
      <motion.path
        d="M0 30 Q 25 70 50 30 T 100 30"
        fill="transparent"
        strokeWidth="2"
        className={"stroke-ki-secondary"}
        initial="initial"
        animate="animate"
        variants={animation}
      />
      <motion.path
        d="M0 50 Q 25 20 50 40 T 100 40"
        fill="transparent"
        strokeWidth="2"
        className={"stroke-orange-500"}
        initial="initial"
        animate="animate"
        variants={animation}
      />
      <motion.path
        d="M0 60 Q 25 70 50 50 T 100 50"
        fill="transparent"
        className={"stroke-blue-700"}
        strokeWidth="2"
        initial="initial"
        animate="animate"
        variants={animation}
      />
      <motion.path
        d="M0 70 Q 25 30 50 60 T 100 60"
        fill="transparent"
        strokeWidth="2"
        className={"stroke-blue-700"}
        initial="initial"
        animate="animate"
        variants={animation}
      />
      <motion.path
        d="M0 80 Q 25 80 50 90 T 100 60"
        fill="transparent"
        strokeWidth="2"
        className={"stroke-ki-secondary"}
        initial="initial"
        animate="animate"
        variants={animation}
      />
    </motion.svg>
  );
};

export default Bg;
