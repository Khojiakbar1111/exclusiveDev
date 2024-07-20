import React from "react";
import "./service.css";
import service1 from "../assets/ourStoryImg/Services1.png";
import service2 from "../assets/ourStoryImg/ser2.png";
import service3 from "../assets/ourStoryImg/ser3.png";

const Service = () => {
  return (
    <section className="service">
      <div className="service-card">
        <div className="service-img">
          <img src={service1} alt="" />
        </div>
        <h3>Free and Fast Delivery</h3>
        <span>Free delivery for all orders over $140</span>
      </div>
      <div className="service-card">
        <div className="service-img">
          <img src={service2} alt="" />
        </div>
        <h3>24/7 Customer Service</h3>
        <span>Friendly 24/7 customer support</span>
      </div>
      <div className="service-card">
        <div className="service-img">
          <img src={service3} alt="" />
        </div>
        <h3>Money Back Guarantee</h3>
        <span>We reurn money within 30 days</span>
      </div>
    </section>
  );
};

export default Service;
