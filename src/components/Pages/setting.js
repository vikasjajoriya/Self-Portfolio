import React, { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Skills from "./Skill/Skills";
import Contact from "./Contact/Contact";

export default function Setting() {
  const [showMenu, setShowMenu] = useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#f8adad");
  const [selectborderColor, setSelectborderColor] = useState("#f8adad");
  const [selectedHeadingColor, setSelectedHeadingColor] = useState("#f8adad");
  const [selectedAccentColor, setSelectedAccentColor] = useState("#f8adad");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      selectedColor
    );
    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      "#f1f1f1"
    );
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setRotateIcon(!rotateIcon);
  };

  const handleMenuItemClick = (color) => {
    setSelectedColor(color);
    setSelectborderColor(color);
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      color
    );
    setSelectedAccentColor(color);
    setSelectedHeadingColor(color);
    const root = document.documentElement;
    root.style.setProperty("--heading-background-color", color);
    root.style.setProperty("--heading-after-background-color", color);
  };

  return (
    <div className="setting">
      <div className="set" onClick={toggleMenu}>
        <span>
          <AiFillSetting className={`${rotateIcon ? "rotated" : "rotate"}`} />
        </span>
      </div>
      {showMenu && (
        <div className="menu">
          <div
            className="menu-item"
            onClick={() => handleMenuItemClick("#FFE715")}
          ></div>
          <div
            className="menu-item2"
            onClick={() => handleMenuItemClick("#9FFF4C")}
          ></div>
          <div
            className="menu-item3"
            onClick={() => handleMenuItemClick("#01FFFF")}
          ></div>
          <div
            className="menu-item4"
            onClick={() => handleMenuItemClick("#C84B31")}
          ></div>
        </div>
      )}
      <Navbar backgroundColor={selectedColor}/>
      <Home backgroundColor={selectedColor} headingBackgroundColor={selectedHeadingColor}/>
      <About backgroundColor={selectedColor}   borderColor={selectborderColor} />
      <Resume backgroundColor={selectedColor} />
      <Skills accentColor={selectedAccentColor} backgroundColor={selectedColor}/>
      <Contact backgroundColor={selectedColor} />
    </div>
  );
}
