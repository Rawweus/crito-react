import React from 'react'
import LogoWhite from '../../assets/images/logotype-white.svg'
import LogoWhiteRight from '../../assets/images/background-lines-white-right.svg'

const Footer = () => {
  return (
<footer class="footer">

<div class="footer-top">

    <div class="container footer-container">
        
        <div class="footer-menu">
            <div class="footer-logo-section">
                <a href="index.html"><img src={LogoWhite} alt="crito logotype" /></a>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            
            <div class="company-section">
                <h3><a href="#">Company</a></h3>
                <p><a href="#">About</a></p>
                <p><a href="#">Features</a></p>
                <p><a href="#">Works</a></p>
                <p><a href="#">Career</a></p>
            </div>
            
            
            <div class="help-section">
                <h3><a href="#">Help</a></h3>
                <p><a href="#">Customer Support</a></p>
                <p><a href="#">Delivery Details</a></p>
                <p><a href="#">Terms & Conditions</a></p>
                <p><a href="#">Privacy Policy</a></p>
            </div>
            
            
            <div class="resources-section">
                <h3><a href="#">Resources</a></h3>
                <p><a href="#">Free eBooks</a></p>
                <p><a href="#">Development Tutorial</a></p>
                <p><a href="#">How to - Blog</a></p>
                <p><a href="#">Youtube Playlist</a></p>
            </div>
            
            
            <div class="link-section">
                <h3><a href="#">Link</a></h3>
                <p><a href="#">Free eBooks</a></p>
                <p><a href="#">Development Tutorial</a></p>
                <p><a href="#">How to - Blog</a></p>
                <p><a href="#">Youtube Playlist</a></p>
            </div>
        </div>
        <img src={LogoWhiteRight} class="bg-footer-lines" alt="" />
    </div>
</div>

<div class="lower-footer container">
<span>@ 2021 Crito - Consulting Company Inc. All Rights Reserved.</span>
<div class="socialmedia footer-icons">
    <a href ="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
    <a href ="https://twitter.com" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
    <a href ="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    <a href ="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
</div>
</div>

</footer>
  )
}

export default Footer