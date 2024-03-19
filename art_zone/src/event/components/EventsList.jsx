import React from "react";
import EventItem from "./EventItem";

const EventsList = (props) => {
  return (
    <ul className="flex flex-wrap">
      {props.eventData.map((eventItem, index) => (
        <EventItem
          key={eventItem.eid}
          id={eventItem.eid}
          eventName={eventItem.e_name}
          eventDate={eventItem.e_date}
          eventTime={eventItem.e_time}
          eventDescription={eventItem.e_description}
          eventLatitude={eventItem.e_latitude}
          eventLongitude={eventItem.e_longitude}
          index={index}
        />
      ))}
    </ul>
  );
};

export default EventsList;
