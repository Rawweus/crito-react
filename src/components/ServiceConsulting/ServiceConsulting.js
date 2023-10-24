import React from 'react'
import BackgroundLines from '../../assets/images/background-lines-right.svg'

const ServiceConsulting = () => {
  return (
    <section class="service-consulting">
    <div class="service-consulting-container">
        <img src={BackgroundLines} class="bg-lines-right" alt="wavy lines right side" />
        <div class="text-container">
            <p>Our services</p>
            <h2>We Provide The Best Service For Consulting</h2>
        </div>
    <div class="four-squares">
        <div class="square">
            <div class="dashed-line"></div>
            <h3>Business Advice</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus.</p>
            <i class="clickable-icon fa-solid fa-circle-arrow-right fa-2xl"></i>
        </div>
        <div class="square">
            <div class="dashed-line"></div>
            <h3>Startup Business</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus.</p>
            <i class="clickable-icon fa-solid fa-circle-arrow-right fa-2xl"></i>
        </div>
        <div class="square">
            <div class="dashed-line"></div>
            <h3>Financial Advice</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus.</p>
            <i class="clickable-icon fa-solid fa-circle-arrow-right fa-2xl"></i>
        </div>
        <div class="square">
            <div class="dashed-line"></div>
            <h3>Risk Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Officiis in nam possimus.</p>
            <i class="clickable-icon fa-solid fa-circle-arrow-right fa-2xl"></i>
        </div>
    </div>
    </div>
    <div class="browse-services-btn">
        <a class="btn-transparent" href="services.html">Browse Services <i class="fa-solid fa-square-arrow-up-right"></i></a>
    </div>
</section>
  )
}

export default ServiceConsulting