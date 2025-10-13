import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import { IoMenuSharp } from "react-icons/io5";
import { IoGridSharp } from "react-icons/io5";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import productsData from "../../data/productsData";

function Shop() {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="py-2 bg-white">
      <div className="container flex gap-3">
        {/* 1- Sidebar */}
        <div className="saidebarWrapper w-[20%] h-full">
          <Sidebar />
        </div>

        {/* 2- Right Content */}
        <div className="rightContent w-[80%] py-3">
          <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between sticky top-[145px] z-[99]">
            <div className="col1 flex items-center itemViewActions">
              <Button
                className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                  itemView === "list" && "active !bg-[#dfdfdf]"
                }`}
                onClick={() => setItemView("list")}
              >
                <IoMenuSharp className="text-[rgba(0,0,0,0.7)] text-[16px]" />
              </Button>
              <Button
                className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                  itemView === "grid" && "active !bg-[#dfdfdf]"
                }`}
                onClick={() => setItemView("grid")}
              >
                <IoGridSharp className="text-[rgba(0,0,0,0.7)] text-[16px]" />
              </Button>
              <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                There are 25 products.
              </span>
            </div>
            <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
              <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                Sort By
              </span>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="!bg-white !text-[12px] !text-[#000] !capitalize !border-2 !border-[#000]"
              >
                Name, A To Z
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  className="!text-[13px] !text-[#000] !capitalize"
                >
                  Name, A To Z
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className="!text-[13px] !text-[#000] !capitalize"
                >
                  Name, Z To A
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className="!text-[13px] !text-[#000] !capitalize"
                >
                  Price, Low To Hight
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className="!text-[13px] !text-[#000] !capitalize"
                >
                  Price, Hight To Low
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div
            className={
              itemView === "grid"
                ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
                : "flex flex-col gap-4"
            }
          >
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={itemView} />
            ))}
           
          </div>

          <div className="flex items-center justify-center mt-5">
            <Pagination count={10} showFirstButton showLastButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
