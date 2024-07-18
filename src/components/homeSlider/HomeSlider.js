import "./homeSLider.css";
import slide1Img from "../assets/homeSlider/slide.png";
import slider2Img from "../assets/homeSlider/slide2.png";

import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import "swiper/css/pagination";

function HomeSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ dynamicBullets: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="homeSlider">
          <div className="home-slider_left">
            <h4>
              <img src={slide1Img} alt="" /> Iphone 14 Series
            </h4>
            <h1>
              Up to 10% <br /> off Voucher
            </h1>
            <NavLink>
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
          <div className="home-slider-right">
            <img src={slider2Img} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="homeSlider">
          <div className="home-slider_left">
            <h4>
              <img src={slide1Img} alt="" /> Iphone 14 Series
            </h4>
            <h1>
              Up to 10% <br /> off Voucher
            </h1>
            <NavLink>
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
          <div className="home-slider-right">
            <img src={slider2Img} alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSlider;
