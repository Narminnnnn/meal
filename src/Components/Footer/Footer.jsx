import React from "react";
import "./Footer.css";
import { LiaTripadvisor } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="containerFooter">
        <div className="upFooter">
          <div className="about">
            <h2 className="topicName"> About Meal</h2>
            <p className="footerAbout">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen.
            </p>
            <button className="read"> Read More</button>
          </div>
          <div className="servive">
            <div className="lunch">
              <h2 className="topicName">Lunch Service</h2>
              <p className="footerAbout">Booking from 12:00pm — 1:30pm </p>
            </div>
            <div className="dinner">
              <h2 className="topicName">Dinner Service</h2>
              <p className="footerAbout">Everyday: </p>
              <p className="footerAbout">Booking from 6:00pm — 9:00pm </p>
            </div>
          </div>
          <div className="follow">
            <h2 className="topicName"> Follow Along</h2>
            <div className="iconSocial">
              <ul className="nameTopic">
                <li className="tripad">
                  <LiaTripadvisor />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <BsInstagram />
                </li>
              </ul>
            </div>
            <div className="newsletter">
              <h2 className="topicName"> Newsletter</h2>
              <div className="emailFooter">
                <IoMail className="iconEmaill" />
                <input  className="footerEmail" type="email" placeholder="Enter email" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="end"> Copyright © 2025 All rights reserved | This template is made with <FaHeart  className="heart"/> bye <a className="colorib" href="">Colorib</a>
      </p>
    </footer>
  );
};

export default Footer;
