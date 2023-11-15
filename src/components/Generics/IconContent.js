import React from "react";

const IconContent = ({ iconClass, title, text }) => {
  return (
    <div className="icon-content">
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <div className="text-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default IconContent;
