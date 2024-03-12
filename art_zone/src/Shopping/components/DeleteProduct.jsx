import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import DeleteProductDialog from "./DeleteProductDialog";

const DeleteProduct = ({ pid, setPageDeleteReload }) => {
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
        color="error"
        size="medium"
        variant="contained"
        sx={{ width: "100%" }}
        onClick={handleClickOpen}
      >
        Delete Product
      </Button>
      <DeleteProductDialog
        handleClose={handleClose}
        open={open}
        pid={pid}
        setPageDeleteReload={setPageDeleteReload}
      />
    </>
  );
};

export default DeleteProduct;
