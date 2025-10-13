import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import slid1 from "../../assets/slider1.jpg";
import slid2 from "../../assets/slider2.jpg";
import slid3 from "../../assets/slider3.jpg";
import slid4 from "../../assets/slider4.jpg";

import { Navigation, Autoplay } from "swiper/modules";

function HomeSlider() {
  return (
    <div className="homeSlider py-3">
      <div className="container">
        <Swiper
          spaceBetween={10}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img src={slid1} alt="slider-img" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img src={slid2} alt="slider-img" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img src={slid3} alt="slider-img" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden ">
              <img src={slid4} alt="slider-img" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
