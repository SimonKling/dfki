import React, { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import style from "../../styles/Divider.module.css";

interface DividerProps {
  children: React.ReactNode;
}

const Divider: FC<DividerProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div className={style.wrapper}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
      >
        <div
          className={`${style.text} font-poppins  z-0 text-center text-lg sm:text-2xl md:text-3xl xl:text-4xl`}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Divider;
