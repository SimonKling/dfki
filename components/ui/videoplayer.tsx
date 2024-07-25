"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import tb1 from "./assets/thumb_1.jpg";
import tb2 from "./assets/thumb_2.jpg";
import tb3 from "./assets/thumb_3.jpg";
import tb4 from "./assets/thumb_4.jpg";
import tb5 from "./assets/thumb_5.jpg";
import tb6 from "./assets/thumb_6.jpg";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Videoplayer() {
  const data = [
    {
      title: "Willkommensvideo: KI und Leadership",
      description:
        "Gewinnen Sie detailliertes KI-Wissen sowie Einblicke zu Digital Leadership, die neue Rolle der Führungskraft, welche Bedeutung KI in der Aus- und Weiterbildung hat und wie Sie Change-Prozesse, unter Berücksichtigung von ethischen, kulturellen und gesundheitsbewussten Aspekten, bestmöglich umsetzen können. In diesem Willkommensvideo werden die zentralen Inhalte des Kurses und die mitwirkenden Referenten vorgestellt.",
      alt: "thumb_1",
      src: tb1,
      videosrc: "https://www.youtube.com/embed/M4fBrqDuTc0",
    },
    {
      title: "DFKI Innovation & KI-Technologietransfer",
      description:
        "In diesem Video, das im Rahmen eines Studienprojekts mit der Diploma-Hochschule produziert wurde, erhalten Sie einen Einblick in die Arbeitsprozesse bzw. Produktentwicklungen am DFKI. Worin liegt die Faszination in der Mensch-Roboter-Kollaboration und wie können hybride Teams maßgeblich zum unternehmerischen Erfolg beitragen?",
      alt: "thumb_2",
      src: tb2,
      videosrc: "https://www.youtube.com/embed/LA2Tbp2Fq_Q",
    },
    {
      title: "Interviewreihe: Leadership in der Praxis",
      description:
        "In diesem Video, das im Rahmen eines Studienprojekts mit der Diploma-Hochschule produziert wurde, erhalten Sie einen Einblick in die Arbeitsprozesse bzw. Produktentwicklungen am DFKI. Worin liegt die Faszination in der Mensch-Roboter-Kollaboration und wie können hybride Teams maßgeblich zum unternehmerischen Erfolg beitragen?",
      alt: "thumb_3",
      src: tb3,
      videosrc: "https://www.youtube.com/embed/lMptsh5PpGk",
    },
    {
      title: "Interviewreihe: KI-Systeme in der Praxis",
      description:
        "Führungskräfte nehmen eine zentrale Rolle im Prozess der Digitalisierung ein. Daher kommen im Kurs: „KI und Leadership“ auf dem KI-Campus, die Lernplattform für Künstliche Intelligenz, herausragende Führungspersönlichkeiten aus Wirtschaft und Verwaltung im Rahmen der Interviewreihe: „Leadership in der Praxis“ zu Wort. In dem Video stellen wir Ihnen die Gesprächspartner:innen näher vor.",
      alt: "thumb_4",
      src: tb4,
      videosrc: "https://www.youtube.com/embed/TcaN5K5LyH4",
    },
    {
      title: "Situatives Führen",
      description:
        "Für einen erfolgreichen KI-Technologietransfer sollte der Focus im Führungsmanagement auf agile Führungsansätze gelegt werden. Deshalb stellen wir Ihnen in diesem Video beispielhaft den Situativen Führungsstil vor. Erfahren Sie, worin die Vorteile des Führungsstils liegen und worauf bei der Umsetzung zu achten ist.",
      alt: "thumb_5",
      src: tb5,
      videosrc: "https://www.youtube.com/embed/sXYu2dY6p5s",
    },
    {
      title: "Situatives Führen",
      description:
        "Für einen erfolgreichen KI-Technologietransfer sollte der Focus im Führungsmanagement auf agile Führungsansätze gelegt werden. Deshalb stellen wir Ihnen in diesem Video beispielhaft den Situativen Führungsstil vor. Erfahren Sie, worin die Vorteile des Führungsstils liegen und worauf bei der Umsetzung zu achten ist.",
      alt: "thumb_6",
      src: tb5,
      videosrc: "https://player.vimeo.com/video/837522288?h=7013ea6754",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  function handleHover(index: number) {
    setHoveredIndex(index);
  }

  return (
    <>
      <ul className="flex flex-row gap-x-2 text-left mx-auto xl:hidden my-8 ">
        {data.map((x, index) => (
          <li key={x.title}>
            <button
              onClick={() => handleHover(index)}
              className={`${
                hoveredIndex === index
                  ? "bg-[#39a1ff] text-[#fff]"
                  : "bg-[#fff] text-[#39a1ff]"
              } shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] w-12 aspect-square rounded-full font-light transition duration-200 ease-linear`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <div className="sm:rounded-[69px] py-4 sm:px-16 mx-auto bg-blue-800 bg-opacity-75 w-full md:w-4/5 xl:w-1/2 mt-12 ">
        <ReactPlayer
          width={"100%"}
          className="   "
          url={data[hoveredIndex].videosrc}
          controls={true}
        />
      </div>
      <div className="border-2 border-white  mx-4 xl:mx-auto rounded-lg mb-12 mt-4 p-4 xl:w-2/3 ">
        <div className="text-xl sm:text-2xl font-poppins text-white text-center my-5 font-semibold">
          {data[hoveredIndex].title}
        </div>
        <div className="text-sm sm:text-lg font-poppins text-white  min-h-[8em] mx-auto  px-4">
          {data[hoveredIndex].description}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-4 gap-16 justify-center mb-10 mx-10">
        {data.map((item, index) => (
          <div key={index} className="xl:flex hidden flex-col">
            <Image
              src={item.src}
              alt={item.alt}
              className={`${
                hoveredIndex === index
                  ? "scale-125 border-blue-400"
                  : "opacity-75 hover:opacity-100"
              } w-[150px] aspect-video rounded-lg mx-auto border-solid  border-2 hover:cursor-pointer`}
              onClick={() => handleHover(index)}
            />
            <div
              className={`${
                hoveredIndex == index ? "scale-125" : ""
              } mt-6 text-white font-poppins text-sm font-bold text-center`}
            >
              {data[index].title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
