import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Nav = () => {
  return (
    <header className="sticky-header">
      <Link to="/">
        <h2>WebCraft by Ariana</h2>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/our-work">Our Work</Link> */}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Nav;