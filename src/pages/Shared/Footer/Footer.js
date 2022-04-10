import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center mt-5">
      <h2>
        <small> &copy; copyright {year} </small>
      </h2>
    </div>
  );
};

export default Footer;
