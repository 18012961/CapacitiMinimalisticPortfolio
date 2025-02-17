import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import ScrollDown from './components/home/ScrollDown';
import Skills from './components/Skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/Work/Work';




const App = () => {
  return (
    <>
<Header/>
<main className='main'>
 <Home/>
 <About/>
 <Skills/>
 <Qualification/>
 <Work/>
 <Contact/>
 
</main>

<Footer/>
<ScrollUp/>

    </>
  )
}

export default App