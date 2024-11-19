import React from "react";
import "./navbar.css";
import logo from "../utils/logo.webp";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
