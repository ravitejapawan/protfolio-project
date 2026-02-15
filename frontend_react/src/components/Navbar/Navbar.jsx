import React, { useState, useEffect } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Navbar.scss";

const NAV_ITEMS = ["home", "about", "work", "skills", "testimonials", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [classFloat, setClassFloat] = useState("");
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    const updateNavState = () => {
      setClassFloat(window.scrollY > 250 ? "navbar-float" : "");
      const scrollMarker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = NAV_ITEMS[0];

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item);
        if (!section) return;

        if (section.offsetTop <= scrollMarker) {
          currentSection = item;
        }
      });

      setActive(currentSection);
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
    };
  }, []);

  const handleNavClick = (item) => {
    setActive(item);
    setToggle(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <nav className={`app__navbar ${classFloat}`}>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {NAV_ITEMS.map((item) => (
          <li
            key={`link-${item}`}
            className={`app__flex p-text ${active === item ? "active" : ""}`}
          >
            <a href={`#${item}`} onClick={() => handleNavClick(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="theme-toggle__thumb">{theme === "dark" ? "🌙" : "☀"}</span>
      </button>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item} className={active === item ? "active" : ""}>
                  <a href={`#${item}`} onClick={() => handleNavClick(item)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
