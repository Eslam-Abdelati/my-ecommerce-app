import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";

import { Link } from "react-router-dom";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [ineerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (ineerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[15px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="text-[20px] cursor-pointer"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize">
                Fashion
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="flex items-center relative  flex-col">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize">
                      Women
                    </Button>
                  </Link>

                  {ineerSubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                  {ineerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="flex items-center relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize"
                        >
                          Sarees
                        </Link>
                      </li>
                      <li className="flex items-center relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize"
                        >
                          Tops
                        </Link>
                      </li>
                      <li className="flex items-center relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize"
                        >
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize">
                Fashion
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute right-[15px] top-[10px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="flex items-center relative  flex-col">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize">
                      Women
                    </Button>
                  </Link>

                  {ineerSubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute right-[15px] top-[10px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {ineerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="flex items-center relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize"
                        >
                          Sarees
                        </Link>
                      </li>
                      <li className="flex items-center relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize"
                        >
                          Tops
                        </Link>
                      </li>
                      <li className="flex items-center relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] !capitalize"
                        >
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
