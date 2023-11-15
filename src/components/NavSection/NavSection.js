import React from 'react'
import "./NavSection.css";
import Button from '../Generics/Button'
import img_logo from '../../assets/images/logotype.svg'
import { Link } from 'react-router-dom';

const NavSection = () => {
  return (
    <div className="container">
    <Link to="/"><img src={img_logo} alt="crito logotype" /></Link>
    <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
    <div className="menu">
        <div className="top-menu">
            <div className="contact-information">
                <div className="content-box">
                    <i className="fa-solid fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="content-box">
                    <i className="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div className="content-box last">
                    <i className="fa-solid fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="socialmedia">
                <a href ="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href ="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                <a href ="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href ="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div className="main-menu">
            <nav>
                <Link to="/" className="active" href="/">Home</Link>
                <Link to="/services" href="services">Service</Link>
                <Link to="/news">News</Link>
                <Link to="/contacts">Contact</Link>
            </nav>
            <Button type="yellow" text="Login" url="/login" />
        </div>
    </div>
</div>
  )
}

export default NavSection