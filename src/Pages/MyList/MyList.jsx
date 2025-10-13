import React, { useContext } from "react";
import img from "../../assets/Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import { AppContext } from "../../context/AppContext";

const MyList = () => {
  const { removeFromWishlist, wishlist } = useContext(AppContext);
  return (
    <section className="w-full py-10">
      <div className="container flex gap-5">
        {/* left part */}
        <div className="col1 w-[20%]">
          <ProfileMenu />
        </div>
        {/* raight part */}
        <div className="col2 w-[70%] ">
          <div className="card shadow-md rounded-md bg-white">
            <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="font-[600]">My List</h2>
              <p className="mt-0 mb-0">
                There are{" "}
                <span className="font-bold text-primary">
                  {wishlist.length}{" "}
                </span>
                products in your List
              </p>
            </div>

            {/* ✅ عرض المنتجات في الويش ليست */}
            {wishlist.length > 0 ? (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]"
                >
                  {/* صورة المنتج */}
                  <div className="img w-[15%] rounded-md overflow-hidden">
                    <Link to={`/product/${product.id}`} className="group">
                      <img
                        src={img}
                        alt={product.name}
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </Link>
                  </div>

                  {/* بيانات المنتج */}
                  <div className="info w-[85%] relative">
                    <IoCloseSharp
                      className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all"
                      onClick={() => removeFromWishlist(product.id)}
                      title="Remove from wishlist"
                    />

                    <span className="text-[13px]">{product.brand}</span>

                    <h3 className="text-[15px] w-[80%] font-[600]">
                      <Link to={`/product/${product.id}`} className="link">
                        {product.name}
                      </Link>
                    </h3>

                    <div className="flex items-center gap-4 my-1">
                      <Rating
                        name="size-small"
                        defaultValue={product.rating || 0}
                        size="small"
                        readOnly
                      />
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      {product.oldPrice && (
                        <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="price text-[14px] font-[600] text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.discount && (
                        <span className="price text-primary text-[14px] font-[600]">
                          {product.discount}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-5 text-center text-gray-500">
                Your wishlist is empty 💔
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
