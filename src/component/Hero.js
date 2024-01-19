import React from "react";
import "./HeroStyles.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

function Hero(props) {
  useGSAP(() => {
    gsap.from(
      ".hero-text",

      {
        duration: 1,
        // opacity: 1,
        delay: 1,
        scale: 1.5,
        // y: 800,
        // ease: "elastic",
      }
    );
  });
  return (
    <div className={props.cName}>
      <img alt="HeroImg" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
