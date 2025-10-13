import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import cartBleue from "../../assets/carte_bleue.png";
import visa from "../../assets/visa.png";
import masterCard from "../../assets/master_card.png";
import americanExpress from "../../assets/american_express.png";
import paypal from "../../assets/paypal.png";

function Footer() {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container ">
          <div className="flex items-center justify-center gap-6 py-8 pb-8">
            <div className="col1 flex items-center justify-center flex-col group">
              <LiaShippingFastSolid className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[14px] font-[600] mb-2 mt-3">
                Free Shipping
              </h3>
              <p className="text-[12px] font-[500]">For all Orders Over $100</p>
            </div>
            <div className="col2 flex items-center justify-center flex-col group ">
              <PiKeyReturn className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[14px] font-[600] mb-2 mt-3">
                30 Days Returns
              </h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>
            <div className="col3 flex items-center justify-center flex-col group ">
              <IoWalletOutline className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[14px] font-[600] mb-2 mt-3">
                Secured Payment
              </h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>
            <div className="col4 flex items-center justify-center flex-col group ">
              <GoGift className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[14px] font-[600] mb-2 mt-3">
                Special Gifts
              </h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col5 flex items-center justify-center flex-col group ">
              <BiSupport className="text-[35px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[14px] font-[600] mb-2 mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>

          <hr />

          <div className="footer flex px-3  py-8">
            <div className="part1 w-full border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                lassyshop - Mega Super Store <br /> 507 - Union Trade Center,
                Cairo, Egypt
              </p>
              <Link
                to="mailto:someone@example.com"
                className="link text-[13px]"
              >
                eslam_abdelati@yahoo.com
              </Link>
              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
               (+20) 103-30-09575
              </span>
              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="text-[16px] font-[600]">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2  w-full flex pl-8 mt-5">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Secure payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link className="link" to="/">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2  w-full flex pl-8 flex-col pr-8 mt-5">
              <h2 className="text-[18px] font-[600] mb-2">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>

              <form className="mt-5">
                <input
                  type="email"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />

                <Button className="btn-org">SUBSCRIBE</Button>

                <FormControlLabel
                  className="mt-3 block w-full "
                  control={<Checkbox defaultChecked />}
                  label=" I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] pt-3 pb-3 bg-white">
        <div className="container flex items-center justify-between gap-4">
          <ul className="flex items-center gap-2">
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary hover:-translate-y-1 transition-all duration-500"
              >
                <FaFacebookF className="text-[17px] group-hover:text-white" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary hover:-translate-y-1 transition-all duration-500"
              >
                <CiYoutube className="text-[17px] group-hover:text-white" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary hover:-translate-y-1 transition-all duration-500"
              >
                <FaTwitter className="text-[17px] group-hover:text-white" />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary hover:-translate-y-1 transition-all duration-500"
              >
                <FaInstagram className="text-[17px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-center mb-0">
            © 2025 - Ecommerce Template By-Eslam Amaar
          </p>

          <div className="flex items-center gap-1">
            <img src={cartBleue} alt="image" />
            <img src={visa} alt="image" />
            <img src={masterCard} alt="image" />
            <img src={americanExpress} alt="image" />
            <img src={paypal} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
