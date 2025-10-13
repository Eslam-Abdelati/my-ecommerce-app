import React, { useState } from "react";
import "./Sidebar.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

function Sidebar() {
  const [openCategoryFilter, setOpenCategoryFilter] = useState(true);
  const [openAvailabilityFilter, setOpenAvailabilityFilter] = useState(true);
  const [openSizeFilter, setOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-2">
          Shop by Category
          <Button
            onClick={() => setOpenCategoryFilter(!openCategoryFilter)}
            className=" !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
          >
            {openCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={openCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-2">
          Availability
          <Button
            onClick={() => setOpenAvailabilityFilter(!openAvailabilityFilter)}
            className=" !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
          >
            {openAvailabilityFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={openAvailabilityFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available (7)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-2">
          Size
          <Button
            onClick={() => setOpenSizeFilter(!openSizeFilter)}
            className=" !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
          >
            {openSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={openSizeFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (7)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (7)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (7)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-2">
          Filter By Price
        </h3>
        <div>
          <RangeSlider />
        </div>
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[12px]">
            From: <strong className="text-dark">EGP: 100</strong>
          </span>
          <span className="ml-auto text-[12px]">
            From: <strong className="text-dark">EGP: 50000</strong>
          </span>
        </div>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-2">
          Filter By Rating
        </h3>
        <div className="flex items-center pl-2 lg:pl-1">
          <FormControlLabel control={<Checkbox size="small" />} />
          <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
          <FormControlLabel control={<Checkbox size="small" />} />
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
          <FormControlLabel control={<Checkbox size="small" />} />
          <Rating name="size-small" defaultValue={3} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
          <FormControlLabel control={<Checkbox size="small" />} />
          <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
          <FormControlLabel control={<Checkbox size="small" />} />
          <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
