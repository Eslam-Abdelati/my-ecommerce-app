import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import im from "../../assets/Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg";
import im2 from "../../assets/Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ImageZoom() {
  // Image number that is currently used (0 or 1).
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef(); //ريفرنس للسلايدر الكبير. Rivernce of the Great Slider.
  const zoomSliderSml = useRef(); //س للسلايدر الصغير. S for small slider.

  //   Receiving Index (Image Number).
  // Slideindex change.
  // By giving up the large and small slider, they go to the same image.
  const goto = (index) => {
    setSlideIndex(index);
    if (zoomSliderBig.current && zoomSliderBig.current.swiper) {
      zoomSliderBig.current.swiper.slideTo(index);
    }

    if (zoomSliderSml.current && zoomSliderSml.current.swiper) {
      zoomSliderSml.current.swiper.slideTo(index);
    }
  };
  return (
    <>
      <div className="flex gap-3">
        {/* images slider left */}
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductImage h-[450px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? "opacity-1 " : "opacity-30 "
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src={im}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? "opacity-1 " : "opacity-30 "
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src={im2}
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* image zoom */}
        <div className="zoomImage w-[85%] h-[500px] overflow-hidden rounded-md ">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom src={im} zoomType="hover" zoomScale={1} />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom src={im2} zoomType="hover" zoomScale={1} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ImageZoom;
