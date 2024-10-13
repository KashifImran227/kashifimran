"use client";
import { Socials } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; 
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-slate/30 bg-[#26125350] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[-10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <img
            src="km.png"
            alt="logo"
            height={70}
            width={90}
            className="cursor-pointer hover:animate-spin rounded-3xl"
          />
        </Link>

      
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-300" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>

      
        <div
          className={`hidden md:flex w-[500px] h-full flex-row items-center justify-between`}
        >
          <div className="flex gap-12 items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[20px] px-[20px] py-[10px] rounded-full text-gray-300">
            <Link href="#about-me" className="cursor-pointer">
              About Me
            </Link>
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
            <Link href="#contact" className="cursor-pointer">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-3 h-7 object-cover">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={35}
              height={60}
              className="cursor-pointer hover:animate-spin object-cover"
            />
          ))}
        </div>
      </div>

   
      {isMenuOpen && (
        <div className="flex flex-col md:hidden bg-[#0300145e] border border-[#7042f861] rounded-md mt-2 px-4 py-2 absolute w-full left-0">
          <Link
            href="#about-me"
            className="py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            About Me
          </Link>
          <Link
            href="#skills"
            className="py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Contact Me
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
