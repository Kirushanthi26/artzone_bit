import React from 'react'
import UpdateEventDialog from './UpdateEventDialog'
import { Button } from "@mui/material";
import { useState } from "react";


const UpdateEvent = () => {

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
        color="success"
        sx={{ width: "100%", marginBottom: "10px" }}
        onClick={handleClickOpen}
      >
        Update Event
      </Button>
      <UpdateEventDialog
        handleClose={handleClose}
        open={open}
      />
    </>
  )
}

export default UpdateEvent
