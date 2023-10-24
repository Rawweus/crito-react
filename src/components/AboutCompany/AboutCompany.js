import React from 'react'
import DariaImage from '../../assets/images/daria.jpg'

const AboutCompany = () => {
  return (
    <section class="container about-company-section">
    <div class="about-left">
        <img src={DariaImage} alt="Woman walking through a corridor" />
        <div class="rectangle-in-image">
            <div class="ceo-name">
                <h3>Samantha Brown,</h3>
                <p> Founder</p>
            </div>
            <p class="founder-paragraph">"Lorem ipsum dolor sit amet consectetur adipsicing elit."</p>
        </div>                
    </div>
    <div class="about-right">
        <p class="about-company">About Company</p>
        <h2>We Are Business Consulting & Credit Repair Experts</h2>
        <div class="about-company-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
        </div>
        <div class="about-icon-group">
            <a class="btn-black" href="aboutcompany.html">Learn More <i class="fa-solid fa-square-arrow-up-right"></i></a>
            <a href="#" class="btn-play">
                <i class="fa-regular fa-circle-play fa-2xl play-button"></i>
                
                <p>Intro Video</p>
            </a>
        </div>
    </div>
</section>
  )
}

export default AboutCompany