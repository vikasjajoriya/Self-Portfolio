import React, { useEffect } from "react";
import "../../../Scss/Components/home.scss";
import Image from "../../../SelfData/selfImage.jpg";

export default function Home({ backgroundColor }) {

  return (
    <section className="home" id="home" style={{ backgroundColor }}>
      <div className="complete-details">
        <div className="cd-flex">
        <div className="my-details">
          <h3>Hi, I'm a Vikas</h3>
          <h2 >React Developer</h2>
        </div>
          <div className="down-arrow" >
            <a href="#contact" className="bounce" style={{ backgroundColor }}>
              &#8595;
            </a>
          </div>
        </div>
        <div className="my-image ">
          <img src={Image} alt="selfimage" title="I'm Vikas" />
        </div>
      </div>
    </section>
  );
}
