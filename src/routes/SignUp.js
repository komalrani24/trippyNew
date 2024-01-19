import React from "react";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/11.jpg";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import SignUpForm from "../SignUpForm";

function SignUp() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="Signup" btnClass="hide" />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default SignUp;
