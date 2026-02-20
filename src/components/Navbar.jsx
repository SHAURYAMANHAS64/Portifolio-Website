import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "projects", "about", "skills"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
  ];

  const socials = [
    { icon: faGithub, href: "hhttps://github.com/SHAURYAMANHAS64" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/shaurya-manhas-7a50b1324/" },
    { icon: faInstagram, href: "https://www.instagram.com/shryy_visuals/" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-transparent backdrop-blur-sm"
        } text-white px-6 py-4 flex justify-between items-center`}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="text-2xl font-bold relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shaurya Manhas
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <li key={id}>
                <a
                  href={href}
                  className={`relative py-1 transition-colors duration-200 hover:text-gray-300 ${
                    activeSection === id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-white rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}

          {/* Social Icons */}
          <li className="flex items-center space-x-3 ml-4 border-l border-gray-600 pl-4">
            {socials.map(({ icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </motion.a>
            ))}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[68px] left-0 w-full bg-black/90 backdrop-blur-md z-40 md:hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg transition-colors duration-200 hover:text-white ${
                      activeSection === href.replace("#", "")
                        ? "text-white font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex items-center space-x-5 pt-2">
                {socials.map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={icon} size="lg" />
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
