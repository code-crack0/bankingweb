import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="home"
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2 text-white text-xl"
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">IEEE BANK.</h1>
      <ul className="hidden md:flex">
        <li className="p-3 hover:border-b-2 cursor-pointer border-[#00df9a] hover:scale-105 ">
          <AnchorLink href="#home">
            Home
          </AnchorLink>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer border-[#00df9a] hover:scale-105">
          <AnchorLink href="#about">
            About
          </AnchorLink>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer border-[#00df9a] hover:scale-105 ">
          <AnchorLink href="#cards">
            Resources
          </AnchorLink>
        </li>
        <li className="p-3 hover:border-b-2 cursor-pointer border-[#00df9a] hover:scale-105">
          <AnchorLink href="#news">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <ul className="hidden md:flex justify-end items-center">
        <li>
          <Link href="/login">
            <button className="hover:border-b-2 hover:scale-105 border-[rgb(0,223,154)] bg w-[90px] font-medium my-6 mx-auto p-2 mr-2 cursor-pointer">
              Sign In
            </button>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <button className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-2 text-black cursor-pointer">
              Register
            </button>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          IEEE BANK.
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
        <li>
          <Link href="/login">
            <button className="hover:border-b-2 hover:scale-105 border-[rgb(0,223,154)] bg w-[90px] font-medium my-6 mx-auto p-2 mr-2 cursor-pointer">
              Sign In
            </button>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <button className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-2 text-black cursor-pointer">
              Register
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
