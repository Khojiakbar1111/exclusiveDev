import React, { useState } from "react";
import "./contact.css";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("All fields are required!", {
        autoClose: 3000,
      });
      return false;
    }
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const data = {
      ...formData,
      access_key: "bba42fcf-ecb4-45aa-800c-52acfd3525df",
    };
    const json = JSON.stringify(data);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      toast.success("Message sent successfully!", {
        autoClose: 2000,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <section className="contact">
      <div className="contact-left">
        <div className="contact-phone">
          <Link to="+8801611112222">
            <FiPhone />
          </Link>
          <h4>Call To Us</h4>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <hr style={{ height: "2px", background: "#808080" }} />
        <div className="contact-phone">
          <Link>
            <FiPhone />
          </Link>
          <h4>Write To Us</h4>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>

      <div className="contact-right">
        <form onSubmit={onSubmit}>
          <div className="contact-inputs">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={onChange}
              name="name"
            />
            <input
              type="text"
              placeholder="Your Email"
              value={formData.email}
              onChange={onChange}
              name="email"
            />
            <input
              type="text"
              placeholder="Your Phone"
              value={formData.number}
              onChange={onChange}
              name="number"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={onChange}
          ></textarea>
          <button
            type="submit"
            className="contact-right_send"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
