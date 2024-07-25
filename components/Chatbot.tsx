"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, MessageCirclePlus, X } from "lucide-react";
import React, { FC, useState } from "react";
import { blob } from "stream/consumers";

interface ChatbotProps {}

const data = [
  { user: "me", message: "Hello " },
  { user: "chatbot", message: "Hi there! How can I assist you today?" },
  { user: "me", message: "I'm looking for information on JavaScript." },
  {
    user: "chatbot",
    message:
      "JavaScript is a versatile programming language commonly used for web development.",
  },
  { user: "me", message: "Can you tell me more about JavaScript functions?" },
  {
    user: "chatbot",
    message:
      "Sure! Functions in JavaScript are blocks of code designed to perform a particular task.",
  },
  { user: "me", message: "Thanks! That helps a lot." },
  {
    user: "chatbot",
    message: "You're welcome! Feel free to ask if you have any more questions.",
  },
];

const slideInAndOut = {
  hidden: { opacity: 0, height: "0px", width: "0px" },
  visible: { opacity: 1, height: "384px", width: "256px" },
};
const Chatbot: FC<ChatbotProps> = ({}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setClicked(true)}
        className={`${
          clicked ? "hidden" : ""
        } fixed rounded-full cursor-pointer flex items-center justify-center w-16 h-16 p-3  border-[#002c75] border-2 bg-white right-5 bottom-5 z-[10000]`}
      >
        <MessageCircle className="stroke-[#002c75] w-full h-full" />
      </div>
      <AnimatePresence>
        {clicked && (
          <motion.div
            variants={slideInAndOut}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            className="fixed right-5 bottom-5 w-64 h-96 rounded bg-white z-[10000] border-2 px-2 py-1 border-[#002c75]"
          >
            <div className="relative flex flex-col justify-between w-full h-full">
              <X
                onClick={() => setClicked(false)}
                className="cursor-pointer absolute right-5 top-5  stroke-[#002c75]"
              />
              <ul className=" h-full bg-gray-200 pt-12 w-full gap-y-1 overflow-scroll grid">
                {data.map((e, index) => (
                  <li
                    className={`text-xs w-32 ${
                      e.user == "me"
                        ? "rounded rounded-tr-none border justify-self-end border-[#002c75] bg-white text-[#002c75] px-2"
                        : "rounded rounded-tl-none border justify-self-start border-[#002c75] bg-white text-[#002c75] px-2"
                    } `}
                    key={index}
                  >
                    {e.message}
                  </li>
                ))}
              </ul>
              <div className=" w-full ">
                <form
                  className="relative"
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("SUBMITTED");
                  }}
                >
                  <input
                    type="text"
                    className="w-full h-12 rounded border-[#002c75] border inline-flex"
                  />
                  <button type="submit">
                    <MessageCirclePlus className="stroke-[#002c75] bottom-3 cursor-pointer right-1 absolute " />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
