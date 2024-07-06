import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from 'react-icons/fa';
const Work1 = () => {
  return (



    <div className="bg-zinc-100 mx-8 rounded-2xl shadow-xl">
  
      <HorizontalScrollCarousel />
  
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  console.log(scrollYProgress.get());
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);
  
  return (
<>
<div className="">
<h1 className=" font-bold md:text-8xl mt-12 ml-5 p-8 mb-2 text-3xl tracking-tighter text-zinc-500 ">Some of my
<span className="ml-3 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 inline-block text-transparent bg-clip-text">recent work.</span>
</h1>

<section ref={targetRef} className="relative h-[400vh] rounded-xl bg-zinc-100">
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

// const Card = ({ card }) => {
//   return (
//     <a href={card.link} target="_blank" rel="noopener noreferrer" className="group relative h-[450px] w-[480px] overflow-hidden bg-black cursor-pointer hover:scale-105 hover:rounded-lg transition-transform ease-in-out duration-300 shadow-md hover:shadow-yellow-300">
//       {/* Text Container */}
//       <div className="absolute top-3 left-2 z-10 p-8 ">
//         <p className="text-yellow-200 text-sm mb-1 uppercase font-sans font-bold tracking-tighter">{card.tech}</p>
//         <p className="text-neutral-200 mb-2 text-3xl font-bold font-sans tracking-tighter">{card.title}</p>
//         <p className="text-base tracking-wider font-sans font-light text-gray-200 ">{card.info}</p>
//       </div>

//       {/* Background Image with Hover Effects */}
//       <div
//         style={{
//           backgroundImage: image(${card.image}),
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 hover:scale-110 transition-transform ease-in-out duration-300 bg-black opacity-60 hover:opacity-40 hover:backdrop-blur-md"
//       ></div>
      
//       {/* Overlay */}
//       <div className="p-4 shadow-lg transition-all duration-900 ease-in-out hover:scale-105"></div>

//       {/* Arrow Icon */}
//       <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
//         <FaArrowRight size={24} />
//       </div>
//     </a>
//   );
// };




const Card = ({ card }) => {
  // Check if card.tech exists, if not, use an empty string
  const techArray = card.tech ? card.tech.split(',').map(tech => tech.trim()) : [];

  return (
    <a href={card.link} className="group">
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white hover:scale-110 hover:border hover:border-zinc-300 shadow-lg bg-clip-border w-96 h-[450px] cursor-pointer hover:rounded-xl transition-transform duration-500 ease-in-out">
        {/* Image Container */}
        <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-gray-900 shadow-xl bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 font-mono">
          <img
            src={card.image}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h5 className="block mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
            {card.title}
          </h5>
          {/* Technologies in bubbles */}
          <div className="flex flex-wrap gap-2 mt-2">
            {techArray.map((tech, index) => (
              <div key={index} className="bg-cyan-800 rounded-full px-3 py-1 text-sm font-normal tracking-normal text-cyan-100">
                {tech}
              </div>
            ))}
          </div>
          {/* <p className="block font-sans text-base font-light tracking-normal leading-relaxed text-inherit mt-4">
            {card.info}
          </p> */}
        </div>

        {/* Arrow Icon */}
        <div className="absolute bottom-4 right-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <FaArrowRight size={18} />
        </div>
      </div>
    </a>
  );
};










export default Work1;

const cards = [

  {
    image: "project9.png",
    title: "Notesnow",
    info: "An interactive weather app that shows useful weather details and nearby restaurants for the user with dynamic background imagery that adapts to any city the user searches.",
    tech:"React, Typescript, Tailwind CSS",
    link:"https://notes-now.vercel.app/",
    id: 1,
  },
  {
    image: "project1.png",
    title: "NextCity",
    info: "An interactive weather app that shows useful weather details and nearby restaurants for the user with dynamic background imagery that adapts to any city the user searches.",
    tech:"React, JavaScript, Tailwind CSS",
    link:"https://weatherreact-five.vercel.app/",
    id: 2,
  },
  {
    image: "assignmenttracker.jpg",
    title: "Assignment Tracker",
    info:"Track assignments and update them easily.",
    tech:"ASP Core net, C#, SQL Server",
    link:"https://github.com/nkouki98/Assignment-Tracker",
    id: 3,
  },
  {
    image: "project6.png",
    title: "Mad minute compounds",
    info:"Kid's interactive application utilizing sketching methods and design implementation as part of coursework.",
    tech:"Glitch, HTML/CSS, JavaScript",
    link:"https://581-projects.webflow.io/",
    id: 4,
  },
  {
    image: "project4.png",
    title: "Reviewscore+",
    info:"An app that leverages user reviews and NLP libary to score comments and build a confidence measure for youtube channels that review tech products.",
    tech:"Spring Boot, MongoDB",
    link:"https://github.com/nkouki98/ReviewScoreplus",
    id: 5,
  },
  {
    image: "project7.png",
    title: "Bulkbuddies",
    info:"A hackathon project to tackle bulk food purchase waste. I worked on a core feature for user interaction.",
    tech:"Flask, React, Tailwind CSS, Figma",
    link:"https://devpost.com/software/bulkbuddies",
    id: 6,
  },
  
];