import React, { useEffect } from "react";
import "../../../Scss/Components/Skills.scss"
import { motion, useAnimation } from "framer-motion";
export default function Skills({ accentColor, backgroundColor }) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 1000; // Adjust this value to control when the animation triggers

      if (scrollPosition > triggerPosition) {
        controls.start({ opacity: 1, y: 0 }).then(() => {
          // Reset position after animation completes
          controls.set({ y: 0 });
        });
      }
    };

    handleScroll(); // Trigger the animation on the first render

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <div className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="skills-heading "
      >
        <h4 style={{ backgroundColor }}>Skills</h4>
        <h2>A Summary of My skills</h2>
      </motion.div>
      <div className="skills-progress">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="progress-1"
        >
          <div className="html">
            <span>HTML</span>
            <span>90%</span>
          </div>
          <progress id="file" value="90" max="100" style={{ accentColor }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="progress-1"
        >
          <div className="html">
            <span>CSS</span>
            <span>80%</span>
          </div>
          <progress id="file" value="80" max="100" style={{ accentColor }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="progress-1"
        >
          <div className="html">
            <span>JS</span>
            <span>70%</span>
          </div>
          <progress id="file" value="70" max="100" style={{ accentColor }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="progress-1"
        >
          <div className="html">
            <span>React JS & Next JS</span>
            <span>85%</span>
          </div>
          <progress id="file" value="85" max="100" style={{ accentColor }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="progress-1"
        >
          <div className="html">
            <span>RESPONSIVE DESIGN</span>
            <span>80%</span>
          </div>
          <progress id="file" value="80" max="100" style={{ accentColor }} />
        </motion.div>
      </div>
    </div>
  );
}
