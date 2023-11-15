import React from "react";

const ProjectLink = ({ imageSrc, altText, title }) => {
  return (
    <a className="project" href="#">
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <div className="readmore">
        Read More <i className="fa-solid fa-square-arrow-up-right"></i>
      </div>
    </a>
  );
};

export default ProjectLink;
