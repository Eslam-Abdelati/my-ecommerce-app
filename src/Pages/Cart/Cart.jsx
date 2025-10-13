import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import QtyBox from "../../components/QtyBox/QtyBox";
import { AppContext } from "../../context/AppContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(AppContext);

  // 🧮 حساب المجموع الفرعي
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page py-4 lg:py-8 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        {/* Left part */}
        <div className="left-part w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="font-[600]">Your Cart</h2>
              <p className="mt-0 mb-0">
                There are{" "}
                <span className="font-bold text-primary">
                  {cartItems.length}
                </span>{" "}
                products in your cart
              </p>
            </div>

            {cartItems.length === 0 ? (
              <div className="p-5 text-center">
                <p className="text-gray-500">Your cart is empty 🛍️</p>
                <Link to="/">
                  <Button className="btn-org mt-3">Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]"
                >
                  <div className="img w-[15%] rounded-md overflow-hidden">
                    <Link to={`/product/${item.id}`} className="group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full group-hover:scale-105 transition-all"
                      />
                    </Link>
                  </div>

                  <div className="info w-[85%] relative">
                    <IoCloseSharp
                      onClick={() => removeFromCart(item.id)}
                      className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all"
                    />

                    <span className="text-[13px]">
                      {item.brand || "Brand"} 
                    </span>
                    <h3 className="text-[15px] w-[80%] font-[600]">
                      <Link to={`/product/${item.id}`} className="link">
                        {item.name}
                      </Link>
                    </h3>

                    <div className="w-[30%] mt-2">
                      <QtyBox productId={item.id} qty={item.quantity} />
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                      <span className="price text-[14px] font-[600]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      {item.oldPrice && (
                        <>
                          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                            ${item.oldPrice}
                          </span>
                          <span className="price text-primary text-[14px] font-[600]">
                            {Math.round(
                              ((item.oldPrice - item.price) / item.oldPrice) *
                                100
                            )}
                            % OFF
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right part */}
        <div className="right-part w-[30%]">
          <div className="shadow-md rounded-md bg-white p-4 sticky top-[155px] z-[90]">
            <h3 className="pb-3 font-[600]">Cart Totals</h3>
            <hr />

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>

            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-primary font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </p>

            <Link to="/checkout">
              <Button className="btn-org btn-lg w-full flex gap-2 mt-4">
                Check Out
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
