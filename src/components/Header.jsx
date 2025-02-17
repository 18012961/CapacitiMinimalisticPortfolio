import React, { useState } from 'react'
import './header.css'

const Header = () => {

    
    const[Toggle ,showMenu] = useState(false);
    const[activeNav,setActiveNav] = useState("#home");
  return (
    <header className="header">
       <nav className="nav container">
       <div class="wrapper">
      <a class="mainLogo" href="/">F.</a>
    </div>

    <div className= {Toggle ? "nav__menu show-menu" : "nav__menu"}>
     <ul className="nav__list grid">
      
        <li className="nav__item">
            <a href="#home" onClick={()=> setActiveNav('#about')} className="nav__link active-link">
            <i className="uil uil-estate nav__icon">
           </i> Home
            </a>
        </li> <li className="nav__item">
            <a href="#about" className="nav__link">
            <i className="uil uil-cloud-info  nav__icon"></i>
                About
            </a>
        </li> <li className="nav__item">
            <a href="#skills" className="nav__link">
            <i className="uil uil-file  nav__icon"></i>
                Skills
            </a>
        </li> 
        <li className="nav__item">
            <a href="#portfolio" className="nav__link">
            <i className="uil uil-scenery  nav__icon"></i>
             portfolio
            </a>
        </li>

        <li className="nav__item">
            <a href="#portfolio" className="nav__link">
            <i className="uil uil-message nav__icon"></i>
             contact
            </a>
        </li>

     </ul>
     <i className=" uil uil-times nav__close" onClick={()=> showMenu (!Toggle)}></i>
   

    </div>
    <div className="nav__toggle" onClick={()=> showMenu (!Toggle)}>
     <i className="uil uil-apps"></i> 
     </div>
</nav> 
    </header>
  )
}

export default Header