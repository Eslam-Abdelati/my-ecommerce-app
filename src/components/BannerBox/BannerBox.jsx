import React from "react";
import { Link } from "react-router-dom";

function BannerBox(props) {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group ">
      <Link to={props.link}>
        <img
          src={props.img}
          alt=""
          className="w-full transition-all ease-in-out duration-500 group-hover:scale-110 group-hover:rotate-1 "
        />
      </Link>
    </div>
  );
}

export default BannerBox;
