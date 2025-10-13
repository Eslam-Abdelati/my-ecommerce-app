import React from "react";

import blog1 from "../../assets/blog1.jpg";
// import blog2 from "../../assets/blog2.jpg";
// import blog3 from "../../assets/blog3.jpg";
import { Link } from "react-router-dom";

import { IoMdTime } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function BlogSlider() {
  return (
    <div className="blogSlider group">
      <Link to="/">
        <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
          <img
            src={blog1}
            alt=""
            className="w-full transition-all group-hover:scale-105  group-hover:rotate-1"
          />
          <span className="flex items-center justify-center text-white absolute bottom-[10px] right-[10px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
            <IoMdTime className="text-[18px]" />
            2025-03-12
          </span>
        </div>
      </Link>

      <div className="info py-4">
        <h2 className="text-[14px] font-[600] text-black mb-3">
          <Link to="/" className="link">
            sustainable living through cutting-edge prefabricated homes
          </Link>
        </h2>
        <div className="mb-3 text-[14px]">
          <div>
            Give2 lady of they such they sure it. Me contained explained my
            education. Vulgar as hearts by ...
          </div>
        </div>
        <Link
          to="/"
          className="link font-[500] text-[14px] flex items-center gap-1"
        >
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}

export default BlogSlider;
