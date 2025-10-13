import React from "react";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2 ">
      <input
        type="text"
        placeholder="Search for products... "
        className="placeholder-gray-500 w-full h-[35px] focus:outline-none p-2 bg-transparent"
      />
      <Button className="!absolute top-1/2 -translate-y-1/2  right-[5px] z-50 !rounded-full !w-[37px] !min-w-[37px] !h-[37px] !text-black">
        <IoSearch className="text-[#2a2a2a] text-[20px]" />
      </Button>
    </div>
  );
};

export default Search;
