import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h1 className="h1-contact">Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div class="contactLinks">
        <a class="text-decoration-none link-offset-2 link-offset-3-hover link-opacity-25-hover" href="https://accounts.google.com/">Email</a>
        <a class="text-decoration-none link-offset-2 link-offset-3-hover link-opacity-25-hover" href="https://uk.linkedin.com/in/jakia-sultana-8353a1171">LinkedIn</a>
        <a class="text-decoration-none link-offset-2 link-offset-3-hover link-opacity-25-hover" href="https://github.com/2akia?tab=repositories">GitHub</a>
      </div>
    </div>
  );
};


export default Contact;