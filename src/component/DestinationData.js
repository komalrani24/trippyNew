import React from "react";
import "./DestinationStyles.css";
// import Img1 from "../assets/1.jpg";
// import Img2 from "../assets/2.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function DestinationData(props) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".imgCard", {
      scrollTrigger: {
        trigger: ".imgCard",
        markers: false,
        scrub: true,
        start: "top center", // Adjust the start position
        end: "bottom center",
      },
      opacity: 1,
      rotation: 360,
      duration: 2,
    });
  });
  return (
    <div>
      <div className={props.className}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={props.NewImg1} className="imgCard"></img>
          <img alt="img" src={props.NewImg2} className=""></img>
        </div>
      </div>
    </div>
  );
}

export default DestinationData;
