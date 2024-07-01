import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="contact-details">
            <h2>Address</h2>
            <div className="input-group">
              <div className="input-icon">
                <span className="icon">👤</span>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="input-icon">
                <span className="icon">✉️</span>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="input-icon">
                <span className="icon">🏠</span>
                <input type="text" placeholder="Your Address" />
              </div>
            </div>
          </div>
          <div className="message-me">
            <h2>Message Me</h2>
            <div className="input-group">
              <div className="input-half">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="input-half">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-full">
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-full">
                <textarea rows="5" placeholder="Your Message"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="button-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
