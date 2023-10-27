import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <main>
      <div className="header">
        <span className="footer__span">
          Made by {" "}
          <a href="https://github.com/Dipak200">Dipak Prasad Gupta</a> 
        </span>
        <span className="footer__span">
          feel free to connect <a>mynameisdipakgupta@gmail.com</a>
        </span>
      </div>
    </main>
  );
};

export default Footer;
