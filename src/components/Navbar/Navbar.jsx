import React, { useState } from "react";

import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";

import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

const Navbar = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-5">
          <div className="col-1 w-[25%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className="ml-auto text-[13px]" />
            </Button>
          </div>

          <div className="col-2 w-[50%] nav-link">
            <ul className="flex items-center">
              <li>
                <Link to={"/"} className="link !duration-700 !ease-in-out ">
                  <Button className="link !duration-700 !ease-in-out !capitalize !text-[14px] !text-[rgba(0,0,0,8)] !font-medium hover:!text-[#ff5252] !py-4">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="relative transition">
                <Link
                  to={"/products"}
                  className="link !duration-700 !ease-in-out "
                >
                  <Button className="link !duration-700 !ease-in-out !capitalize !text-[14px] !text-[rgba(0,0,0,8)] !font-medium hover:!text-[#ff5252] !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0] min-w-[150px] bg-white shadow-md transition-all">
                  <ul>
                    <li className="w-full !link !relative ">
                      <Link to={"/products"} className="w-full">
                        <Button className="link w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,.8)] !capitalize">
                          Men
                        </Button>
                      </Link>

                      <div className="submenu absolute top-[0%] left-[120%] min-w-[150px] bg-white shadow-md transition-all">
                        <ul>
                          <li className="w-full !link">
                            <Link to={"/"} className="w-full">
                              <Button className="link w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,.8)] !capitalize">
                                Men
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full !link">
                            <Link to={"/"} className="w-full">
                              <Button className="link w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,.8)] !capitalize">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="w-full !link">
                            <Link to={"/"} className="w-full">
                              <Button className="link w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,.8)] !capitalize">
                                Kids
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="w-full !link">
                      <Link to={"/"} className="w-full">
                        <Button className="link w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,.8)] !capitalize">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="w-full !link">
                      <Link to={"/"} className="w-full">
                        <Button className="link w-full !text-left !justify-start !rounded-none !text-[rgba(0,0,0,.8)] !capitalize">
                          Kids
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="link !duration-700 !ease-in-out "
                >
                  <Button className="link !duration-700 !ease-in-out !capitalize !text-[14px] !text-[rgba(0,0,0,8)] !font-medium hover:!text-[#ff5252] !py-4">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="link !duration-700 !ease-in-out "
                >
                  <Button className="link !duration-700 !ease-in-out !capitalize !text-[14px] !text-[rgba(0,0,0,8)] !font-medium hover:!text-[#ff5252] !py-4">
                    Bags
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="link !duration-700 !ease-in-out "
                >
                  <Button className="link !duration-700 !ease-in-out !capitalize !text-[14px] !text-[rgba(0,0,0,8)] !font-medium hover:!text-[#ff5252] !py-4">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="link !duration-700 !ease-in-out "
                >
                  <Button className="link !duration-700 !ease-in-out !capitalize !text-[14px] !text-[rgba(0,0,0,8)] !font-medium hover:!text-[#ff5252] !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="link !duration-700 !ease-in-out "
                >
                  <Button className="link !duration-700 !ease-in-out !capitalize !text-[14px] !text-[rgba(0,0,0,8)] !font-medium hover:!text-[#ff5252] !py-4">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-3 w-[25%]">
            <p className="text-[13px] font-[500] flex items-center justify-end gap-2 mb-0 mt-0 ">
              <GoRocket className="text-[18px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navbar;
