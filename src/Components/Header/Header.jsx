import React, { useState, useEffect } from "react";
import "./Header.css";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";







const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu Open:", menuOpen);
  };
  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="containerHeader">
        
        <div className="iconM">
          <p>
            <a href="">M</a>
          </p>
        </div>
        <div className="search">
          <a href="../../pages/Search/Search">
            <CiSearch className="searchIcon" />
          </a>
        </div>
        <div className="menuIcon" onClick={toggleMenu}>
          <IoIosMenu />
        </div>
        <div className={`headerMenu ${menuOpen ? "open" : ""}`}>
          <div className="close" onClick={toggleMenu}>
            <IoMdClose />
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Our Menu</a>
              </li>
              <li>
                <a href="">Reserve A Table</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
