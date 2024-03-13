import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import axios from "axios";

const DeleteEventDialog = ({handleClose, open}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="alert-dialog-title">Delete Event</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this Event?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
        <Button onClick={handleClose} color="error" variant="contained">
          Close
        </Button>
        <Button variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteEventDialog
