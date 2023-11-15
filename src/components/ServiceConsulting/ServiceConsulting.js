import React from "react";
import BackgroundLines from "../../assets/images/background-lines-right.svg";
import ServiceBox from "../Generics/ServiceBox";

const ServiceConsulting = () => {
  return (
    <section className="service-consulting">
      <div className="service-consulting-container">
        <img
          src={BackgroundLines}
          className="bg-lines-right"
          alt="wavy lines right side"
        />
        <div className="text-container">
          <p>Our services</p>
          <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className="four-squares">
          <ServiceBox
            title="Business Advice"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus."
            url="/services/businessadvice"
          />
          <ServiceBox
            title="Startup Business"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus."
            url="/services/startupbusiness"
          />
          <ServiceBox
            title="Financial Advice"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus."
            url="/services/financialadvice"
          />
          <ServiceBox
            title="Risk Management"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus."
            url="/services/riskmanagement"
          />
        </div>
      </div>
      <div className="browse-services-btn">
        <a className="btn-transparent" href="services.html">
          Browse Services <i className="fa-solid fa-square-arrow-up-right"></i>
        </a>
      </div>
    </section>
  );
};

export default ServiceConsulting;
