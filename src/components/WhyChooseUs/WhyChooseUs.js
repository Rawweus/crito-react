import React from 'react'
import AmyImage from '../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'

const WhyChooseUs = () => {
  return (
<section class="container why-choose-us-section">
    {/* Vänster sida */}
    <div class="why-choose-us-left">
        <div class="why-choose-us-title">
            <p>Why Choose Us</p>
            <h2>Why We Are The Best Business Consulting Agency</h2>
        </div>
        {/* Flex container för icon-content block */}
        <div class="icon-container">
            <div class="icon-content">
                <div class="icon">
                    <i class="fa-regular fa-thumbs-up fa-xl"></i>
                </div>
                <div class="text-content">
                    <h3>Process Excellence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
    
            <div class="icon-content">
                <div class="icon">
                    <i class="fa-regular fa-gem fa-xl"></i>
                </div>
                <div class="text-content">
                    <h3>Strategic Planning</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
    
            <div class="icon-content">
                <div class="icon">
                    <i class="fa-solid fa-scale-balanced fa-xl"></i>
                </div>
                <div class="text-content">
                    <h3>Experience Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
    
            <div class="icon-content">
                <div class="icon">
                    <i class="fa-solid fa-head-side-virus fa-xl"></i>
                </div>
                <div class="text-content">
                    <h3>Artificial Intelligence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    </div>
    {/* Höger Sida */}
    <div class="why-choose-us-right">
        <div class="rectangle">
            <img src={AmyImage} alt="Beskrivning av bilden" class="overlay-image" />
        </div>
    </div>
</section>
  )
}

export default WhyChooseUs