import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
