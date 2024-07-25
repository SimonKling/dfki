"use client";
import React, { useState } from "react";
import HomeCard from "@/components/ui/homecard";

import Divider from "@/components/ui/divider";
import Card from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navbar";
import Bg from "@/components/ui/Bg";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const targetRef = React.useRef(null);

  return (
    <>
      <div className="bg-ki-main ">
        <NavBar />
        <Chatbot />
        <div className="h-screen flex justify-center items-center">
          <Bg />
          <div className="flex flex-col gap-0   ">
            <HomeCard targetRef={targetRef} />
          </div>
        </div>
        <Divider>
          Nutzen Sie die Chancen von Künstliche Intelligenz,
          <br /> um Ihre Effizienz und Wettbewerbsfähigkeit zu steigern.
        </Divider>
        <Card targetRef={targetRef} />
        <Footer />
      </div>
    </>
  );
}
