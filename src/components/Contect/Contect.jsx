import React from 'react';
import './Contect.css';

export default function Contect() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    e.target.reset();
  };

  return (
    <div className='container' id='contect'>
      <div className='Title'>
        <h6>Get in touch</h6>
        <h1>Contact Me</h1>
      </div>
      <div className='content-maindiv'>
        <iframe
          className="map-box"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.974836684529!2d71.95085767475204!3d22.392306039555244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ed52ac00ab4df%3A0xafd2bb10a25e832b!2sVasana%2C%20Gujarat%20382460!5e0!3m2!1sen!2sin!4v1724135326861"
        ></iframe>
        <form className="Con-Main" onSubmit={handleSubmit}>
          <h3 className='c-haeding'>Contact Form</h3>
          <div className="C-Form">
            <input type="text" id="name" placeholder="Name" required />
            <input type="email" id="email" placeholder="Email Address" required />
          </div>
          <textarea id="message" placeholder="Your Message" required></textarea>
          <div className="button">
            <button className='c-btn' type="submit">
              <i className="bi bi-send-fill"></i> Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
