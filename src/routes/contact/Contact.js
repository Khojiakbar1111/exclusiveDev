import React from "react";
import "./contact.css";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = () => {
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
        <form>
          <div className="contact-inputs">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Your Phone" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="contact-right_send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
