import React, { useState, useEffect } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import SquareLoader from 'react-spinners/ClipLoader';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [formValue, setFormValue] = useState([
    {
      name: '',
      email: '',
      message: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target]: [e.target.value] });
  };

  // console.log(formValue)

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formValue);
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
          console.log('email sent succsessfully');
          setLoading(false);
          setDone(true);

          setTimeout(() => {
            setDone(false);
          }, 2000);
        },
        (error) => {
          console.error(error.text);
          setDone(false);
        }
      );
    e.target.reset();
  };
  return (
    <div id="Contact" className="contact box-section">
      <h1 className="Heading" data-aos="fade-down">
        {' '}
        Contact Me
      </h1>
      <p className="quote" data-aos="fade-down">
        Ready To Transform Your Bussiness?
      </p>
      <span id="arrow">&#8595;</span>
      <div id="together" className="bold">
        <a href="mailto:abdelrahmanemad2712@gmail.com">Let's Work together</a>
      </div>
      <div className="contact-form" data-aos="fade-up">
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input
            id="fullName"
            value={formValue.name}
            onChange={changeHandler}
            placeholder="your beautiful name"
            type="text"
            required
            name="from_name"
          />
          <label>Email</label>
          <input
            id="email_id"
            value={formValue.email}
            onChange={changeHandler}
            placeholder="Email Address"
            type="email"
            required
            name="email_id"
          />
          <label>Your Message!</label>
          <textarea
            id="message"
            value={formValue.message}
            onChange={changeHandler}
            placeholder={`let's work together`}
            name="message"
          ></textarea>
          <button className="btn" type="submit">
            {done ? 'Sent' : 'Submit!'}
          </button>
          {setLoading ? (
            <SquareLoader className="loader" loading={loading} />
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
