import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function About({ backgroundColor, borderColor }) {
  const controls = useAnimation();
  const [age, setAge] = useState(0);
  const [experience, setExperience] = useState("0");

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const calculateExperience = (startYear) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const yearsOfExperience = currentYear - startYear + currentMonth / 12;
    return yearsOfExperience > parseInt(yearsOfExperience)
      ? `${parseInt(yearsOfExperience)}+`
      : `${parseInt(yearsOfExperience)}`;
  };
  useEffect(() => {
    setAge(calculateAge("1998-12-03"));
    setExperience(calculateExperience(2023));
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 50; // Adjust this value to control when the animation triggers

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
    <div className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="about-heading"
      >
        <h4 style={{ backgroundColor }}>About Me</h4>
        <h2>Know Me More</h2>
      </motion.div>
      <div className="about-text">
        <div className="about-details">
          <p className="p-name">
            Hi there!, I'm <span style={{ borderColor }}>Vikas</span>
          </p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-details"
          >
            I am a results-driven Frontend Developer with {experience} years of experience in designing and developing high-performance, scalable web applications. My expertise lies in React, Next.js, JavaScript, Context API, and REST API, where I focus on delivering optimized, user-centric solutions that enhance digital experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-details"
          >
            Beyond coding, I enjoy playing online games, contributing to open-source projects, and attending tech meetups to stay updated with the latest industry trends.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-details"
          >
            Feel free to connect with me for collaborations or discussions on exciting web technologies! 🚀
          </motion.p>
        </div>
        <div className="my-age" style={{ backgroundColor }}>
          <div className="age-1">
            <h1>{age}</h1>
            <h2 className="text-nowrap">Year's old</h2>
          </div>
        </div>
      </div>
      <div className="about-me" style={{ borderColor }}>
        <div className="Name">
          <p className="one">Name:</p>
          <p>Vikas</p>
        </div>
        <div className="Email">
          <p className="Two">Email:</p>
          <p>
            <a href="mailto:vikasjajoriya1998@gmail.com" className="text-decoration-none">
              vikasjajoriya1998@gmail.com
            </a>
          </p>
        </div>
        <div className="dob">
          <p className="Three">Date of birth:</p>
          <p>03/12/1998</p>
        </div>
        <div className="From">
          <p className="Four">From:</p>
          <p>Gurugram-122503, India</p>
        </div>
      </div>
    </div>
  );
}
// import React, { useEffect, useState } from "react";
// import "../../../Scss/Components/About.scss";
// import { motion, useAnimation } from "framer-motion";

// export default function About({ backgroundColor, borderColor }) {
//   const controls = useAnimation();
//   const [currentAge, setCurrentAge] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const triggerPosition = 50; // Adjust this value to control when the animation triggers
//       const maxAge = 24; // The final age value

//       if (scrollPosition > triggerPosition) {
//         const fastIncrementDelay = 50; // Delay between fast increments in milliseconds
//         const slowIncrementDelay = 200; // Delay between slow increments in milliseconds
//         const fastIncrementThreshold = 20; // The age value at which the increment slows down

//         const incrementAge = (age) => {
//           setCurrentAge(age);
//         };

//         let delay = 0;

//         for (let age = 1; age <= maxAge; age++) {
//           if (age <= fastIncrementThreshold) {
//             setTimeout(() => incrementAge(age), delay);
//             delay += fastIncrementDelay;
//           } else {
//             setTimeout(() => incrementAge(age), delay);
//             delay += slowIncrementDelay;
//           }
//         }

//         controls.start({ opacity: 1, y: 0 }).then(() => {
//           // Reset position after animation completes
//           controls.set({ y: 0 });
//         });
//       }
//     };

//     handleScroll(); // Trigger the animation on the first render

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [controls]);

//   return (
//     <div className="about" id="about">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.5 }}
//         className="about-heading"
//       >
//         <h4 style={{ backgroundColor }}>About Me</h4>
//         <h2>Know Me More</h2>
//       </motion.div>
//       <div className="about-text">
//         <div className="about-details">
//           <p className="p-name">
//             Hi there!, I'm <span style={{ borderColor }}>Vikas</span>
//           </p>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="p-details"
//           >
//             I'm a frontend developer with One year of experience in building web
//             applications. I'm passionate about creating beautiful and intuitive
//             user interfaces that provide an enjoyable user experience. In my
//             current role at Neuronimbus Software Pvt. Ltd.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="p-details"
//           >
//             In my free time, I like to play online games and creating awesome
//             user interface and I also enjoy contributing to open source projects
//             and attending local tech meetups.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="p-details"
//           >
//             I'm excited to continue growing my skills and experience as a
//             frontend developer. Thank you for considering my application!
//           </motion.p>
//         </div>
//         <div className="my-age" style={{ backgroundColor }}>
//           <div className="age-1">
//             <h1>{currentAge}</h1>
//             <h2>Year's old</h2>
//           </div>
//         </div>
//       </div>
//       <div className="about-me" style={{ borderColor }}>
//         <div className="Name">
//           <p className="one">Name:</p>
//           <p>Vikas</p>
//         </div>
//         <div className="Email">
//           <p className="Two">Email:</p>
//           <p>
//             <a href="mailto:vikasjajoriya1998@gmail.com">
//               vikasjajoriya1998@gmail.com
//             </a>
//           </p>
//         </div>
//         <div className="dob">
//           <p className="Three">Date of birth:</p>
//           <p>03/12/1998</p>
//         </div>
//         <div className="From">
//          <p className="Four">From:</p>
//           <p>Gurugram-122503, India</p>
//         </div>
//       </div>
//     </div>
//   );
// }
