import React from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <div className="address">
          <h3>Get in Touch</h3>
          <p>Let's Connect</p>
          <div className="my-name">
            <div className="icon"></div>
            <div className="details">
              <h4>Name</h4>
              <p>Sabana Sultana</p>
            </div>
          </div>
          <div className="address">
            <div className="icon"></div>
            <div className="details">
              <h4>Address</h4>
              <p>Bardhaman, West Bengal</p>
            </div>
          </div>
          <div className="email">
            <div className="icon"></div>
            <div className="details">
              <h4>Email</h4>
              <p>sabanasultana132@gmail.com</p>
            </div>
          </div>
          <div className="number">
            <div className="icon"></div>
            <div className="details">
              <h4>Ph No</h4>
              <p>+91 0000000000</p>
            </div>
          </div>
        </div>
        <div className="form">
          <h2>Message Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="subject">Subject</label>
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
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
