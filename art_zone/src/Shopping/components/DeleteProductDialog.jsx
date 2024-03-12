import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import axios from "axios";

const DeleteProductDialog = ({ handleClose, open, pid, setPageDeleteReload }) => {
  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    
    try {
      await axios.delete(`http://localhost:5000/shops/${pid}`,{
        headers: {
          Authorization: 'Bearer ' + token
        }
        });
        setPageDeleteReload(true)
      handleClose();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">Delete Product</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this product?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
        <Button onClick={handleClose} color="error" variant="contained">
          Close
        </Button>
        <Button onClick={handleDelete} variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProductDialog;
