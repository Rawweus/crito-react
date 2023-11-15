import React from "react";

const FiveStars = ({ text }) => {
  return (
    <div className="five-stars">
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <p>{text}</p>
    </div>
  );
};

export default FiveStars;
