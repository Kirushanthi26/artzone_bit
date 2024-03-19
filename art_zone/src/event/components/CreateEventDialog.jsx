import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import axios from "axios";
import { useAuthStore } from "../../shared/store/useAuthStore";

const CreateEventDialog = ({ handleClose, open }) => {
  const { userId } = useAuthStore();

  const [eName, setEventName] = useState("");
  const [eAddress, setEventAddress] = useState("");
  const [eDate, setEventDate] = useState("");
  const [eTime, setEventTime] = useState("");
  const [eDescription, setEventDescription] = useState("");
  const [eLatitude, setEventLatitude] = useState("");
  const [eLongitude, setEventLongitude] = useState("");

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const formData = new FormData();
      formData.append("eName", eName);
      formData.append("eAddress", eAddress);
      formData.append("eDate", eDate.toString());
      formData.append("eTime", eTime.toString());
      formData.append("eDescription", eDescription);
      formData.append("eLatitude", eLatitude);
      formData.append("eLongitude", eLongitude);

      console.log(Object.fromEntries(formData))

      const response = await axios.post(
        `http://localhost:5000/events/${userId}/new`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);

      setEventName("");
      setEventAddress("");
      setEventDate("");
      setEventTime("");
      setEventDescription("");
      setEventLatitude("");
      setEventLongitude("");
      setError("");

      handleClose();
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred while creating the event.");
      }
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
      <DialogTitle id="alert-dialog-title">Create Event</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className=" font-title font-bold">Event Name:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={eName}
                onChange={(e) => setEventName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Event Address:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={eAddress}
                onChange={(e) => setEventAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Date:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                value={eDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Time:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                value={eTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className=" font-title font-bold">Description:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={eDescription}
                onChange={(e) => setEventDescription(e.target.value)}
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
                  value={eLatitude}
                  onChange={(e) => setEventLatitude(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label className=" font-title font-bold">Longitude:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  value={eLongitude}
                  onChange={(e) => setEventLongitude(e.target.value)}
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
