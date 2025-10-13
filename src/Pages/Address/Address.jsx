import React from "react";
import userImg from "../../assets/6472122961_c6477930d1_b-460x460.jpg";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function Address() {
  return (
    <section className="w-full py-10">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white shadow-md rounded-md sticky top-[160px]">
            {/* image , name and email */}
            <div className="flex items-center justify-center w-full flex-col p-3">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
                <img
                  src={userImg}
                  alt="user-image"
                  className="w-full h-full object-cover"
                />
                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                  <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0"
                  />
                </div>
              </div>
              <h3 className="font-[600]">eslam</h3>
              <h6 className="text-[13px] font-[500]">
                eslamamaar012@gmail.com
              </h6>
            </div>
            {/* list menu */}
            <ul className="list-none pb-5 bg-[#f1f1f1] profile-menu">
              <li className="w-full">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <FaRegUser className="text-[15px]" /> My Profile
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/address"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <SlLocationPin className="text-[15px]" />
                    Address
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/my-list"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <FaRegHeart className="text-[15px]" />
                    My List
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/my-orders"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <IoBagCheckOutline className="text-[15px]" />
                    My Orders
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <IoIosLogOut className="text-[15px]" />
                    Logout
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="col2 w-[80%]"></div>
      </div>
    </section>
  );
}

export default Address;
