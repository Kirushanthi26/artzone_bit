import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Map from "./Map";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";

const EventItem = ({
  index,
  eventName,
  eventDate,
  eventTime,
  eventDescription,
  eventLatitude,
  eventLongitude,
}) => {
  const mapContainerId = `map-${index}`;
  console.log(mapContainerId);

  return (
    <li className="inline-block mr-8 my-5">
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Map
            center={{ eventLatitude, eventLongitude }}
            zoom={16}
            id={mapContainerId}
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
        <CardContent>
          <UpdateEvent />
          <DeleteEvent />
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
