import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

interface HomeCardProps {
  targetRef: React.RefObject<HTMLElement>;
}

const HomeCard: React.FC<HomeCardProps> = ({ targetRef }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const executeScroll = (): void => {
    if (targetRef && targetRef.current) {
      const targetPosition =
        targetRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const defaultAnimation: any = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const flowIn: any = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.75 } },
  };

  return (
    <>
      <div
        ref={ref}
        className="  flex  flex-col text-center  text-white font-bold z-[9999]  "
      >
        <div className="w-3/4 mx-auto">
          <motion.span
            className="text-4xl sm:text-5xl xl:text-6xl font-poppins font-semibold z-[9999]  "
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.015 }}
          >
            {`Als Führungskraft: Fit für KI-Systeme und Teamdynamiken?`
              .split("")
              .map((x, index) => (
                <motion.span
                  className="z-50"
                  key={index}
                  variants={defaultAnimation}
                >
                  {x}
                </motion.span>
              ))}
          </motion.span>
        </div>
        <div className=" mx-4 xl:w-3/5 z-[9999] rounded xl:mx-auto flex justify-evenly  mt-12 flex-row flex-wrap items-center border-2 backdrop-blur-md border-blue-200">
          <HeroHighlight className=" lg:w-2/3 p-4  ">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-md md:text-xl  font-poppins xl:text-2xl font-bold text-left p-8  text-white    "
            >
              Möchten Sie
              <Highlight className="text-white">
                sich souverän im Umgang mit KI-Systemen fühlen
              </Highlight>
              und wissen, wie Sie Ihre Mitarbeitenden durch die digitalen
              Arbeitsprozesse führen?
            </motion.div>
          </HeroHighlight>
          <button
            onClick={executeScroll}
            className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 hidden xl:block"
          >
            Mehr Infos
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
