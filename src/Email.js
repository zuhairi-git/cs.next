import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dbe8k3i', 'template_1drte95', form.current, 'lQmVjHQr39L8vlG-T')
      .then((result) => {
        console.log(result.text);
        setIsButtonDisabled(true);
        setShowMessage(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="container mt-4 mb-4 max-width-email">
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label float-start">Name</label>
          <input type="text" className="form-control" name="user_name" id="user_name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="user_email" className="form-label float-start">Email</label>
          <input type="email" className="form-control" name="user_email" id="user_email" required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label float-start">Message</label>
          <textarea className="form-control" name="message" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-warning rounded-pill ps-5 pe-5" disabled={isButtonDisabled}>
          {isButtonDisabled ? 'Sent' : 'Send'}
        </button>
      </form>
      {showMessage && (
        <div className="max-width-email p-3">
          <div className="alert alert-success text-center">
            Thank you for submitting!
            <button type="button" className="btn-close" onClick={closeMessage}></button>
          </div>
        </div>
      )}
    </div>
  );
};
