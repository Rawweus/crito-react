import React from 'react'
import BusinessImage from '../../assets/images/business_image.png'
import ResponsiveImage from '../../assets/images/responsive-image.png'
import EducateImage from '../../assets/images/educate-image.png'
import InsightsImage from '../../assets/images/insights-image.png'

const ProjectAndCases = () => {
  return (
    <section class="container project-and-cases">
    <div class="container">
        <div class="section-title">
              <p>Project & Case Studies</p>
             <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div class="project-and-cases">
            <a class="project" href="#">
                <img src={BusinessImage} alt="A mans hand reading a business paper" />
                <h3>Grow your business</h3>
                <div class="readmore">Read More <i class="fa-solid fa-square-arrow-up-right"></i></div>
            </a>
            <a class="project" href="#">
                <img src={ResponsiveImage} alt="Pink Apple products on a desk" />
                <h3>Why your clients needs a responsive website</h3>
                <div class="readmore">Read More <i class="fa-solid fa-square-arrow-up-right"></i></div>
            </a>
            <a class="project" href="#">
                <img src={EducateImage} alt="Desk with office supplies" />
                <h3>Educate your employees to get better results</h3>
                <div class="readmore">Read More <i class="fa-solid fa-square-arrow-up-right"></i></div>
            </a>
            <a class="project" href="#">
                <img src={InsightsImage} alt="Laptop with Business Intelligence Insights" />
                <h3>Business Insights is an important piece of your business</h3>
               <div class="readmore">Read More <i class="fa-solid fa-square-arrow-up-right"></i></div>
            </a>
        </div>
        <div class="center-content">
            <a class="btn-black" href="projects.html">All Recent Projects <i class="fa-solid fa-square-arrow-up-right"></i></a>
        </div>
    </div>
</section>
  )
}

export default ProjectAndCases