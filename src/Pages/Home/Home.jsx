import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCartSlider from "../../components/HomeCartSlider/HomeCartSlider";

import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import BlogSlider from "../../components/BlogSlider/BlogSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* 1- img slider */}
      <HomeSlider />
      
      {/* 2- brand slider */}
      <HomeCartSlider />

      {/* 3- Popular Products */}
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSection">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSection">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 480 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label=" Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductSlider items={5} />
        </div>
      </section>

      {/* 4- Free Shipping */}
      <section className="bg-white py-8 pt-2">
        <div className="container">
          <div className="w-[88%] mx-auto border border-[#ff5252] rounded-md p-4 flex items-center justify-between mb-7">
            <div className="col1 flex items-center gap-2">
              <LiaShippingFastSolid className="text-[40px]" />
              <p className="text-[20px] font-[600] uppercase ">Free Shipping</p>
            </div>

            <div className="col2">
              <p className="font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <div className="col3">
              <p className="text-[25px] font-bold ">- Only $200*</p>
            </div>
          </div>

          {/* 4- AdsBanner */}
          <AdsBannerSlider items={4} />
        </div>
      </section>

      {/* 5- Latest Products */}
      <section className="py-8 pt-0 bg-white ">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductSlider items={5} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      {/* 6- Featured Products */}
      <section className="py-8 pt-0 bg-white ">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductSlider items={5} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      {/* 7- From The Blog */}
      <section className="py-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogSlider />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSlider />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSlider />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSlider />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      
      
    </>
  );
};

export default Home;
