import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from 'react-icons/fa';

const Work1 = () => {
  return (
    <div className="bg-neutral-100 mx-8 rounded-2xl shadow-xl">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <>
      <div className="border rounded-2xl border-spacing-2 border-zinc-400 shadow-md">
        <h1 className="font-bold md:text-8xl mt-12 ml-5 p-8 mb-2 text-3xl tracking-tighter text-zinc-700 ">
          Some of my
          <span className="ml-3 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 inline-block text-transparent bg-clip-text">
            recent work.
          </span>
        </h1>
        <section ref={targetRef} className="relative h-[500vh]">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
            <motion.div style={{ x }} className="flex gap-6">
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};



const Card = ({ card }) => {
  const techArray = card.tech ? card.tech.split(',').map(tech => tech.trim()) : [];

  return (
    <motion.a 
      href={card.link} 
      className="group"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <div className="relative mt-3 text-gray-700 bg-white hover:scale-95 shadow-md hover:shadow-3xl bg-clip-border hover:border hover:border-gray-400 w-[30rem] h-[550px] cursor-pointer rounded-xl transition-transform duration-[1200ms] ease-in-out overflow-hidden bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 font-semibold p-3">
        <h1 className="font-sans tracking-tighter font-semibold text-gray-600 text-lg mb-1">{card.title}</h1>
        <div className="relative h-[450px] overflow-hidden text-gray-900 rounded-xl">
        {card.mp4 ? (
            <video
              src={card.mp4}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          ) : (
            <img
              src={card.image}
              alt={card.title}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-0 transition-opacity duration-900 ease-in-out"></div>
        </div>
        {/* White background container for title and tech */}
        <div className="absolute bottom-0 bg-gray-900/0 left-0 w-full text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out p-2 flex flex-col items-center space-y-2">
          <div className="flex flex-wrap justify-center">
            {techArray.map((tech, index) => (
              <span key={index} className="rounded-xl px-1 py-2 text-sm font-normal tracking-tighter font-mono text-gray-900">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className=" absolute bottom-4 right-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <FaArrowRight size={16} />
        </div>
      </div>
    </motion.a>
  );
};




export default Work1;

const cards = [
  {
    image: "project9.png",
    mp4:"notecreateapp.mp4",
    title: "Notesnow",
    info: "An interactive weather app that shows useful weather details and nearby restaurants for the user with dynamic background imagery that adapts to any city the user searches.",
    tech:"React, Typescript, Tailwind CSS",
    link:"https://notes-now.vercel.app/",
    id: 1,
  },
  {
    image: "project1.png",
    mp4:"weatherapp.mp4",
    title: "NextCity",
    info: "An interactive weather app that shows useful weather details and nearby restaurants for the user with dynamic background imagery that adapts to any city the user searches.",
    tech:"React, JavaScript, TailwindCSS",
    link:"https://weatherreact-five.vercel.app/",
    id: 2,
  },
  {
    image: "assignmenttracker.jpg",
    mp4:"", 
    title: "Assignment Tracker",
    info:"Track assignments and update them easily.",
    tech:"ASP Core net, C#, SQL Server",
    link:"https://github.com/nkouki98/Assignment-Tracker",
    id: 3,
  },
  {
    image: "project6.png",
    mp4:"",
    title: "Mad minute compounds",
    info:"Kid's interactive application utilizing sketching methods and design implementation as part of coursework.",
    tech:"Glitch, HTML/CSS, JavaScript",
    link:"https://581-projects.webflow.io/",
    id: 4,
  },
  {
    image: "project4.png",
    mp4:"",
    title: "Reviewscore+",
    info:"An app that leverages user reviews and NLP libary to score comments and build a confidence measure for youtube channels that review tech products.",
    tech:"Spring Boot, MongoDB",
    link:"https://github.com/nkouki98/ReviewScoreplus",
    id: 5,
  },
  {
    image: "project7.png",
    mp4:"",
    title: "Bulkbuddies",
    info:"A hackathon project to tackle bulk food purchase waste. I worked on a core feature for user interaction.",
    tech:"Flask, React, TailwindCSS, Figma",
    link:"https://devpost.com/software/bulkbuddies",
    id: 6,
  },
];
