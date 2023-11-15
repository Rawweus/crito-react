import React from "react";
import ProjectLink from "../Generics/ProjectLink";
import BusinessImage from "../../assets/images/business_image.png";
import ResponsiveImage from "../../assets/images/responsive-image.png";
import EducateImage from "../../assets/images/educate-image.png";
import InsightsImage from "../../assets/images/insights-image.png";
import Button from "../Generics/Button";

const ProjectAndCases = () => {
  return (
    <section className="container project-and-cases">
      <div className="container">
        <div className="section-title">
          <p>Project & Case Studies</p>
          <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div className="project-and-cases">
          <ProjectLink
            imageSrc={BusinessImage}
            altText="A mans hand reading a business paper"
            title="Grow your business"
          />
          <ProjectLink
            imageSrc={ResponsiveImage}
            altText="Pink Apple products on a desk"
            title="Why your clients needs a responsive website"
          />
          <ProjectLink
            imageSrc={EducateImage}
            altText="Desk with office supplies"
            title="Educate your employees to get better results"
          />
          <ProjectLink
            imageSrc={InsightsImage}
            altText="Laptop with Business Intelligence Insights"
            title="Business Insights is an important piece of your business"
          />
        </div>
        <div className="center-content">
          <Button
            type="black"
            text="All Recent Projects"
            url="/services/recentprojects"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectAndCases;
