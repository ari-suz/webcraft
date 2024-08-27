import React, { useState, useEffect } from "react";
import { useForm } from '@formspree/react';
import "../css/form.css";

const Form = () => {

  const [formData, setFormData] = useState({
    customerName: "",
    businessName: "",
    email: "",
    phone: "",
    details: ""
  });

  const [state, handleSubmit] = useForm("manwvjwq");

  useEffect(() => {
    if (state.succeeded) {
      alert("Thank you for your submission! We will get in touch shortly.");
      setFormData({
        customerName: "",
        businessName: "",
        email: "",
        phone: "",
        details: ""
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="container">
      <div>
        <h2 className="form-header">Tell us about your business!</h2>
        <p className="form-header">Please fill out the form with your basic information, as well as a little 
          about your business.<br />What are you looking for from a website? What functionality do you require?
          <br />
        </p>
        <p className="form-header">
          <b>Get in touch:</b><br />
          ariana@arianajorgensen.com<br />
          925-231-5327
        </p>
      </div>
      <div className="contact-form">
      <form onSubmit={handleSubmit} method="POST">
          <label>Your Name:</label>
          <input type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          ></input>
          <label>Business Name:</label>
          <input type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          ></input>
          <label>Phone Number:</label>
          <input type="text"
            name="phone"
            value={formData.phone}
            pattern="[0-9]{10}"
            onChange={handleChange}
          ></input>
          <label>Email:</label>
          <input type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></input>
          <label>Project Details:</label>
          <textarea
            name="details"
            type="text"
            placeholder="Tell me about your company - what is your dream website?"
            size="lg"
            value={formData.details}
            onChange={handleChange}
          ></textarea>
          <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;