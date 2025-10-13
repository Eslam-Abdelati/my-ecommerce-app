import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Search from "../Search/Search";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Navbar from "../Navbar/Navbar";
import CartPanel from "../CartPanel/CartPanel";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUser } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { AppContext } from "../../context/AppContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const { cartItems, wishlist, currentUser, logout } = useContext(AppContext); // 👈 استخدم الكونتكست
  const [isOpenCartPanel, setIsOpenCartPanel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenCartPanel = () => {
    setIsOpenCartPanel(true);
  };
  const handleLogout = () => {
    logout(); // 👈 تسجيل الخروج من الكونتكست + localStorage
    setAnchorEl(null);
  };
  return (
    <header className="bg-white fixed lg:sticky left-0 w-full top-0 lg:-top-[47px] z-[101]">
      {/* start top-strip */}
      <div className="top-strip py-2 border-t border-b border-gray-200">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[13px] font-[500] text-[#3e3e3e]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 w-[50%] flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li>
                  <Link
                    to="/help-center"
                    className="text-[13px] text-[#3e3e3e] link font-[500] transition  "
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-[13px] text-[#3e3e3e] link font-[500] transition  "
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end top-strip */}

      {/* start header */}
      <div className="header py-4 border-b border-gray-200">
        <div className="container flex items-center justify-between gap-5">
          {/* 1- logo */}
          <div className="col1 w-[20%]">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* 2- Search */}
          <div className="col2 w-[45%] mr-2">
            <Search />
          </div>

          {/* 3- action */}
          <div className="col3 w-[35%] flex items-center ">
            <ul className="flex items-center justify-end gap-3 w-full">
              {!currentUser ? (
                <li>
                  <Link
                    to={"/login"}
                    className="link transition text-[15px] font-[500] "
                  >
                    Login
                  </Link>{" "}
                  | &nbsp;
                  <Link
                    to={"/register"}
                    className="link transition text-[15px] font-[500] "
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <div className="profile flex items-center gap-3 cursor-pointer text-[#000]">
                    <Button
                      className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-gray-200"
                      onClick={handleClick}
                    >
                      <FaRegUser className="text-[17px] text-[rgba(0,0,0,0.7)]" />
                    </Button>
                    <div className="info flex flex-col">
                      <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.6)] font-[500] mb-0 capitalize text-left justify-start">
                        {currentUser.name}
                      </h4>
                      <span className="text-[12px] text-[rgba(0,0,0,0.6)] font-[400] text-left justify-start">
                        {currentUser.email}
                      </span>
                    </div>
                  </div>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/profile" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaRegUser className="text-[18px]" />
                        <span className="text-[14px]">My account</span>
                      </MenuItem>
                    </Link>

                    <Link to="/address" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <SlLocationPin className="text-[18px]" />
                        <span className="text-[14px]">Address</span>
                      </MenuItem>
                    </Link>

                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoBagCheckOutline className="text-[18px]" />
                        <span className="text-[14px]">Orders</span>
                      </MenuItem>
                    </Link>

                    <Link to="/my-list" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaRegHeart className="text-[18px]" />
                        <span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>

                    <Link className="w-full block" onClick={handleLogout}>
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoIosLogOut className="text-[18px]" />
                        <span className="text-[14px]">Logout</span>
                      </MenuItem>
                    </Link>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="wishlist">
                  <Link to="/my-list">
                    <IconButton aria-label="wishlist">
                      <StyledBadge
                        badgeContent={wishlist.length}
                        color="secondary"
                      >
                        <FaRegHeart />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="cart">
                  <IconButton aria-label="cart" onClick={handleOpenCartPanel}>
                    <StyledBadge
                      badgeContent={cartItems.length}
                      color="secondary"
                    >
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end header */}
      <Navbar />
      <CartPanel
        isOpenCartPanel={isOpenCartPanel}
        setIsOpenCartPanel={setIsOpenCartPanel}
        handleOpenCartPanel={handleOpenCartPanel}
      />
    </header>
  );
};

export default Header;
