import React from "react";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/5.jpg";
import Img4 from "../assets/8.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Destination() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".destination h1", {
      scrollTrigger: {
        trigger: ".destination", // Adjust the trigger element
        start: "top center", // Adjust the start position
        end: "bottom center", // Adjust the end position
        markers: false,
        scrub: true, // Add markers for debugging
      },
      opacity: 0,
      ease: " Power2.in",
    });
  });
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the oppertunity to see a lot,within a time frame.</p>
        <DestinationData
          className="first-des"
          heading="Taal Valcano,Batangas"
          text="It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like)."
          NewImg1={Img1}
          NewImg2={Img2}
        />
        <DestinationData
          className="first-des-reverse"
          heading="Mt.Daguldul Batangas"
          text="It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like)."
          NewImg1={Img3}
          NewImg2={Img4}
        />
      </div>
    </>
  );
}

export default Destination;
