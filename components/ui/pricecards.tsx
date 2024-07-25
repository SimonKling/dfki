"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Form } from "./form";

export default function PriceCards({ data }: any) {
  const defaulAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  function handleClick(index: number) {
    setActiveTab(index);
  }
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-4  xl:mt-12"
      >
        {data.map(
          (
            x: {
              title:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | null
                | undefined;
              description:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | null
                | undefined;
            },
            index: number
          ) => (
            <motion.div
              variants={defaulAnimation}
              onClick={() => handleClick(index)}
              className={`${
                activeTab === index
                  ? "border-orange-400 bg-opacity-100"
                  : "bg-opacity-80"
              } flex hover:bg-opacity-100 text-white font-poppins hover:border-orange-400  items-center justify-between flex-col px-3 py-4 border-solid cursor-pointer rounded-xl border-4   `}
            >
              <div className="flex flex-col items-stretch space-y-4 h-full">
                <h2 className="text-2xl font-medium ">{x.title}</h2>

                <p className="text-sm  ">{x.description}</p>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
      <motion.div
        key={activeTab}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.25 }}
        className="mt-6"
      >
        <div className="text-left text-2xl  font-poppins text-white mt-2 mb-4">{`Inhalte des ${data[activeTab].title}`}</div>
        {data[activeTab].features.map(
          (y: {
            title:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | PromiseLikeOfReactNode
              | null
              | undefined;
            tag: string | undefined;
          }) => (
            <motion.div
              variants={defaulAnimation}
              className="p-4 mt-2  bg-gray-100  rounded-xl"
            >
              <div className="flex gap-2 text-gray-800  dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d={y.tag} clipRule="evenodd" />
                </svg>
                <p className="text-md font-poppins w-96 sm:w-full sm:text-xl">
                  {y.title}
                </p>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
      <div className="flex justify-center mt-8">
        {activeTab === 2 || activeTab === 3 ? (
          <>
            <Drawer>
              <DrawerTrigger className="px-8 py-2 tracking-wide text-white  transition-colors duration-300 transform bg-orange-600 rounded-xl hover:bg-orange-500 focus:outline-none focus:bg-orange-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                {data[activeTab].link}
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="text-center mb-6">
                    <DrawerTitle>Kontaktieren Sie uns!</DrawerTitle>
                  </div>

                  <DrawerDescription>
                    <Form />
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <button className="px-8 py-2 tracking-wide text-white  transition-colors duration-300 transform rounded-xl bg-orange-600  hover:bg-orange-500 focus:outline-none focus:bg-orange-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              {" "}
              {data[activeTab].link}
            </button>
          </>
        )}
      </div>
    </>
  );
}
