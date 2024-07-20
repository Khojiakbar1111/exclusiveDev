import React from "react";
import "./about.css";
import OurStory from "../../components/ourStory/OurStory";
import Statistics from "../../components/statistics/Statistics";
import Teammates from "../../components/teammates/Teammates";
import Service from "../../components/service/Service";

const About = () => {
  return (
    <div className="about">
      <OurStory />
      <Statistics />
      <Teammates />
      <Service />
    </div>
  );
};

export default About;
