import React, { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/AppContext";

const CartPanel = (props) => {
  const { cartItems, removeFromCart } = useContext(AppContext);
console.log(cartItems);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCartPanel(newOpen);
  };

  // 🧮 حساب الإجمالي الكلي للسلة
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Drawer
        open={props.isOpenCartPanel}
        onClose={toggleDrawer(false)}
        anchor={"right"}
        className="cart-panel"
      >
        {/* ===== Header ===== */}
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
          <h4 className="font-[600]">Shopping Cart ({cartItems.length})</h4>
          <IoCloseSharp
            onClick={toggleDrawer(false)}
            className="text-[20px] cursor-pointer"
          />
        </div>

        {/* ===== Products List ===== */}
        <div className="scroll w-full max-h-[60vh] overflow-y-scroll overflow-x-hidden py-3 px-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-5">
              Your cart is empty 🛒
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] py-2"
              >
                {/* ## Image */}
                <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
                  <Link className="block group" to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all"
                    />
                  </Link>
                </div>

                {/* ## Info */}
                <div className="info w-[75%] pr-5 relative pt-3">
                  <h4 className="text-[12px] sm:text-[14px] font-[500]">
                    <Link
                      className="link transition-all"
                      to={`/product/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </h4>
                  <p className="flex items-center gap-5 mt-2 mb-2">
                    <span className="text-[13px] sm:text-[14px]">
                      Qty : <span>{item.quantity}</span>
                    </span>
                    <span className="text-primary font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                  <MdOutlineDelete
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all hover:text-primary"
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* ===== Footer ===== */}
        {cartItems.length > 0 && (
          <div className="bottomSec absolute bottom-[20px] left-[10px] w-full overflow-hidden pr-5 bg-white">
            {/* Subtotal */}
            <div className="bottom-price py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between">
              <span className="text-[14px] font-[600]">
                {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
              </span>
              <span className="text-primary font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Total */}
            <div className="bottom-price py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between">
              <span className="text-[14px] font-[600]">Total (tax excl.)</span>
              <span className="text-primary font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between w-full gap-5 mt-8">
              <Link to={"/cart"} className="w-[50%] block">
                <Button className="btn-org btn-lg w-full">View Cart</Button>
              </Link>
              <Link to={"/checkout"} className="w-[50%] block">
                <Button className="btn-org !btn-border btn-lg w-full">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default CartPanel;
