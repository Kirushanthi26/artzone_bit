import React from "react";
import CreateEventDialog from "./CreateEventDialog";
import { Button } from "@mui/material";
import { useState } from "react";

const CreateEvent = () => {
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
        Create Event
      </Button>
      <CreateEventDialog
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export default CreateEvent;
