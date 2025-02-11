import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/Img/profile.jpg";

import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
function Hero() {
  return (
    
      <section className="container mx-auto text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Apisit Angsuphan
        </h2>
        <h3 className="text-2xl py-2">Front End Developer</h3>
        <p className="text-md py-5 leading-8">
          I am a passionate Front End Web Developer with experience in web
          development and programming.
        </p>
        <p className="text-md py-5 leading-8">
          I thrive on solving new challenges and continuously expanding my
          knowledge of emerging technologies{" "}
        </p>
        <div className="text-5xl flex justify-center gap-16 py-5 my-10 text-gray-700">
          <Link
            href="https://github.com/apisitangsuphan"
            target="_blank"
            className="text-[#010409] hover:text-teal-700"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/apisit-angsuphan-854656202/"
            target="_blank"
            className="text-[#0A66C2] hover:text-teal-700"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            href="https://web.facebook.com/apsit2/"
            target="_blank"
            className="text-[#0866FF] hover:text-teal-700"
          >
            <AiFillFacebook />
          </Link>
        </div>
        <div className="flex justify-center mt-10">
          <Image src={profile} alt="Profile picture" className="rounded-full w-80 items-center justify-center"/>
        </div>
      </section>
    
  );
}

export default Hero;
