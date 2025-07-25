import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
function Navbar() {
  return (
    <>
      <nav className="bg-transparent backdrop-blur-sm text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
        <a
          className="text-2xl font-bold border-b-2 border-transparent"
          href="/"
        >
          Shaurya Manhas
        </a>
        <ul className="flex space-x-4">
          <li>
            <a className="hover:text-black-300" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-black-300" href="#projects">
              projects
            </a>
          </li>
          <li>
            <a className="hover:text-black-300" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-black-300" href="#skills">
              Skills
            </a>
          </li>
        </ul>
      </nav>
      
    </>
  );
}



export default Navbar;


