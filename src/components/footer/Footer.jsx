import React from 'react'
import './footer.css'

const Footer = () => {
  return (
  <div className="footer">
<div className="footer__container container">
<h1 className="footer__title">Fortunate</h1>

<ul className="footer__list">
    <li>
        <a href="#about" className="footer__link">About</a>
    </li>

    <li>
        <a href="#project" className="footer__link">Project</a>
    </li>

    <li>
        <a href="#skills" className="footer__link">Skills</a>
    </li>


</ul>

<div className="footer__social">
<a href="https://www.linkedin.com/in/fortunate-motsoeneng-6b2248170" className="home__social-icon" target="_blank">
    <i class="bx bxl-instagram"></i>
    </a>
    <a href="" className="home__social-icon" target="_blank">
    <i class="bx bxl-github"></i>
    </a>
    <a href="" className="home__social-icon" target="_blank">
    <i class="bx bxl-linkedin"></i>
    </a>
</div>

<span className="footer__copy"> &#169; Fortunate. all right reserved </span>
</div>
</div>
  )
}

export default Footer