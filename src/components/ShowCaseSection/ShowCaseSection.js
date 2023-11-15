import React from "react";
import "./ShowCaseSection.css";
import Button from "../Generics/Button";
import img_backgroundLines from "../../assets/images/background-lines.svg";
import showcaseimage from "../../assets/images/showcase-image.svg";

const ShowCaseSection = () => {
  return (
    <section className="showcase">
      <img src={img_backgroundLines} className="bg-lines" alt="wavy lines" />
      <div className="container">
        <div className="content">
          <h1>We Provide The Best Business Solutions</h1>
          <p>
            Establish your vision and value proposition and turn them into
            testable prototypes.
          </p>
          <Button
            type="yellow"
            text="Get Consulting"
            url="/services/get-consulting"
          />
          <Button text="Learn More" url="/services/consulting" />
        </div>
        <img src={showcaseimage} alt="image of a man in a suit with a tablet" />
      </div>
    </section>
  );
};

export default ShowCaseSection;
