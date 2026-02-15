import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
//import {Button }from "../../components/button/Button";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { client } from "../../client";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const headerSkillVariants = {
  visible: {
    rotate: [-120, 0],
    y: -10,
    x: 10,
    transition: {
      rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
        ease: "easeOut",
      },
    },
  },
  hover: {
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
};

const Header = () => {
  const [resumeUrl, setResumeUrl] = useState("");

  const { text: tagText } = useTypewriter({
    words: ["Fullstack Developer",  ".NET Developer","AWS Developer","MySQL Developer","ReactJS Developer"],
    typeSpeed: 100,
    loop: false,
  });

  useEffect(() => {
    const aboutMeQuery = `*[_type == "aboutme"][0]{
      "resumeUrl": resume.asset -> url
    }`;

    client
      .fetch(aboutMeQuery)
      .then((data) => {
        if (data?.resumeUrl) {
          setResumeUrl(data.resumeUrl);
        }
      })
      .catch(() => {});
  }, []);

  const openResumeHandler = () => {
    if (!resumeUrl) return;
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const openContactHandler = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app__header app__flex">
      
      
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <p className="head-text">Bala Sai</p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">{tagText}</p>
            <Cursor cursorStyle="|" />
            {/* <p className="p-text">Enthusiast</p> */}
          </div>
          <p className="header-intro-text">
            I build reliable full-stack products and cloud-ready solutions for
            real business outcomes.
          </p>
          <div className="header-action-wrap">
            <button
              type="button"
              className="header-action-button header-action-button--resume"
              onClick={openResumeHandler}
              disabled={!resumeUrl}
            >
              Resume
            </button>
            <button
              type="button"
              className="header-action-button header-action-button--contact"
              onClick={openContactHandler}
            >
              Contact
            </button>
          </div>
        </div>
      </motion.div>

      

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          src={images.programmer}
          alt="profile_bg"
          whileInView={{ y: [-100, 0] }}
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.dotnet, images.react, images.aws].map((circle, index) => (
          <motion.div
            variants={headerSkillVariants}
            whileInView="visible"
            whileHover="hover"
            drag
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            dragElastic={0.1}
            className="circle-cmp app__flex"
            key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </motion.div>

          
        ))}
        
      </motion.div>

     
          
     
    </div>
  );
};

export default AppWrap(Header, "home");
