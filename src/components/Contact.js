import React from 'react';
import TechIcons from './TechIcons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";

function Contact({ variants, transitions }) {
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_7u4l888', 'template_k9hf1i8', e.target, 'user_seeCm1suBqHAREJo6MzIm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <motion.div className="container contact"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <div className="inner">
        <h1 className="heading">Like what you see?</h1>
        <h2>Let's Talk</h2>
        <div className="content">
          <div className="form-container">
            <div className="contact-form">
              <form id="contact-form" onSubmit={sendEmail}>
                <h2>Contact Me</h2>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Phone Number xxx-xxx-xxxx" />
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  cols="40"
                  rows="5"
                  placeholder="Message me for job inquiries, more information, or whatever else" ></textarea>
                <input
                  type="submit"
                  id="submit"
                  name="submit"
                  value="Submit"/>
              </form>
              <p className="attribution">*implemented with Email.js</p>
            </div>
          </div>
          <div className="info">
            <h2>Are you looking to add a great asset to your team of Web Developers? Great!</h2>
            <p>I am currently seeking a Front-End position in a wonderful team of passionate Web Developers.</p>
            <p>Here's how you can get ahold of me:</p>
            <ul>
              <li>Name: Colton Allen</li>
              <li>Email: coltonaallen@gmail.com</li>
              <li>Phone: 951.756.0273</li>
            </ul>
            <p>If you haven't already checked out my work, click <Link to="/work">here</Link> to navigate to my projects.</p>
            <h5>Technologies I work with</h5>
              <TechIcons />
            <h3>Thank you for taking the time to get to know more about me and my work</h3>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
