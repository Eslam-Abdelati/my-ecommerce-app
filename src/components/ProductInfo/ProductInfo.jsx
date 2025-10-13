import React, { useContext, useState } from "react";
import ImageZoom from "../../components/ImageZoom/ImageZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { AppContext } from "../../context/AppContext"; // استدعاء الكونتكست

function ProductInfo({ product }) {
  // active size -When choosing a size, active
  const [productSize, setProductSize] = useState(null);
  const { addToCart, addToWishlist } = useContext(AppContext); // استخدام الدالة من الكونتكست

  return (
    <div className="container flex gap-4">
      {/* 1- images slider and zoom */}
      <div className="images-zoom w-[40%]">
        <ImageZoom />
      </div>

      {/* 2- Content */}
      <div className="product-content w-[60%] pr-2 pl-10 ">
        {/* title */}
        <h1 className="text-[22px] font-[600] mb-2">{product.name}</h1>
        {/* Brands and Rating and Review */}
        <div className="flex items-center gap-3 justify-start">
          <span className="text-gray-400 text-[13px]">
            Brands :
            <span className="font-[500] text-black opacity-75">
              {product.brand}
            </span>
          </span>
          <Rating
            name="size-small"
            defaultValue={product.rating}
            size="small"
            readOnly
          />

          <span className="text-[13px] cursor-pointer">
            Review ({product.reviews.length || 0})
          </span>
        </div>
        {/* price */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-4">
            <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
              $ {product.oldPrice}
            </span>
            <span className="price text-primary text-[20px]  font-[600]">
              $ {product.price}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[14px]">
              Available In Stock:{" "}
              <span className="text-green-600 text-[14px] font-bold">
                {product.stock} Items
              </span>
            </span>
          </div>
        </div>
        {/* Description */}
        <p className="mt-3 pr-10 mb-5">{product.description}</p>
        {/* size */}
        <div className="flex items-center gap-3">
          <span className="text-[16px]">SIZE : </span>
          <div className="flex items-center gap-1 actions">
            <Button
              className={`${
                productSize === 0 ? "!bg-primary !text-white" : " "
              }`}
              onClick={() => {
                setProductSize(0);
              }}
            >
              S
            </Button>
            <Button
              className={`${
                productSize === 1 ? "!bg-primary !text-white " : " "
              }`}
              onClick={() => {
                setProductSize(1);
              }}
            >
              M
            </Button>
            <Button
              className={`${
                productSize === 2 ? "!bg-primary !text-white " : " "
              }`}
              onClick={() => {
                setProductSize(2);
              }}
            >
              L
            </Button>
            <Button
              className={`${
                productSize === 3 ? "!bg-primary !text-white " : " "
              }`}
              onClick={() => {
                setProductSize(3);
              }}
            >
              XL
            </Button>
          </div>
        </div>

        <p className="text-[14px] mt-5 mb-2 text-[#000]">
          Free Shipping (Est. Delivery Time 2-3 Days)
        </p>
        {/* Quantity and add to cart */}
        <div className="flex items-center gap-4 py-4">
          <div className="qty-box-wrapper">
            {/* component quantity */}
            {/* <QtyBox productId={"1"} qty={2} /> */}
          </div>

          <Button
            onClick={() => addToCart(product)}
            className="btn-org flex gap-2 !min-w-[150px]"
          >
            <MdOutlineShoppingCart className="text-[20px] " /> Add to Cart
          </Button>
        </div>
        {/* button Add to Wishlist , Add to Compare */}
        <div
          onClick={() => addToWishlist(product)}
          className="flex items-center gap-4 mt-4"
        >
          <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
            <FaRegHeart className="text-[18px]" />
            Add to Wishlist
          </span>
          <span className="flex items-center gap-2 text-[14px] link cursor-pointer font-[500]">
            <IoIosGitCompare className="text-[18px]" />
            Add to Compare
          </span>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default ProductInfo;
