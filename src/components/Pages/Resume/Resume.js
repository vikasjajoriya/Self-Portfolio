import React, { useEffect } from "react";
import "../../../Scss/Components/Resume.scss";
import CV from "../../../SelfData/Vikas CV.pdf";
import { motion, useAnimation } from "framer-motion";

export default function Resume({ backgroundColor, headingBackgroundColor }) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 550; // Adjust this value to control when the animation triggers

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
    <div className="resume" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="resume-heading"
      >
        <h4 style={{ backgroundColor }}>Resume</h4>
        <h2>A Summary of My Resume</h2>
      </motion.div>
      <div className="resume-details">
        <div className="my-qualification">
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            My-Education
          </h1>
          <div className="qual-line" style={{ headingBackgroundColor }}>
            <div className="qual-1">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Master in Computer Application
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Indira Gandhi University
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eius vitae ut similique, dolore assumenda aliquam rem sequi
                placeat iste id? Asperiores esse provident quod!
              </motion.p>
              <hr />
            </div>
            <div className="qual-2">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Bachelor in Computer Application
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Maharishi Dayanand University
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eius vitae ut similique, dolore assumenda aliquam rem sequi
                placeat iste id? Asperiores esse provident quod!
              </motion.p>
              <hr />
            </div>
            <div className="qual-3">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Intermediate(12th)
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Central Board of Secondary Education
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eius vitae ut similique, dolore assumenda aliquam rem sequi
                placeat iste id? Asperiores esse provident quod!
              </motion.p>
              <hr />
            </div>
          </div>
        </div>
        <div className="my-experience">
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            My-Experience
          </h1>
          <div className="qual-line" style={{ headingBackgroundColor }}>
            <div className="qual-1">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                React Developer
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Neuronimbus Software Pvt. Ltd.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eius vitae ut similique, dolore assumenda aliquam rem sequi
                placeat iste id? Asperiores esse provident quod!
              </motion.p>
              <hr />
            </div>
            <div className="qual-2">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                React Developer
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Neuronimbus Software Pvt. Ltd.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eius vitae ut similique, dolore assumenda aliquam rem sequi
                placeat iste id? Asperiores esse provident quod!
              </motion.p>
              <hr />
            </div>
            <div className="qual-3">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                React Developer
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Neuronimbus Software Pvt. Ltd.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                eius vitae ut similique, dolore assumenda aliquam rem sequi
                placeat iste id? Asperiores esse provident quod!
              </motion.p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <a href={CV} className="down-button" download>
        Download CV
      </a>
    </div>
  );
}
