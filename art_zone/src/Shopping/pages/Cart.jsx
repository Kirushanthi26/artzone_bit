import { useState } from "react";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import CartDialog from "../components/CartDialog";
import { useCartStore } from "../../shared/store/useCartStore";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {items} = useCartStore() 

  return (
    <>
      <Button sx={{ color: "white" }} onClick={handleClickOpen}>
        <ShoppingCart sx={{ color: "white" }} />
        ({items.length})
      </Button>
      <CartDialog handleClose={handleClose} open={open}/>
    </>
  );
};

export default Cart;
