import React from 'react'
import DeleteEventDialog from './DeleteEventDialog'
import { Button } from "@mui/material";
import { useState } from "react";

const DeleteEvent = () => {
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
        Delete Event
      </Button>
      <DeleteEventDialog
        handleClose={handleClose}
        open={open}
      />
    </>
  )
}

export default DeleteEvent;
