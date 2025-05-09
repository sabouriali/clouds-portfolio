"use client";

import { type RefObject, useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import cloud1 from "@/assets/cloud1.png";
import cloud2 from "@/assets/cloud2.png";
import cloud3 from "@/assets/cloud3.png";
import cloud4 from "@/assets/cloud4.png";
import cloud5 from "@/assets/cloud5.png";

import Circles from "./Circles";

interface CloudsProps {
  parallaxRef: RefObject<HTMLDivElement | null>;
}

function Clouds({ parallaxRef }: CloudsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute top-[-45%] left-[50%] w-[78rem] -translate-x-1/2 aspect-square">
      <Circles />
      <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-[7%] -left-[5%] origin-bottom transition-transform duration-500 ease-out">
          <img
            src={cloud1.src}
            alt="cloud 1"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="absolute bottom-[55%] right-[18%] origin-bottom transition-transform duration-500 ease-out">
          <img
            src={cloud2.src}
            alt="cloud 2"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="absolute bottom-[5%] -right-[2%] origin-bottom transition-transform duration-500 ease-out">
          <img
            src={cloud3.src}
            alt="cloud 3"
            className={`w-72 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="absolute bottom-[45%] left-[-5%] origin-bottom transition-transform duration-500 ease-out">
          <img
            src={cloud4.src}
            alt="cloud 4"
            className={`w-64 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="absolute bottom-[25%] right-[7%] origin-bottom transition-transform duration-500 ease-out">
          <img
            src={cloud5.src}
            alt="cloud 5"
            className={`w-64 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
}

export default Clouds;
