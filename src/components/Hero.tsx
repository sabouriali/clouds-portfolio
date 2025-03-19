"use client";

import Image from "next/image";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

import Clouds from "./ui/Clouds";

import profilepic from "@/assets/profilepic.png";

function Hero() {
  const parallaxRef = useRef(null);

  return (
    <div className="relative overflow-x-clip min-h-screen pt-12 flex items-center justify-center bg-[linear-gradient(180deg,#557bad,#8baac4,#5d97c9,#000)]">
      <div
        className="container mx-auto space-y-6 flex items-center justify-center flex-col text-center"
        ref={parallaxRef}
      >
        <Image
          src={profilepic}
          alt="profile pic"
          className="mx-auto"
          width={250}
        />
        <h1 className="text-blue-200 font-extrabold text-7xl">Lets create</h1>
        <TypeAnimation
          sequence={["experience", 1000, "websites", 1000, "designs", 1000]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className="text-7xl text-white inline-block font-extrabold"
        />
        <p className="text-blue-200 text-2xl font-semibold max-w-[500px]">
          My name is John Doe. I'm a full-stack developer with 5+ years
          experience.
        </p>
        <Clouds parallaxRef={parallaxRef} />
      </div>
    </div>
  );
}

export default Hero;
