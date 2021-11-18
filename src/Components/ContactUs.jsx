/* eslint-disable no-console */
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eut92z', 'template_kkdwg3s', form.current, 'user_Blq82a6SwXzdJxeYb8dc6').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    window.alert('thank you for your message');
  };

  return (
    <div className="ContactUsForm">
      <form ref={form} onSubmit={sendEmail} className="email">
        <label htmlFor="ContactUsName" className="ContactUsName">
          Name
        </label>
        <input type="text" name="user_name" placeholder="Lastname Firstname" />
        <label htmlFor="ContactUsEmail" className="ContactUsEmail">
          Email
        </label>
        <input type="email" name="user_email" placeholder="Email" />
        <label htmlFor="ContactUsMessage" className="ContactUsMessage">
          Message
        </label>
        <textarea name="message" placeholder="Your message here" />
        <input type="submit" value="Send" className="ContactUsbtn" />
      </form>
    </div>
  );
}
