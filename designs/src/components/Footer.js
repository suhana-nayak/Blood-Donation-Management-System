import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.css";
import "./TermsServices"
import "./FAQs"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>LifeSaver</h1>
          <p>Your Blood, Their Lifeline.</p>
        </div>
        <div className="bottom">
          <div>
            <Link to="/termsservices">Terms And Conditions</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
