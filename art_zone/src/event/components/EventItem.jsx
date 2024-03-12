import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Iframe from "react-iframe";

const EventItem = ({
  eventName,
  eventDate,
  eventTime,
  eventDescription,
  mapLocation,
}) => {
  return (
    <li className="mr-8 my-5">
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Iframe
            url={mapLocation}
            width="350px"
            height="300px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {eventName}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "20px", fontWeight: 500 }}
          >
            {eventDate} - {eventTime}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "16px", fontWeight: 400 }}
          >
            {eventDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            sx={{ width: "100%", marginBottom: "5px" }}
          >
            Attend
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default EventItem;
