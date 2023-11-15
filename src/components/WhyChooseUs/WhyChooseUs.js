import React from "react";
import AmyImage from "../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg";
import IconContent from "../Generics/IconContent";

const WhyChooseUs = () => {
  return (
    <section className="container why-choose-us-section">
      {/* Vänster sida */}
      <div className="why-choose-us-left">
        <div className="why-choose-us-title">
          <p>Why Choose Us</p>
          <h2>Why We Are The Best Business Consulting Agency</h2>
        </div>
        {/* Flex container för icon-content block */}
        <div className="icon-container">
          <IconContent
            iconClass="fa-regular fa-thumbs-up fa-xl"
            title="Process Excellence"
            text="Lorem, ipsum dolor sit amet consectetur."
          />
          <IconContent
            iconClass="fa-regular fa-gem fa-xl"
            title="Strategic Planning"
            text="Lorem, ipsum dolor sit amet consectetur."
          />
          <IconContent
            iconClass="fa-solid fa-scale-balanced fa-xl"
            title="Experience Design"
            text="Lorem, ipsum dolor sit amet consectetur."
          />
          <IconContent
            iconClass="fa-solid fa-head-side-virus fa-xl"
            title="Artificial Intelligence"
            text="Lorem, ipsum dolor sit amet consectetur."
          />
        </div>
      </div>
      {/* Höger Sida */}
      <div className="why-choose-us-right">
        <div className="rectangle">
          <img
            src={AmyImage}
            alt="Beskrivning av bilden"
            className="overlay-image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
