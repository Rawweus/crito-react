import React from 'react'
import LogoWhite from '../../assets/images/logotype-white.svg'
import LogoWhiteRight from '../../assets/images/background-lines-white-right.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer className="footer">

<div className="footer-top">

    <div className="container footer-container">
        
        <div className="footer-menu">
            <div className="footer-logo-section">
                <Link to="/"><img src={LogoWhite} alt="crito logotype" /></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            
            <div className="company-section">
                <h3><a href="#">Company</a></h3>
                <p><a href="#">About</a></p>
                <p><a href="#">Features</a></p>
                <p><a href="#">Works</a></p>
                <p><a href="#">Career</a></p>
            </div>
            
            
            <div className="help-section">
                <h3><a href="#">Help</a></h3>
                <p><a href="#">Customer Support</a></p>
                <p><a href="#">Delivery Details</a></p>
                <p><a href="#">Terms & Conditions</a></p>
                <p><a href="#">Privacy Policy</a></p>
            </div>
            
            
            <div className="resources-section">
                <h3><a href="#">Resources</a></h3>
                <p><a href="#">Free eBooks</a></p>
                <p><a href="#">Development Tutorial</a></p>
                <p><a href="#">How to - Blog</a></p>
                <p><a href="#">Youtube Playlist</a></p>
            </div>
            
            
            <div className="link-section">
                <h3><a href="#">Link</a></h3>
                <p><a href="#">Free eBooks</a></p>
                <p><a href="#">Development Tutorial</a></p>
                <p><a href="#">How to - Blog</a></p>
                <p><a href="#">Youtube Playlist</a></p>
            </div>
        </div>
        <img src={LogoWhiteRight} className="bg-footer-lines" alt="" />
    </div>
</div>

<div className="lower-footer container">
<span>@ 2021 Crito - Consulting Company Inc. All Rights Reserved.</span>
<div className="socialmedia footer-icons">
    <Link to ="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
    <Link to ="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></Link>
    <Link to ="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
    <Link to ="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
</div>
</div>

</footer>
  )
}

export default Footer