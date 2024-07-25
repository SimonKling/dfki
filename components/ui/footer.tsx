import { FC } from "react";
import Image from "next/image";
import Dfkilogo from "../../public/dfki_Logo_print_white.svg";
import style from "../../styles/Footer.module.css";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <>
      <div className="bg-white  font-poppins   w-screen ">
        <svg
          className="bg-transparent block h-[30px] z-0 relative top-[0px] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-[#002c75]"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <footer className="bg-white text-[#002c75] text-center  h-fit grid xl:grid-cols-2 px-4 sm:px-12 pt-6 pb-6 gap-y-8 gap-x-4">
          <div className="text-justify flex flex-col gap-y-2 mx-auto ">
            <h1 className="sm:text-3xl text-2xl text-[#002c75] font-semibold">
              KI und Leadership
            </h1>
            <p className="sm:text-xl">
              Ein Online-Kurs auf dem KI-Campus, die Lernplattform für
              Künstliche Intelligenz
              <br />
            </p>
            <div className="flex flex-row gap-4 w-full ">
              <Dfkilogo className="fill-[#002c75] w-48 sm:w-24" />
              <p className="text-[#002c75] xl:text-lg  xl:w-2/3 text-left">
                Eine Website des Deutschen Forschungszentrums für Künstliche
                Intelligenz GmbH, DFKI
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-y-8">
            <div className="text-start sm:w-64 ">
              <h4 className="sm:text-xl font-semibold">Kontakt</h4>
              <p className="pt-2">
                Educational Technology Lab <wbr />
                Deutsches Forschungszentrum für Künstliche Intelligenz
                GmbH(DFKI)
                <br />
                info@leadership.de
              </p>
            </div>
            <div className="text-justify flex flex-col ">
              <div className="sm:text-xl font-semibold"> Nützliche Links</div>
              <Link href={"/"} className="text-lg hover:font-semibold  pt-2 ">
                Startseite
              </Link>
              <Link
                href={"/angebote"}
                className="text-lg  hover:font-semibold "
              >
                Angebote
              </Link>
              <Link
                href={"/beitraege"}
                className="text-lg  hover:font-semibold "
              >
                Beiträge
              </Link>

              <Link href={"/videos"} className="text-lg  hover:font-semibold ">
                Videos
              </Link>
              <Link
                href={"/broschueren"}
                className="text-lg  hover:font-semibold "
              >
                Broschüren
              </Link>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <Link href={"/about"} className="text-lg hover:font-semibold  ">
                Impressum
              </Link>
              <Link
                href={"/privacy"}
                className="text-lg  hover:font-semibold  "
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
