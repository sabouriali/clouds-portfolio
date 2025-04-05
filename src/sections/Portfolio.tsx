"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";

import project1 from "@/assets/proj6.png";
import project2 from "@/assets/proj7.png";
import project3 from "@/assets/proj8.png";
import project4 from "@/assets/proj9.png";

const projects = [
  {
    id: 1,
    title: "DesignCube Framer Website",
    category: "Web Design",
    image: project1,
    bulletPoints: [
      "Enhanced user experience by 40%",
      "Improved site speed by 50%",
      "Increased mobile traffic by 35%",
    ],
  },
  {
    id: 2,
    title: "HealthWell Website in Framer",
    category: "Web Design",
    image: project2,
    bulletPoints: [
      "Improved site speed by 50%",
      "Enhanced user experience by 40%",
      "Increased mobile traffic by 35%",
    ],
  },
  {
    id: 3,
    title: "Thelist Framer Website",
    category: "Web Design",
    image: project3,
    bulletPoints: [
      "Increased mobile traffic by 35%",
      "Enhanced user experience by 40%",
      "Improved site speed by 50%",
    ],
  },
  {
    id: 4,
    title: "Reify Website in Framer",
    category: "Web Design",
    image: project4,
    bulletPoints: [
      "Enhanced user experience by 40%",
      "Increased mobile traffic by 35%",
      "Improved site speed by 50%",
    ],
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-16 container mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index / 5 }}
          viewport={{ once: true }}
          className="border border-white/20 flex flex-col md:flex-row text-white rounded-3xl bg-gradient-to-r from-[#0d0d03] via-[#303131] to-[#212122] p-12 justify-between items-start mb-24 w-[300px] md:w-[1100px] sticky top-28 space-x-4 mx-auto"
        >
          <div className="space-y-6">
            <p className="text-sky-300 text-lg font-bold">{project.category}</p>
            <h2 className="text-2xl font-bold md:text-4xl">{project.title}</h2>
            <ul className="space-y-2">
              {project.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-3xl"
          />
        </motion.div>
      ))}
    </section>
  );
}

export default Portfolio;
