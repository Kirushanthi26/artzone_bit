import React from "react";
import EventItem from "./EventItem";

const EventsList = (props) => {
  return (
    <ul className="flex">
      {props.eventData.map((eventItem, index) => (
        <EventItem
          key={eventItem.eid}
          id={eventItem.eid}
          eventName={eventItem.eventName}
          eventDate={eventItem.eventDate}
          eventTime={eventItem.eventTime}
          eventDescription={eventItem.eventDescription}
          mapLocation={eventItem.mapLocation}
          index={index}
        />
      ))}
    </ul>
  );
};

export default EventsList;
