import React from 'react'
import Button from '../Generics/Button'
import FeatureBox from '../Generics/FeatureBox'

const CompanyServiceSection = () => {

    const services = [
        { title: "Business Advice", paragraph: "Lorem ipsum dolor sit amet consectetur adipiscing elit", icon: <i className="fa-regular fa-handshake"></i>},
        { title: "Startup Business", paragraph: "Lorem ipsum dolor sit amet consectetur adipiscing elit", icon: <i className="fa-regular fa-lightbulb"></i>},
        { title: "Financial Advice", paragraph: "Lorem ipsum dolor sit amet consectetur adipiscing elit", icon: <i className="fa-solid fa-money-bill-trend-up"></i>},
        { title: "Risk management", paragraph: "Lorem ipsum dolor sit amet consectetur adipiscing elit", icon: <i className="fa-solid fa-gears"></i>}
    ]

    
  return (
    <section className="container services-container">
      <div className="services container">
        <div className="services-left">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <Button type="yellow" text="Learn More" url="/services/consulting" />
        </div>
        <div className="services-right">
          {
            services.map((service, index) => (
                <FeatureBox key={index} title={service.title} paragraph={service.paragraph} icon={service.icon} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CompanyServiceSection
