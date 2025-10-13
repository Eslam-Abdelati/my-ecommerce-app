import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/AppContext";
import ProductInfo from "../ProductInfo/ProductInfo";

function ProductModal() {
  const { openModal, handleCloseModal } = useContext(AppContext);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="product-details-modal"
    >
      <DialogContent>
        <div className="w-full">
          <Button
            className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1] hover:!bg-[#ebebeb]"
            onClick={handleCloseModal}
          >
            <IoCloseSharp className="text-[18px]" />
          </Button>
        </div>
        <div className="py-8">
          <ProductInfo />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
