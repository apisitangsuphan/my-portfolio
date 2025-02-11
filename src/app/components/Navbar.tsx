"use client";
import React, { useState } from "react";
import Link from "next/link";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";

function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  console.log("set dark mode: " + darkMode);
  return (
    <div className="w-full bg-gray-100 shadow-md">
      <nav className="flex justify-between py-7 mb-12 px-20 items-center">
        <h1 className="font-burtons text-gray-700 text-xl font-bold">
          <Link href={"/"} className= "" >
            Portfolio
          </Link>
        </h1>
        <ul className="flex justify-between space-x-6 text-gray-700 ">
          
          <li className="hover:text-gray-400"><Link href={"/"}>About</Link></li>
          <li className="hover:text-gray-400"><Link href={"/"}>Skills</Link></li>
          <li className="hover:text-gray-400"><Link href={"/"}>MiniProject</Link></li>
        </ul>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link
              href={"/"}
              onClick={() => setDarkMode(!darkMode)}
              className="hover:pointer hover:text-white"
            >
              {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              className="flex justify-between items-center gap-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 hover:text-white rounded-md ml-8"
            >
              Resume <MdFileDownload />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
