"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Services", path: "#services" },
  { title: "Contact", path: "#contact" },
];

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  function closeNav() {
    setShowNav(false);
  }

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="z-50 fixed left-[40%] text-white font-bold">
      <div className="border border-white/20 mt-12 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 mx-w-[400px] mx-auto">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 left-5 border rounded text-white/70 border-white/70 z-50 p-2"
      >
        {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <motion.div
        initial={false}
        animate={showNav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 left-0 w-full h-full bg-black/90"
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav} className="text-5xl">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
