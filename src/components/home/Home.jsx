import React from 'react';
import Social from './Social';
import Data from './Data';
import home from './home.css';
import ScrollDown from './ScrollDown';



const Home = () => {
  return (
 <section className="home section" id="home">
    <div className="home_container container grid">
  <div className="home__content grid">
    <Social/>
    <div className="home__img"></div>
    <Data/> 

  </div>
  <ScrollDown/>
 </div>
</section>
    
  )
}

export default Home