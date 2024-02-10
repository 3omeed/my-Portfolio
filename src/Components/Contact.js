import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formValue, setFormValue] = useState([
    {
      name: '',
      email: '',
      message: '',
    },
  ]);

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_foatw6m',
        'template_0ahtlcp',
        e.target,
        'KKCQdnBK3nZejLv2p'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <div id="Contact" className="contact box-section">
      <h2 className="Heading"> Contact Me</h2>
      <p className="quote">Ready To Transform Your Bussiness?</p>
      <span id="arrow">&#8595;</span>
      <div id="together" className="bold">
        <a  href='mailto:abdelrahmanemad2712@gmail.com'>Let's Work together</a>
      </div>
      <div className="contact-form">
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input
            value={formValue.name}
            onChange={changeHandler}
            placeholder="your beautiful name"
            type="text"
          />
          <label>Email</label>
          <input
            value={formValue.email}
            onChange={changeHandler}
            placeholder="Email Address"
            type="email"
          />
          <label>Your Message!</label>
          <textarea
            value={formValue.message}
            onChange={changeHandler}
            placeholder={`let's work together`}
          ></textarea>
          <button className="btn" type="submit">
            Submit!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
