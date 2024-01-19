import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImg from "../assets/3.jpg";
import Footer from "../component/Footer";
import Trip from "../component/Trip";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
