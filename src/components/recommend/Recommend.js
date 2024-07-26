import React from "react";
import "./recommend.css";
import reccomend from "./reccomend1.png";

const Recommend = () => {
  return (
    <section className="recommend">
      <div className="recommend-box">
        <div className="reccomend-left">
          <h4>Categories</h4>
          <h1>
            Enhance Your <br /> Music Experience
          </h1>
          <div className="reccomend-limit-box">
            <div className="reccomend-limit">
              <p>23</p>
              <span>Hours</span>
            </div>
            <div className="reccomend-limit">
              <p>05</p>
              <span>Days</span>
            </div>
            <div className="reccomend-limit">
              <p>59</p>
              <span>Minutes</span>
            </div>
            <div className="reccomend-limit">
              <p>35</p>
              <span>Seconds</span>
            </div>
          </div>
          <button>Buy Now!</button>
        </div>
        <div className="reccomend-right">
          <img src={reccomend} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Recommend;
