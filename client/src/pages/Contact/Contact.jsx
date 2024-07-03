import React from "react";
import "./Contact.css";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Zoom, Fade, Flip } from "react-awesome-reveal";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;
    try {
      const result = await axios.post("http://localhost:8080/sendMessage", {
        name,
        email,
        subject,
        message,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact" id="Contact">
      <Zoom>
        <h1>Contact Me</h1>
        <div className="title">
          <span>*****</span>
          <span className="title-txt">Get in touch</span>
          <span>*****</span>
        </div>
      </Zoom>
      <div className="contact-form">
        <div className="whole-address">
          <h3>Get in Touch</h3>
          <p>Let's Connect</p>
          <div className="_my-name">
            <div className="icon">
              <FaUser />
            </div>
            <div className="details">
              <h4>Name</h4>
              <p>Sabana Sultana</p>
            </div>
          </div>
          <div className="_address">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="details">
              <h4>Address</h4>
              <p>Bardhaman, West Bengal</p>
            </div>
          </div>
          <div className="_email">
            <div className="icon">
              <a href="mailto:sabanasultana132@gmail.com">
                <IoMdMail />
              </a>
            </div>
            <div className="details">
              <h4>Email</h4>
              <p>sabanasultana132@gmail.com</p>
            </div>
          </div>
          <div className="_number">
            <div className="icon">
              <a href="tel:+910000000000">
                <FaPhoneAlt />
              </a>
            </div>
            <div className="details">
              <h4>Ph No</h4>
              <p>+91 0000000000</p>
            </div>
          </div>
        </div>

        <div className="form">
          <h2>
            <span>»»</span> Message Me <span>««</span>
          </h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="input-row">
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="input-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Message.."
                required
              ></textarea>
            </div>

            <div className="button-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
