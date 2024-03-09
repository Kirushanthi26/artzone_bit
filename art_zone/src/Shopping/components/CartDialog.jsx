import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { useCartStore } from "../../shared/store/useCartStore";
import { currencyFormatter } from "../../shared/utils/formatting";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../shared/store/useAuthStore";

const CartDialog = ({ handleClose, open }) => {
  const { items, increaseQuantity, decreaseQuantity } = useCartStore();
  const totalPrice = useCartStore((state) => state.getTotalPrice(state.items));
  const {userId} = useAuthStore()

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">Your Cart</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <ul>
            {items.map((item) => (
              <li key={item.id} className="mb-3">
                <div className="flex justify-between">
                  <div className="capitalize text-xl font-title font-semibold">
                    {item.name}
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </Button>
                    <span className="mx-3 text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outlined"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                  <div className="capitalize text-xl font-title font-semibold">
                    {item.quantity} x {currencyFormatter.format(item.price)}
                  </div>
                </div>
              </li>
            ))}

            <li>
              <div className="flex justify-end mt-16 mb-3">
                <div className="capitalize text-xl font-title font-semibold mr-8">
                  Total:
                </div>

                <div className="capitalize text-lg font-title font-semibold">
                  {currencyFormatter.format(totalPrice)}
                </div>
              </div>
            </li>
          </ul>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
        <Button onClick={handleClose} color="error" variant="contained">
          Close
        </Button>
        {items.length > 0 && (
          <Button variant="contained" onClick={handleClose}>
            <Link to={`/shops/${userId}/checkout`}>go to Checkout</Link>
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
