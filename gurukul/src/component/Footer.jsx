import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../css/Footer.css";
import logo from"../assets/logo1.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
         
        <div className="footer-left">
          <div className="footer-logo">
           
            <img src={logo} alt="Gurukul Navigation Logo" />
            <h1 className="head">Gurukul Navigation</h1>
          </div>
          <p>
            Finding students the best colleges and schools for Students near their location. 
            We also provide news and events of the colleges that are to be run.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Colleges</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

       
        <div className="footer-support">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>

 
      <div className="footer-bottom">
        <p>© 2025 Gurukul Navigation. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
