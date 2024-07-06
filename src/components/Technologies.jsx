import React from 'react';
import { FaReact, FaPython, FaJava, FaGit, FaCss3Alt, FaBootstrap, FaAws, FaJsSquare, FaNode, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiDjango, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const technologies = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'TypeScript', icon: <FaJsSquare /> },
  { name: 'AWS Lambda', icon: <FaAws /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Node', icon: <FaNode /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'Django', icon: <SiDjango /> },
];

const Technologies = () => {
  return (
    <section className="p-16 m-8 bg-zinc-900 border-2 border-zinc-900 mt-8 rounded-xl shadow-3xl">
      <div className="container mx-auto text-center">
        <h2 className="font-bold font-sans text-4xl ml-5 p-8 mb-2 tracking-tighter text-neutral-300">
          Technologies.
        </h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center text-zinc-400">
              <div className="text-3xl mb-1">{tech.icon}</div>
              <h3 className="text-lg font-normal tracking-tight font-sans">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
