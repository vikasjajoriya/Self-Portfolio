import React, { useState } from "react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

export default function Navbar({ backgroundColor }) {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="navbar">
      <a href="/" className="navbar-a animate__animated  animate__slideInLeft">
        Portfolio
      </a>
      <div className="blob" style={{ backgroundColor }}></div>
      <div className="navbar-links">
        <ul>
          <li>
            <a
              href="#home"
              className={`links-a ${activeLink === "Home" ? "active" : ""}`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`links-a ${activeLink === "About" ? "active" : ""}`}
              onClick={() => handleLinkClick("About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={`links-a ${activeLink === "Resume" ? "active" : ""}`}
              onClick={() => handleLinkClick("Resume")}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`links-a ${activeLink === "Skills" ? "active" : ""}`}
              onClick={() => handleLinkClick("Skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`links-a ${activeLink === "Contact" ? "active" : ""}`}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a href="https://www.instagram.com/its_v_i_k_k_i/" className="social-a" target="_blank">
              <CiInstagram size={30}/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/login/" className="social-a" target="_blank">
              <CiFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
