import React, { useState, useEffect } from "react";
import { CiInstagram, CiFacebook } from "react-icons/ci";

export default function Navbar({ backgroundColor }) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "resume", "skills", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { name: "Instagram", link: "https://www.instagram.com/ig_v.i.k.k.i/", icon: <CiInstagram size={30} /> },
    { name: "Facebook", link: "https://www.facebook.com/vikas.jajoriya.507/", icon: <CiFacebook size={30} /> },
  ];
  return (
    <div className="navbar">
      <a href="/" className="navbar-a animate__animated animate__slideInLeft">
        Portfolio
      </a>
      <div className="navbar-links">
        <ul className="mb-0">
          {["home", "about", "resume", "skills", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`links-a ${activeLink === link ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="social-links">
        <ul className="mb-0">
        {socialLinks.map((social) => (
            <li key={social.name}>
              <a href={social.link} className="social-a" target="_blank" aria-label={social.name}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
