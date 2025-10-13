import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";

import banner1 from "../../assets/banner1.webp"
import banner2 from "../../assets/banner2.webp"
import banner3 from "../../assets/banner5.webp"
import banner4 from "../../assets/banner6.webp"

function AdsBannerSlider(props) {
  return (
    <div className="py-4 w-full ">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <BannerBox img={banner1} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner2} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner3} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={banner4} link={"/"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AdsBannerSlider;
