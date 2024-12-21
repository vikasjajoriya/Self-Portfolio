import React, { useEffect, useState } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { toast } from 'react-toastify';

export default function Contact({ backgroundColor }) {
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formDisable, setFormDisable] = useState(false);
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


  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.length < 3) {
      newErrors.name = "Please enter a name with at least 3 characters.";
      isValid = false;
    }

    if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = "Please enter a message with at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormDisable(false);
    if (!validateForm()) {
      return;
    }
    try {
      const formspreeEndpoint = `https://formspree.io/${process.env.REACT_APP_FORMSPREE_TOKEN}`;
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormDisable(true);
        toast.success("Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setFormDisable(false);
        }, 2000);
      } else {
        setFormDisable(false);

        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      setFormDisable(false);
      toast.error("Error sending message!");
    }
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
            href="https://www.instagram.com/ig_v.i.k.k.i/"
            target="_blank"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 25 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.0 }}
            href="https://www.facebook.com/vikas.jajoriya.507/"
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
          <label className="label">Your Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <div className="error-msg" style={{ color: "red" }}>{errors.name}</div>}

          <label className="label">Your Email :</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <div className="error-msg" style={{ color: "red" }}>{errors.email}</div>}

          <label className="label">How can I help you?</label>
          <textarea
            rows="2"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && <div className="error-msg" style={{ color: "red" }}>{errors.message}</div>}

          <button type="submit" disabled={formDisable}>
            {!formDisable ? <>
              Send{" "}
              <span>
                <TiArrowRightThick />
              </span>
            </>
              : "Sending"
            }
          </button>
        </form>
      </div>
    </div>
  );
}
