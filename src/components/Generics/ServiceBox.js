import React from "react";

const ServiceBox = ({ title, description, url }) => {
  return (
    <div className="square">
      <div className="dashed-line"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"></a>
      <i
        className="clickable-icon fa-solid fa-circle-arrow-right fa-2xl"
        href={url}
      ></i>
    </div>
  );
};

export default ServiceBox;
