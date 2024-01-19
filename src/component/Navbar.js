import React from "react";
//import{Link} from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";
function Navbar() {
  const logo = useRef();
  useGSAP(() => {
    gsap.from(".navbar-logo", {
      delay: 0.4,
      opacity: 0,
    });
    var tl = gsap.timeline();
    tl.from(".nav-menu li", {
      delay: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.2,
    });
    gsap.fromTo(
      ".btn-sign",
      { opacity: 0, scale: 1 },
      { opacity: 1, delay: 1, duration: 1 }
    );
  });

  const [state, setState] = useState(false);  
  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo" ref={logo}>
          Trippy
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/signup">
            <button className="btn-sign">SIGN-UP</button>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
