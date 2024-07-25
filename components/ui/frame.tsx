import React, { FC } from "react";
import style from "../../../../styles/Frame.module.css";

interface FrameProps {
  src: string;
  title: string;
  isFrame: boolean;
  text: string;
}

const Frame: FC<FrameProps> = ({ src, title, isFrame, text }) => {
  return (
    <>
      {isFrame ? (
        <>
          <iframe className={style.Frame} src={src} title={title}></iframe>
          <p className="text-xl ">{text}</p>
        </>
      ) : (
        <>
          <img className={style.image} src={src} alt={title} />

          <div className="grid grid-rows-2">
            <p className="text-xl ">{text}</p>
            <a className={`${style.customBTN} text-center`} href="">
              Hier zum Kurs
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Frame;
