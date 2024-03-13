import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import axios from 'axios';

const CreateEventDialog = ({handleClose, open}) => {
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth
    maxWidth="md"
  >
    <DialogTitle id="alert-dialog-title">Create Event</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
   
      <Button onClick={handleClose} sx={{marginRight:"10px"}} color="error" variant="contained">
        Close
      </Button>
      <Button type="submit" variant="contained">
        Create
      </Button>
      </DialogContentText>
    </DialogContent>
    <DialogActions sx={{ padding: "20px" }}>
    </DialogActions>
  </Dialog>
  )
}

export default CreateEventDialog
