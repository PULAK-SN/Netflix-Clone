import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, handelShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handelShow(true);
      else handelShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="../logo/Netflix.png" alt="netflix-logo" />
    </div>
  );
}
