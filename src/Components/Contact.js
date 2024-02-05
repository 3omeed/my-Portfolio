import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id="contact" className="contact box-section">
      <h2 className="Heading"> Contact Me</h2>
      <p className="quote">Ready To Transform Your Bussiness?</p>
      <span id="arrow">&#8595;</span>
      <div id="together" className="bold">
        Let's Work together
      </div>
      <div className="contact-form">
        <form>
          <label>Name</label>
          <input placeholder="your beautiful name" type="text" />
          <label>Email</label>
          <input placeholder="Email Address" type="email" />
          <button className='btn' type="submit">Submit!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
