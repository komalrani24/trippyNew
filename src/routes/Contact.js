import React from "react";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/2.jpg";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
