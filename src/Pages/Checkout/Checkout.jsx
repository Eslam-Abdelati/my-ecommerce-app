import React from "react";
import TextField from "@mui/material/TextField";
import img from "../../assets/Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg";
import Button from "@mui/material/Button";

function Checkout() {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        {/* left section */}
        <div className="left-col w-[65%]">
          <div className="card bg-white shadow-md p-4 rounded-md w-full">
            <h2 className="font-[600]">Billing Details</h2>

            <form className="w-full mt-3">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    label="Full Name *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    label="Email *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] pb-2">Delivery</h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    type="text"
                    label="Address"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
              {/* <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    type="text"
                    label="Address"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div> */}

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    label="City *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    label="Country *"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-[500] pb-2">
                Postal code / ZIP *
              </h6>
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                  <TextField
                    type="text"
                    label="ZIP Code"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* raight section */}
        <div className="raight-col w-[35%]">
          <div className="card bg-white shadow-md p-4 rounded-md w-full">
            <h2 className="font-[600] pb-4">Your Order</h2>

            <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>

            <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-2">
                  <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src={img}
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[13px] font-[500]">
                      Beige Spread Collar
                    </h4>
                    <span className="text-[13px]">qty : 2 / XL</span>
                  </div>
                </div>
                <span className="text-[14px] font-[500]">LE 7,992.00</span>
              </div>
            </div>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal. 7 items</span>
              <span className="text-primary font-[500]">LE 1,850.00</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-[500]">Free</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-[15px] font-[600]">Total</span>
              <span className="text-primary font-bold">EGP LE 5,497.00</span>
            </p>

            <Button className="btn-org btn-lg w-full flex gap-2">
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
