import React from "react";
import Button from "../Generics/Button";
import KristinePalmer from "../../assets/images/kristinepalmer.jpg";
import MarkAubri from "../../assets/images/markaubri.jpg";
import KimberlyHansen from "../../assets/images/kimberlyhansen.jpg";
import JustinWilloman from "../../assets/images/justinwilloman.jpg";
import CassandraWarren from "../../assets/images/cassandrawarren.jpg";
import AmandaTulling from "../../assets/images/amandatulling.jpg";
import JackMcDogglas from "../../assets/images/jackmcdogglas.jpg";
import FiveStars from "../Generics/FiveStars";

const MeetOurTeam = () => {
  return (
    <section className="meetourteam-testimonial-container">
      <div className="meetourteam-section">
        <p className="meetourteam-paragraph">Meet Our Team</p>
        <div className="ourteam-title">
          <h2>Experience Team Members</h2>
          <Button text="Browse Team" url="/browse-team" />
        </div>

        <div className="all-members">
          <a className="member-image" href="#">
            <img
              src={KristinePalmer}
              alt="Image of the Chief Operation Officer"
            />
            <h3>Kristine Palmer</h3>
            <p>Chief Operation Officer</p>
          </a>
          <a className="member-image" href="#">
            <img src={MarkAubri} alt="Image of a Senior Consultant" />
            <h3>Mark Aubri</h3>
            <p>Senior Consultantr</p>
          </a>
          <a className="member-image" href="#">
            <img src={KimberlyHansen} alt="Image of a Senior Consultant" />
            <h3>Kimberly Hansen</h3>
            <p>Senior Consultant</p>
          </a>
          <a className="member-image" href="#">
            <img
              src={JustinWilloman}
              alt="Image of the Senior Tech Consultant"
            />
            <h3>Justin Willoman</h3>
            <p>Senior Tech Consultant</p>
          </a>
        </div>
        <div className="five-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="testimonial-section">
        <div className="testimonial-title">
          <p>Testimonial</p>
          <h2>What Our Client Says</h2>
        </div>
        <div className="reviews-wrapper">
          <div className="review">
            <div className="review-item">
              <FiveStars text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" />
              <div className="review-image-section">
                <img
                  src={CassandraWarren}
                  alt="Image of a Business Manager at Dorfus"
                />
                <div className="text-section">
                  <h3>Cassandra Warren</h3>
                  <p className="people-title">Business Manager, Dorfus</p>
                </div>
              </div>
            </div>
            <div className="review-item">
              <FiveStars text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" />
              <div className="review-image-section">
                <img
                  src={AmandaTulling}
                  alt="Image of a Business Manager at Dorfus"
                />
                <div className="text-section">
                  <h3>Amanda Tulling</h3>
                  <p className="people-title">Senior Developer, Square</p>
                </div>
              </div>
            </div>
            <div className="review-item">
              <FiveStars text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate" />
              <div className="review-image-section">
                <img
                  src={JackMcDogglas}
                  alt="Image of a Business Manager at Dorfus"
                />
                <div className="text-section">
                  <h3>Jack McDogglas</h3>
                  <p className="people-title">Key Account Manager, Gobona</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centered-btn">
          <Button type="black" text="All reviews" url="/services/allreviews" />
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
