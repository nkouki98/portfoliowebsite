import React from 'react';
import { Link } from 'react-scroll';
const StickyNavbar = () => {
  return (
<nav className="sticky justify-center tracking-widest top-0 bg-transparent font-thin font-sans flex py-2 px-8 text-slate-700">
      <ul className="flex">
        <li>
        <button className="mr-4 hover:scale-110">
          <Link
            activeClass="active"
            to="#3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
        </button>
        </li>
        <li>
        <button className="mr-4 hover:scale-110">
          <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </button>
        </li>
        <li>
        <button className="mr-4 hover:scale-110">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           Contact
          </Link>
        </button>
        </li>
        <li>
        <button className="mr-4 hover:scale-110">
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume
          </Link>
        </button>
        </li>
      </ul>
    </nav>
  
  );
};

export default StickyNavbar;
