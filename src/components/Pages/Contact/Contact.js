import React, { useEffect, useState } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import "../../../Scss/Components/Contact.scss";
import { motion, useAnimation } from "framer-motion";

export default function Contact({ backgroundColor }) {
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const[msgName,setMsgName]=useState("");
  const[msgEmail,setMsgEmail]=useState("");
  const[msg,setMsg]=useState("");


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 2000; // Adjust this value to control when the animation triggers
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    setFormData({ name: "", email: "", message: "" });


  // Validate the name
  if (formData.name.length < 3 ) {
      setMsgName("Please enter a name with at least 3 characters.");
      // return;
  }
    // Validate the email address
    if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(formData.email)) {
      setMsgEmail("Please enter a valid email address.");
      // return;
  }
  // Validate the message length
  if (formData.message.length < 10) {
      setMsg("Please enter a message with at least 10 characters.")
      // return;
  }
    console.log("Form submitted:", formData);
  };
  return (
    <div className="contact" id="contact" style={{ backgroundColor }}>
      <div className="contact-left">
        <h1>Let's get in touch</h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I enjoy discussing new projects and design challenges. Please share as
          much info, as possible so we can get the most out of our first
          catch-up.
        </motion.p>
        <div className="country">
          <h3>Living In:</h3>
          <motion.h4
            initial={{ opacity: 0, y: 25 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            365 Kharkhari, Gurugram, Haryana - 122503 , India.
          </motion.h4>
        </div>
        <div className="call">
          <h3>Call:</h3>
          <motion.h4
            initial={{ opacity: 0, y: 25 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            (+91) 9817307930
          </motion.h4>
        </div>
        <div className="contact-icon">
          <motion.a
            initial={{ opacity: 0, y: 25 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.8 }}
            href="https://www.instagram.com/its_v_i_k_k_i/"
            target="_blank"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 25 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.0 }}
            href="https://www.facebook.com/login/"
            target="_blank"
          >
            <BsFacebook />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 25 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.2 }}
            href="https://www.linkedin.com/in/vikas-jajoriya-533b5a213/"
            target="_blank"
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 25 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.4 }}
            href="https://github.com/vikasjajoriya/"
            target="_blank"
          >
            <BsGithub />
          </motion.a>
        </div>
      </div>
      <div className="contact-right">
        <h1>Let's Talk</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <lable className="label">What is Your Name:</lable>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {msgName ? <div className="error-msg" style={{color:"red"}}>{msgName}</div> :" "}
          <lable className="label">Your Email Address:</lable>
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {msgEmail ? <div className="error-msg" style={{color:"red"}}>{msgEmail}</div> :" "}
          <lable className="label">How can I Help you ?</lable>
          <textarea
            rows="2"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {msg ? <div className="error-msg" style={{color:"red"}}>{msg}</div> :" "}
          <button type="submit">
            Send{" "}
            <span>
              <TiArrowRightThick />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
