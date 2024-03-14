import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import axios from "axios";

const CreateEventDialog = ({ handleClose, open }) => {
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
          <form>
            <div className="mb-5">
              <label className=" font-title font-bold">Event Name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Event Address:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Date:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Time:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Description:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Coordinates:</label>
              <div className="mb-5">
                <label className=" font-title font-bold">Latitude:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  required
                />
              </div>
              <div className="mb-5">
                <label className=" font-title font-bold">Longitude:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  required
                />
              </div>
            </div>
            <Button
              onClick={handleClose}
              sx={{ marginRight: "10px" }}
              color="error"
              variant="contained"
            >
              Close
            </Button>
            <Button type="submit" variant="contained">
              Create
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}></DialogActions>
    </Dialog>
  );
};

export default CreateEventDialog;
