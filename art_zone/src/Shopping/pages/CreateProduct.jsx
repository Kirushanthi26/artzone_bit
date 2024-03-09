import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import CreateProductDialog from "../components/CreateProductDialog";
//import { useParams } from "react-router-dom";

const CreateProduct = ({shopId}) => {
  // let { userID } = useParams();
  // console.log(userID)

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
        size="medium"
        variant="contained"
        color="secondary"
        sx={{ width: "100%", marginBottom: "10px" }}
        onClick={handleClickOpen}
      >
        Create Product
      </Button>
      <CreateProductDialog handleClose={handleClose} open={open} userID={shopId}/>
    </>
  );
};

export default CreateProduct;
