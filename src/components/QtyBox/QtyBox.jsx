import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";

function QtyBox({ productId, qty }) {
  const { increaseQty, decreaseQty } = useContext(AppContext);

  return (
    <div className="qty-box flex items-center justify-between">
      <Button
        className="!min-w-[40px] !w-[40px] !h-[40px] !text-[#000] !bg-[#f1f1f1] !rounded-full"
        onClick={() => decreaseQty(productId)}
      >
        <FiMinus className="text-[18px]" />
      </Button>

      <input
        type="number"
        className="w-[50px] h-[40px] p-2 text-center text-[15px] focus:outline-none border rounded-md"
        value={qty}
        readOnly
      />

      <Button
        className="!min-w-[40px] !w-[40px] !h-[40px] !text-[#000] !bg-[#f1f1f1] !rounded-full"
        onClick={() => increaseQty(productId)}
      >
        <BsPlus className="text-[18px]" />
      </Button>
    </div>
  );
}

export default QtyBox;
