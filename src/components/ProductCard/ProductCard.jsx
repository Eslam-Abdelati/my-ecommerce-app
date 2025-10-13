import React, { useContext } from "react";

import flyingMachine from "../../assets/Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg";
import flyingMachine2 from "../../assets/Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import { MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AppContext } from "../../context/AppContext";

function ProductCard({ product, viewMode }) {
  const {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    wishlist,
    handleOpenModal,
  } = useContext(AppContext);
  // التحقق إذا كان المنتج موجود في الـ wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  // دالة لتبديل الحالة
  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  return (
    <div
      className={`productItem rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] shadow-lg 
  ${
    viewMode === "list"
      ? "flex items-center gap-4 bg-[#f1f1f1]"
      : "flex flex-col justify-between"
  } 
  h-[400px]`} // 👈 أضف هذا
    >
      <div
        className={`group imgWrapper relative overflow-hidden 
  ${viewMode === "list" ? "w-[200px] h-[190px]" : "h-[220px] w-full"}`} // 👈 نحدد ارتفاع موحد
      >
        <Link to={`/product/${product.id}`}>
          <div className="imag overflow-hidden">
            <img src={flyingMachine} alt={product.name} className="w-full" />
            <img
              src={flyingMachine2}
              alt={product.name}
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
          {product.discount}%
        </span>
        <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group"
            onClick={handleOpenModal}
          >
            <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
            <IoIosGitCompare className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>
          {/* Heart button مع حالة active */}
          <Button
            onClick={toggleWishlist}
            className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full ${
              isInWishlist
                ? "!bg-primary !text-white"
                : "!bg-white !text-black hover:!bg-primary hover:text-white"
            }`}
          >
            <FaRegHeart className="text-[18px]" />
          </Button>
        </div>
      </div>
      <div
        className={`info p-3 py-3 flex flex-col justify-between ${
          viewMode === "list" ? "flex-1" : ""
        }`}
      >
        <h6
          className={`link  ${
            viewMode === "list" ? "text-[15px] font-[400]" : "text-[12px] "
          }`}
        >
          {product.brand}
        </h6>
        <h3
          className={`line-h mt-1 mb-3 text-black title  ${
            viewMode === "list"
              ? "text-[18px] font-[500] text-[#000]"
              : "text-[13px] font-[500]"
          }`}
        >
          <Link to="/product/1" className="link transition-all">
            {product.name}
          </Link>
        </h3>
        {viewMode === "list" && (
          <p className="text-[14px] mb-3">{product.description}</p>
        )}
        <Rating
          name="size-small"
          defaultValue={product.rating}
          size="small"
          readOnly
        />

        <div
          className={`flex items-center ${
            viewMode === "list" ? "gap-4 " : "justify-between"
          }`}
        >
          <span className="oldPrice line-through text-gray-500 text-[12px] lg:text-[14px] font-[500] ">
            ${product.oldPrice.toFixed(2)}
          </span>
          <span className="price text-[#ff5252] text-[12px] lg:text-[14px] font-[600] ">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div
          className={`mt-3 w-full flex items-center ${
            viewMode === "grid" && ""
          }`}
        >
          <Button
            onClick={() => addToCart(product)}
            className={`btn-org flex gap-2 !text-[13px] !font-[400] ${
              viewMode === "grid" && "w-full"
            }`}
          >
            <MdOutlineShoppingCart className="text-[20px] " /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
