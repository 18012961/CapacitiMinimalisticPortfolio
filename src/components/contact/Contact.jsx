import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_g89w2o7',
       'template_9qkav1g',
        form.current, 
        'oMn6rVIIRhNs2MTzN')
    e.target.reset()
  };
  return (
   <section className="contact section" id="contact">
    <h2 className="section__title">Get in Touch</h2>
    <span className="section__subtitle">Contact Me</span>


    <div className="contact__container container grid">
    <div className="contact__content">
    <h3 className="contact__title">Talk to me</h3>

    <div className="contact__info">
        <div className="div contact__card">
            <i className="bx bx-mail-send contact_card-icon"></i>


    <h3 className="contact__card-title">Email</h3>
    <span className="contact__card-data">fifi@gmail.com</span>

    <a href="" className="contact__button">
        Write email <i className="bx bx-right-arrow-alt contact__button-icon"></i>
    </a>
    </div>

    <div className="div contact__card">
            <i className="bx bxl-whatsapp contact_card-icon"></i>


    <h3 className="contact__card-title">Whatsapp</h3>
    <span className="contact__card-data">073 xxx xxx</span>

    <a href="" className="contact__button">
        Send text <i className="bx bx-right-arrow-alt contact__button-icon"></i>
    </a>
    </div>


    </div>

    </div>

    <div className="contact__content">
    <h3 className="contact__title">Write me your project</h3>

    <form ref={form} onSubmit={sendEmail} className="contact__form">
    <div className="contact__form-div">
    <label className="contact__form-tag"> Email</label>
    <input type = "Email" name = "email" className="contact__form-input" placeholder="Insert your email"/>
    </div>


    

    <div className="contact__form-div contact__form-area">
    <label className="contact__form-tag"> Project </label>
   <textarea name="project"
   cols="30"
    rows="10"
   className="contact__form-input"
    placeholder = "write your project"
   >
    </textarea>  
    </div>
<button className="button button--flex" onClick={() => window.location.href = "#contact"}>
  <span>Send Message</span>
</button>
    </form>
    </div>
   </div>
   </section>
  )
}

export default Contact