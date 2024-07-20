import React from "react";
import "./teammates.css";
// images
import temmate1 from "../assets/ourTemmate/ourTemmate.png";
import temmate2 from "../assets/ourTemmate/ourTemmate2.png";
import temmate3 from "../assets/ourTemmate/ourTeammte3.png";

// font icon
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

// swiper
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Teammates = () => {
  const ourTemmate = [
    {
      id: 1,
      image: temmate1,
      firstName: "Tom Cruise",
      job: "Founder & Chairman",
    },
    {
      id: 2,
      image: temmate2,
      firstName: "Emma Watson",
      job: "Managing Director",
    },
    {
      id: 3,
      image: temmate3,
      firstName: "Will Smith",
      job: "Product Designer",
    },
  ];

  console.log(ourTemmate);

  return (
    <>
      <Swiper modules={[Pagination]} pagination={true} className="aboutSwiper">
        <SwiperSlide>
          <div className="our-temmate">
            {ourTemmate.map((temmate) => {
              return (
                <div className="temmate-cart" key={temmate.id}>
                  <div className="temmate-img">
                    <img src={temmate.image} alt="" />
                  </div>
                  <h1>{temmate.firstName}</h1>
                  <p>{temmate.job}</p>
                  <div className="temmate-icon">
                    <Link to="/twitter">
                      <CiTwitter />
                    </Link>
                    <Link to="/instagram">
                      <FaInstagram />
                    </Link>
                    <Link to="/linkedin">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="our-temmate">
            {ourTemmate.map((temmate) => {
              return (
                <div className="temmate-cart" key={temmate.id}>
                  <div className="temmate-img">
                    <img src={temmate.image} alt="" />
                  </div>
                  <h1>{temmate.firstName}</h1>
                  <p>{temmate.job}</p>
                  <div className="temmate-icon">
                    <Link to="/twitter">
                      <CiTwitter />
                    </Link>
                    <Link to="/instagram">
                      <FaInstagram />
                    </Link>
                    <Link to="/linkedin">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Teammates;
