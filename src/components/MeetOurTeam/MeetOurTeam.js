import React from 'react'
import Button from '../Generics/Button'
import KristinePalmer from '../../assets/images/kristinepalmer.jpg'
import MarkAubri from '../../assets/images/markaubri.jpg'
import KimberlyHansen from '../../assets/images/kimberlyhansen.jpg'
import JustinWilloman from '../../assets/images/justinwilloman.jpg'
import CassandraWarren from '../../assets/images/cassandrawarren.jpg'
import AmandaTulling from '../../assets/images/amandatulling.jpg'
import JackMcDogglas from '../../assets/images/jackmcdogglas.jpg'

const MeetOurTeam = () => {
  return (
<section class="meetourteam-testimonial-container">
            <div class="meetourteam-section">
                <p class="meetourteam-paragraph">Meet Our Team</p>
                <div class="ourteam-title">
                    <h2>Experience Team Members</h2>
                    <Button text="Browse Team" url="/browse-team" />
                </div>
                    
                <div class="all-members">
                    <a class="member-image"href="#">
                        <img src={KristinePalmer} alt="Image of the Chief Operation Officer" />
                        <h3>Kristine Palmer</h3>
                        <p>Chief Operation Officer</p>
                    </a>
                    <a class="member-image"href="#">
                        <img src={MarkAubri} alt="Image of a Senior Consultant" />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultantr</p>
                    </a>
                    <a class="member-image"href="#">
                        <img src={KimberlyHansen} alt="Image of a Senior Consultant" />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </a>
                    <a class="member-image"href="#">
                        <img src={JustinWilloman} alt="Image of the Senior Tech Consultant" />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </a>
                </div>
                <div class="five-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="testimonial-section">
                <div class="testimonial-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Says</h2>
                </div>
                <div class="reviews-wrapper">
                    <div class="review">

                        <div class="review-item">
                            <div class="five-stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            </div>
                            <div class="review-image-section">
                                <img src={CassandraWarren} alt="Image of a Business Manager at Dorfus" />
                                    <div class="text-section">
                                        <h3>Cassandra Warren</h3>
                                        <p class="people-title">Business Manager, Dorfus</p>
                                    </div>
                            </div>
                        </div>
                        <div class="review-item">
                            <div class="five-stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            </div>
                            <div class="review-image-section">
                                <img src={AmandaTulling} alt="Image of a Business Manager at Dorfus" />
                                    <div class="text-section">
                                        <h3>Amanda Tulling</h3>
                                        <p class="people-title">Senior Developer, Square</p>
                                    </div>
                            </div>
                        </div>
                        <div class="review-item">
                            <div class="five-stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            </div>
                        <div class="review-image-section">
                                <img src={JackMcDogglas} alt="Image of a Business Manager at Dorfus" />
                                    <div class="text-section">
                                        <h3>Jack McDogglas</h3>
                                        <p class="people-title">Key Account Manager, Gobona</p>
                                    </div>
                            </div>
                        </div>  
                </div>
            </div>
            <div class="centered-btn">
                        <a class="btn-black" href="reviews.html">All Reviews <i class="fa-solid fa-square-arrow-up-right"></i></a>
                        </div>
            </div>

                     
        </section>
  )
}

export default MeetOurTeam