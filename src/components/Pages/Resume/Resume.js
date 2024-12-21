import React, { useEffect } from "react";
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
      <div className="resume-details w-100" style={{ display: "flex", alignItems: "start" }}>
        <div className="my-qualification w-md-50 w-100" >
          <h1 style={{ textAlign: "center", marginBottom: "10px", borderBottom: "1px solid grey", paddingBottom: "10px" }}>
            Education
          </h1>
          <div className="qual-line" style={{ headingBackgroundColor }}>
            <div className="qual-1">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Master in Computer Application
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Indira Gandhi University
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I completed my Master of Computer Applications (MCA) with a 7.60 CGPA, gaining expertise in programming, software development, database management, and system design.
              </motion.p>
              <hr />
            </div>
            <div className="qual-2">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Bachelor in Computer Application
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Maharishi Dayanand University
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I successfully completed my Bachelor of Computer Applications (BCA) with First Division, gaining a solid foundation in programming, database management, and software development, marking a significant academic achievement.
              </motion.p>
              <hr />
            </div>
            <div className="qual-3">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Intermediate(12th)
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Central Board of Secondary Education
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I successfully completed my 12th grade with the PCM stream, where I developed a understanding of fundamental sciences and honed my analytical thinking skills, preparing me for future challenges.
              </motion.p>
              <hr />
            </div>
          </div>
        </div>
        <div className="my-experience w-md-50 w-100" >
          <h1 style={{ textAlign: "center", marginBottom: "10px", borderBottom: "1px solid grey", paddingBottom: "10px" }}>
            Experience
          </h1>
          <div className="qual-line" style={{ headingBackgroundColor }}>
            <div className="qual-1">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Software Engineer (Trainee)
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Neuronimbus Software Pvt. Ltd.
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Completed a 6-month training program at Neuronimbus Software Services Pvt. Ltd., gaining hands-on experience in web development with React.js, Next.js, State Management, and more technologies.
              </motion.p>
              <hr />
            </div>
            <div className="qual-1">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Software Engineer
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Neuronimbus Software Pvt. Ltd.
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Designed and developed 2 engaging web applications, one using React.js and the other with Next.js. Collaborated
                closely with designers to build responsive and intuitive user interfaces for web apps, ensuring a seamless experience
                across all devices.
                <br />
                Build a fully-fledged dashboard for the Sojo Operator Application, boosting efficiency by 25% with real time
                notifications, live tracking for 100+ vehicles powered by Mappls Maps, and utilization charts for vehicles and drivers.
                <br />
                Optimized data fetching and UI rendering through lazy loading, achieving a 30 to 40% reduction in loading times for a
                faster and more seamless user experience.
                <br />
                Utilized a RESTful APIs, improving data retrieval speeds by 30%.
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
