import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import fashion from "../../assets/fashion_cat.png";
import ele from "../../assets/ele.png";
import bag from "../../assets/bag.png";
import beauty from "../../assets/beauty.png";
import foot from "../../assets/foot.png";
import gro from "../../assets/gro.png";
import jw from "../../assets/jw.png";
import well from "../../assets/well.png";
import { Link } from "react-router-dom";

function HomeCartSlider() {
  return (
    <div className="homeCartSlider pt-3 pb-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={fashion}
                  alt="Fashion"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Fashion
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={ele}
                  alt="Electronics"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Electronics
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={bag}
                  alt="bag"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Bags
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={foot}
                  alt="Footwear"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Footwear
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={gro}
                  alt="Groceries"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Groceries
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={beauty}
                  alt="Beauty"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Beauty
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={well}
                  alt="Wellness"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Wellness
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item border border-[rgba(0,0,0,0.1)] py-7 px-3 bg-white text-center flex items-center justify-center flex-col">
                <img
                  src={jw}
                  alt="Jewellery"
                  className="w-[50px] transition-all ease-in-out duration-500"
                />
                <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">
                  Jewellery
                </h3>
              </div>
            </Link>
          </SwiperSlide>

     
         
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCartSlider;
