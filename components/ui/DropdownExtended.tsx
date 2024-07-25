import Link from "next/link";
import React, { FC, useState } from "react";

interface DropdownExtendedProps {
  titel: string;
  isNavVisible: boolean;
  scrolling: boolean;
}

const DropdownExtended: FC<DropdownExtendedProps> = ({
  titel,
  isNavVisible,
  scrolling,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <li
        className="relative w-12"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => setVisible(true)}
      >
        <span
          className={`${
            isNavVisible
              ? "text-[#002C75]"
              : scrolling
              ? "text-[#002C75]"
              : "text-white"
          }  text-xl font-poppins hover:text-gray-300 py-2 m-2 mr-24 sm:mr-0`}
        >
          {titel}
        </span>{" "}
        {visible && (
          <div className="absolute right-0 font-poppins w-26 min-h-fit top-8  flex flex-col  ">
            <Link
              className="border rounded-t border-gray-200 border-r-0 border-l-0 h-full px-2 py-1 cursor-pointer  text-white bg-ki-main bg-opacity-90 backdrop-blur-sm hover:bg-opacity-100 text-lg"
              href={"/beitraege"}
            >
              Beiträge
            </Link>
            <Link
              className="border border-gray-200 border-r-0 border-l-0 h-full px-2 py-1 cursor-pointer  text-white bg-ki-main bg-opacity-90 backdrop-blur-sm hover:bg-opacity-100 text-lg"
              href={"/videos"}
            >
              Videos
            </Link>
            <Link
              className="border border-gray-200 border-r-0 border-l-0 h-full px-2 py-1 cursor-pointer  text-white bg-ki-main  bg-opacity-90 backdrop-blur-sm hover:bg-opacity-100 text-lg"
              href={"/broschueren"}
            >
              Broschüren
            </Link>
          </div>
        )}
      </li>
    </>
  );
};

export default DropdownExtended;
