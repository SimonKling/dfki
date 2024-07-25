"use client";
import React, { FC, useState } from "react";
import TabButton from "./tabbutton";
import Frame from "./frame";
import style from "../../../styles/Card.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface CardProps {
  targetRef: React.RefObject<HTMLDivElement>; // Update type to HTMLDivElement
}

const Card: FC<CardProps> = ({ targetRef }) => {
  const defaulAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div
        ref={targetRef}
        className="flex flex-col gap-y-20 items-center justify-evenly  min-h-[75vh] my-20 z-[100000] "
      >
        <div className="w-full xl:w-1/2 bg-white rounded-[1vmin]">
          <h4 className="text-center font-poppins text-xl md:text-2xl bg-gradient-to-r from-[#319afF] to-[#002c75] text-white p-4 rounded-t-[1vmin] shadow-lg ">
            KI und Leadership: ein Kurs des KI-Campus
          </h4>
          <h5 className="mb-2 text-md md:text-xl font-poppins  leading-tight p-3 text-center">
            Es erwartet Sie ein vielseitiges und interdisziplinäres Kursprogramm
            zu den Themen: Leadership, KI-Know-how und Technologietransfer in
            Zeiten des digitalen Wandels.
          </h5>
          <div className=" px-6 py-3 bg-gradient-to-r from-[#319afF] to-[#002c75] font-poppins text-white text-lg md:text-2xl  text-center italic ">
            "Schaffen Sie Brücken zwischen Management und Technik"
          </div>
          <p className=" mt-4 px-8 text-center text-md md:text-lg font-poppins">
            Unser Kurs richtet sich an{" "}
            <span className="font-bold">Führungskräfte</span>,{" "}
            <span className="font-bold">zukünftige Führungskräfte</span> und{" "}
            <span className="font-bold">Studierende</span>,
            <br />
            die sich für die spätere Übernahme von Führungsaufgaben
            interessieren:
          </p>
          <ul className="list-disc flex flex-col gap-y-2  ms-8 mt-2 p-4 font-poppins">
            <li className="text-sm md:text-lg ">
              Sie möchten einen schnellen Einblick in relevante Themen gewinnen?
              <br />
              Dann steht Ihnen unser
              <a
                className="font-bold "
                href="https://learn.ki-campus.org/courses/kileadership-dfki2021"
              >
                 Mikrokurs 
              </a>
              mit 3 Modulen zur Verfügung.
            </li>
            <li className="text-sm md:text-lg ">
              Sie möchten sich tiefgreifend mit den Inhalten beschäftigen?
              <br /> Dann besuchen Sie gerne unseren{" "}
              <a
                href="https://learn.ki-campus.org/courses/kileadership-dfki2022"
                className="font-bold "
              >
                Gesamtkurs
              </a>{" "}
              mit 15 Modulen
            </li>
            <li className="text-sm md:text-lg">
              Sie möchten passgenaue Inhalte für interne Qualifizierungen
              zusammenstellen?
              <br />
              Dann ist unser 
              <a className="/angebote font-bold">Selection-Kurs</a> richtig.
            </li>
          </ul>
        </div>
        <div className="w-full xl:w-2/3 mb-12 sm:mb-0 ">
          <AnimatePresence>
            <Tabs
              defaultValue="account"
              className=" w-fit min-h-96 mx-auto  text-center rounded-[1vmin] font-poppins bg-gradient-to-r from-[#319afF] to-[#002c75] "
            >
              <div className="pt-2 ">
                <TabsList className="z-[9999]">
                  <TabsTrigger className="z-[9999]" value="account">
                    Einführung & Referenz
                  </TabsTrigger>
                  <TabsTrigger className="z-[9999]" value="password">
                    Zum Kurs
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-white w-fit rounded-b-[1vmin]  text-black mt-4 ">
                <TabsContent value="account" className="flex gap-x-2 ">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row  lg:w-[1050px]  w-full flex-wrap ">
                      <div className="w-full lg:w-1/2 flex flex-col ">
                        <ReactPlayer
                          width={"100%"}
                          height={300}
                          className="border-4 border-white"
                          controls={true}
                          url={
                            "https://www.youtube.com/embed/RqNAcQlGUik?si=IOH_4_iQ9acMKpfe"
                          }
                        ></ReactPlayer>
                        <motion.span
                          initial="hidden"
                          animate="visible"
                          transition={{ staggerChildren: 0.01 }}
                          className="text-xl text-blue-400 py-4   font-bold block"
                        >
                          {"Einführungsvideo".split("").map((x, index) => (
                            <motion.span key={index} variants={defaulAnimation}>
                              {x}
                            </motion.span>
                          ))}
                        </motion.span>
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col">
                        <ReactPlayer
                          width={"100%"}
                          height={"300px"}
                          className="border-4 border-white"
                          controls={true}
                          url={
                            "https://player.vimeo.com/video/912126253?h=63c1605977&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          }
                        ></ReactPlayer>
                        <motion.span
                          initial="hidden"
                          animate="visible"
                          transition={{ staggerChildren: 0.01 }}
                          className="text-xl text-blue-400 py-4   font-bold block"
                        >
                          {"Referenzvideo".split("").map((x, index) => (
                            <motion.span key={index} variants={defaulAnimation}>
                              {x}
                            </motion.span>
                          ))}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  <Image
                    className="mx-auto h-72 mb-4 w-[32em]"
                    width={500}
                    height={1}
                    src="https://ki-campus.org/sites/default/files/2022-04/ankundigungsbild_kurs_ki_und_leadership.jpg"
                    alt={""}
                  />
                  <motion.div animate={{ opacity: [0, 1] }}>
                    <motion.button
                      animate={{ rotate: [0, -2, 2, 0, 0, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1,
                        repeatDelay: 5,
                      }}
                      className="mb-4 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-2000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#02dae6_0%,#0097f5_50%,#025de6_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r   from-[#319afF] to-[#002c75]   px-3 py-1 text-sm font-medium text-white hover:text-white backdrop-blur-3xl">
                        <motion.span
                          initial="hidden"
                          animate="visible"
                          transition={{ staggerChildren: 0.01 }}
                          className="text-xl  font-bold "
                        >
                          {"Besuchen Sie direkt unseren Kurs"
                            .split("")
                            .map((x, index) => (
                              <motion.span
                                key={index}
                                variants={defaulAnimation}
                              >
                                {x}
                              </motion.span>
                            ))}
                        </motion.span>
                      </span>
                    </motion.button>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Card;
