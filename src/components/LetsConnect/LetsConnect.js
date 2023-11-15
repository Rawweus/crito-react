import React from "react";
import img_backgroundLines from "../../assets/images/background-lines.svg";
import { Link } from "react-router-dom";

const LetsConnect = () => {
  return (
    <>
      <section className="contact-page-showcase">
        <img src={img_backgroundLines} className="bg-lines" alt="wavy lines" />
        <div className="nav-links">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/services">Service</Link>
        </div>
        <h1>Let's Connect</h1>
      </section>
    </>
  );
};

export default LetsConnect;
