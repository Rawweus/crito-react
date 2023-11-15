import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-page-white-bg">
        <div className="contact-info-wrapper">
          <div className="contact-info-details">
            <div className="contact-info-content">
              <i className="fa-solid fa-location-dot fa-2xl"></i>
              <div className="h3-and-p">
                <h3>Visit us</h3>
                <div className="detail-paragraph">
                  <p>Sveavägen 31</p>
                  <p>111 34 STOCKHOLM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info-details">
            <div className="contact-info-content">
              <i className="fa-solid fa-phone fa-2xl"></i>
              <div className="h3-and-p">
                <h3>Call us</h3>
                <div className="detail-paragraph">
                  <p>
                    <a href="tel:+46812147050">+46 (8) 121 470 50</a>
                  </p>
                  <p>
                    <a href="tel:+46812147050">+46 (8) 121 470 51</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info-details">
            <div className="contact-info-content">
              <i className="fa-solid fa-envelope fa-2xl"></i>
              <div className="h3-and-p">
                <h3>Email us</h3>
                <div className="detail-paragraph">
                  <p>
                    <a href="mailto:info@crito.com">info@crito.com</a>
                  </p>
                  <p>
                    <a href="mailto:support@crito.com">support@crito.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
