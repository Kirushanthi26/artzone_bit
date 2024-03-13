import React from "react";
import EventsList from "../components/EventsList";
import { Divider } from "@mui/material";

const Dummy_event = [
  {
    eid: 1,
    mapLocation:{
      lat: 6.9273044588293065,
      lng: 79.8583383153592,
    },
    eventAddress: "AC6, Colombo 01000",
    eventName: "kiru's art exbition",
    eventDate: "26-12-2024",
    eventTime: "02.30pm",
    eventDescription: "modern art exbition at Colombo Lotus Tower",
  },
  {
    eid: 2,
    mapLocation:{
      lat: 6.911229210936746,
      lng: 79.86339307044005,
    },
    eventName: "kiru's art exbition",
    eventDate: "26-12-2024",
    eventTime: "02.30pm",
    eventDescription: "modern art exbition at Nelum Pokuna Theatre",
  },
];

const EventsPage = () => {
  return (
    <div>
      <h2 className="text-3xl capitalize font-title font-semibold">
        My Events
      </h2>
      <Divider />

      <h3 className="text-3xl capitalize font-title font-semibold mt-8">
        Events List
      </h3>
      <Divider />
      <EventsList eventData={Dummy_event} />
    </div>
  );
};

export default EventsPage;
