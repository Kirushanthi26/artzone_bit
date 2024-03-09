import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import UpdateProductDialog from "../components/UpdateProductDialog";

const UpdateProduct = ({
  pid,
  productNameProps,
  productPriceProps,
  productDescriptionProps,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="success"
        size="medium"
        variant="contained"
        sx={{ width: "100%", marginBottom: "10px" }}
        onClick={handleClickOpen}
      >
        Update Product
      </Button>
      <UpdateProductDialog
        handleClose={handleClose}
        open={open}
        pid={pid}
        productNameProps={productNameProps}
        productPriceProps={productPriceProps}
        productDescriptionProps={productDescriptionProps}
      />
    </>
  );
};

export default UpdateProduct;
