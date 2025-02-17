import React from 'react';
import './scrollup.css';
import Header from '../Header';

const ScrollUp = () => {
  window.addEventListener("scroll", function() {
    const scrollUp = document.querySelector(".header");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-header");
    } else {
      // Use scrollUp instead of Header
      scrollUp.classList.remove("show-header");
    }
  });

  return (
    <a href="" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;
