"use client";
import React, { useState, useEffect } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import Dfkilogo from "../../public/dfki_Logo_print_white.svg";
import Close from "../../public/close.svg";
import Hamburger from "../../public/hamburger.svg";

import DropdownExtended from "./DropdownExtended";
import Link from "next/link";

interface NavItem {
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  { label: "Angebote", link: "/angebote" },
];

const NavBar: React.FC = () => {
  const [isNavVisible, setNavVisibility] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const toggleNavVisibility = () => {
    setNavVisibility(!isNavVisible);
    console.log(isNavVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`grid grid-cols-3 w-screen fixed items-center z-[100000] border-white border-b border-solid top-0 h-[75px] transition-all
  ${scrolling ? "shadow-xl bg-white bg-opacity-95 " : "bg-transparent"} `}
        style={{ borderBottomWidth: "calc(100% - 10%)" }}
      >
        <Link
          href={"/"}
          className={`${
            scrolling ? "text-[#002C75]" : "text-white"
          } text-2xl font-poppins md:text-3xl font-semibold sm:ml-8 col-span-1 md:col-start-1 col-start-2`}
        >
          KI & Leadership
        </Link>
        <Dfkilogo
          className="absolute w-14 sm:w-16 right-1/2 block col-span-1 col-start-1 md:col-start-2"
          fill={scrolling ? "#002C75" : "#fff"}
        />

        <button
          onClick={toggleNavVisibility}
          className=" fixed block xl:hidden right-5 top-5  z-50 "
          aria-controls="primary-navigation"
          aria-expanded={isNavVisible ? "true" : "false"}
        >
          <span className="sr-only">Menu</span>
          {isNavVisible ? (
            <Close className="w-8 " fill="#002C75" />
          ) : (
            <Hamburger className="w-8" fill={scrolling ? "#002C75" : "#fff"} />
          )}
        </button>

        <nav
          className={`xl:translate-x-0 xl:h-5/6 col-start-3   fixed w-64 xl:relative xl:w-full bg-white bg-opacity-85 backdrop-blur-sm xl:backdrop-blur-none  xl:bg-transparent  z-40 inset-y-0 right-0 flex flex-col items-start xl:items-end justify-center   transition-transform duration-300 ${
            isNavVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul
            className={`list-none flex flex-col xl:flex-row gap-12 p-4 ps-14 pr-14 ${
              isNavVisible
                ? scrolling
                  ? "text-[#002C75] rounded-xl bg-opacity-25"
                  : "text-white"
                : ""
            }`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className={`${
                    isNavVisible
                      ? "text-[#002C75]"
                      : scrolling
                      ? "text-[#002C75]"
                      : "text-white"
                  }  text-xl font-poppins hover:text-gray-300 py-2 m-2 mr-24 sm:mr-0`}
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <DropdownExtended
              titel={"Info"}
              scrolling={scrolling}
              isNavVisible={isNavVisible}
            />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
