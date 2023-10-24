import React from 'react'
import Button from '../Generics/Button'

const CompanyServiceSection = () => {
  return (
<section class="container services-container">
    <div class="services container">
    <div class="services-left">
        <p>Features</p>
        <h2>Our Accounting is trusted by thousand of companies</h2>
        <Button text="Learn More" url="/services/consulting" />
    </div>
<div class="services-right">
    <div>
        <i class="fa-regular fa-handshake"></i>
        <h3>Business Advice</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
    </div>
    <div>
        <i class="fa-regular fa-lightbulb"></i>
        <h3>Startup Business</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
    </div>
    <div>
        <i class="fa-solid fa-money-bill-trend-up"></i>
        <h3>Financial Advice</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
    </div>
    <div>
        <i class="fa-solid fa-gears"></i>
        <h3>Risk Managemen</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
    </div>
</div>
</div>
</section>
  )
}

export default CompanyServiceSection