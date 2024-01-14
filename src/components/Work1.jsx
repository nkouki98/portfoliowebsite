import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from 'react-icons/fa';
const Work1 = () => {
  return (
    <div className="bg-neutral-200">
  
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
<h1 className="font-bold md:text-8xl ml-5 p-8 mb-2 tracking-tighter text-neutral-700 ">Some of my
<span className="ml-3 text-yellow-500">recent work.</span>
</h1>

<section ref={targetRef} className="relative h-[400vh] bg-neutral-200">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section></>
  );
};

const Card = ({ card }) => {
  return (
    <a href={card.link} target="_blank" rel="noopener noreferrer" className="group shadow-xl rounded-xl relative h-[450px] w-[500px] overflow-hidden bg-black cursor-pointer hover:scale-105">
      {/* Text Container */}
      <div className="absolute top-3 left-2 z-10 p-8">
        <p className="text-yellow-200 text-sm mb-1 uppercase font-sans font-bold tracking-tighter">{card.tech}</p>
        <p className="text-neutral-200 mb-2 text-3xl font-bold font-sans tracking-tighter">{card.title}</p>
        <p className="text-base tracking-wider font-sans font-light text-gray-200">{card.info}</p>
      </div>

      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-100 bg-black opacity-50"
      ></div>

      {/* Arrow Icon */}
      <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FaArrowRight size={24} />
      </div>
    </a>
  );
};

export default Work1;

const cards = [
  {
    url: "project1.png",
    title: "City Scapes and Eats",
    info: "An interactive weather app that shows useful weather details and nearby restaurants for the user with dynamic background imagery that adapts to any city the user searches.",
    tech:"React, Tailwind CSS, Rapid API",
    link:"https://github.com/nkouki98/weatherreact",
    id: 1,
  },
  {
    url: "project6.png",
    title: "Mad minute compounds",
    info:"Kid's interactive application utilizing sketching methods and design implementation as part of coursework.",
    tech:"React, Tailwind CSS, Rapid API",
    link:"https://581-projects.webflow.io/",
    id: 2,
  },
  {
    url: "project4.png",
    title: "Reviewscore+",
    info:"An app that leverages user reivews and NLP libary to score comments and build a confidence measure for youtube channels that review tech products.",
    tech:"React, Tailwind CSS, Rapid API",
    link:"https://github.com/nkouki98/ReviewScoreplus",
    id: 3,
  },
  {
    url: "project7.png",
    title: "Bulkbuddies",
    info:"A hackathon project to tackle bulk food purchase waste.",
    tech:"React, Tailwind CSS, Rapid API",
    link:"https://devpost.com/software/bulkbuddies",
    id: 4,
  },
  
];