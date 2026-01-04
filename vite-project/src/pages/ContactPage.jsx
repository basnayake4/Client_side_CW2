import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", feedback: "" });
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
        {/* Contact Details */}
        <div className="contact-details">
          <p><strong>Email:</strong> support@propertyhub.com</p>
          <p><strong>Phone:</strong> +94 77 123 4567</p>
          <p><strong>Location:</strong> Colombo, Sri Lanka</p>
        </div>

        {/* Feedback Form */}
        <div className="feedback-form">
          <h2>Send Feedback</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              rows={4}
              required
            />

            <button type="submit">Submit</button>

            {submitted && <div className="thankyou">Thank you for your feedback!</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;