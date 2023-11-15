import React from 'react'
import DariaImage from '../../assets/images/daria.jpg'
import Button from '../Generics/Button'

const AboutCompany = () => {
  return (
    <section className="container about-company-section">
    <div className="about-left">
        <img src={DariaImage} alt="Woman walking through a corridor" />
        <div className="rectangle-in-image">
            <div className="ceo-name">
                <h3>Samantha Brown,</h3>
                <p> Founder</p>
            </div>
            <p className="founder-paragraph">"Lorem ipsum dolor sit amet consectetur adipsicing elit."</p>
        </div>                
    </div>
    <div className="about-right">
        <p className="about-company">About Company</p>
        <h2>We Are Business Consulting & Credit Repair Experts</h2>
        <div className="about-company-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
        </div>
        <div className="about-icon-group">
        <Button type="black" text="Learn More" url="/services/about-us" />
            <a href="#" className="btn-play">
                <i className="fa-regular fa-circle-play fa-2xl play-button"></i>
                <p>Intro Video</p>
            </a>
        </div>
    </div>
</section>
  )
}

export default AboutCompany