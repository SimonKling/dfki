import React, { FC } from "react";
import { LinkPreview } from "./link-preview";
import Image, { StaticImageData } from "next/image";

interface BeitraegeProps {
  heading: string;
  description: string;
  url: string;
  imgurl?: StaticImageData;
  interview: boolean;
}

const Beitraege: FC<BeitraegeProps> = ({
  heading,
  description,
  url,
  imgurl,

  interview,
}) => {
  return (
    <div className="bg-white flex flex-col justify-between gap-y-2  w-full relative  max-h-96 px-4 py-6 bg-gradient-to-br from-[#002c75] border  to-[#39a1ff] text-white rounded-[1vmin]  bg-opacity-50 backdrop-blur-sm ">
      {imgurl && (
        <Image
          src={imgurl}
          alt="Beiträge"
          className="absolute top-0 right-0 opacity-50   z-0 rounded-l-[1vmin] h-full w-[45%] object-cover  border-2 border-white hidden sm:block"
        />
      )}

      <div className="h-3/4 grid gap-y-6 z-50 text w-full sm:w-[55%] px-2 ">
        <div className=" text-lg xl:text-xl  font-roboto text-left font-bold h-1/3 ">
          {heading}
        </div>
        <div className="text-xs sm:text-md font-roboto text-left h-2/3">
          {description}
        </div>
      </div>
      <div className=" h-1/4 rounded-[1vmin] font-roboto grid w-[55%] text-center p-4">
        {" "}
        <LinkPreview
          url={url}
          className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 justify-self-start py-2 bg-[#fff] flex items-center text-[#696969] rounded-md font-light transition duration-200 ease-linear text-xs sm:text-md"
        >
          {interview ? "Zum Interview" : "Zum Beitrag"}
        </LinkPreview>{" "}
      </div>
    </div>
  );
};

export default Beitraege;
