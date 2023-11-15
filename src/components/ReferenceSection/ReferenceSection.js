import React from "react";
import paperslogo from "../../assets/images/papers-logo.svg";
import dorfuslogo from "../../assets/images/dorfus-logo.svg";
import martinologo from "../../assets/images/martino-logo.svg";
import squarelogo from "../../assets/images/square-logo.svg";
import gobonalogo from "../../assets/images/gobona-logo.svg";

const ReferenceSection = () => {
  return (
    <div className="references-container">
      <img src={paperslogo} alt="papers-logo" className="references" />
      <img src={dorfuslogo} alt="dorfus-logo" className="references" />
      <img src={martinologo} alt="martino-logo" className="references" />
      <img src={squarelogo} alt="square-logo" className="references" />
      <img src={gobonalogo} alt="gobona-logo" className="references" />
    </div>
  );
};

export default ReferenceSection;
