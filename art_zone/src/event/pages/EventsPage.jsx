import React from "react";
import EventsList from "../components/EventsList";
import { Divider } from "@mui/material";

const EventsPage = () => {
  const Dummy_event = [
    {
      eid: 1,
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.694495394688!2d79.85573317403102!3d6.927073718343979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259113a63055d%3A0x8f4e038124048b42!2sColombo%20Lotus%20Tower!5e0!3m2!1sen!2slk!4v1710270254116!5m2!1sen!2slk",
      eventAddress: "AC6, Colombo 01000",
      eventName: "kiru's art exbition",
      eventDate: "26-12-2024",
      eventTime: "02.30pm",
      eventDescription: "modern art exbition at Colombo Lotus Tower",
    },
    {
      eid: 2,
      mapLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.738005887736!2d79.85744450770503!3d6.912305060041056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597027460e0b%3A0x4e35b8659886ff1f!2sNelum%20Pokuna%20Theatre!5e0!3m2!1sen!2slk!4v1710272713433!5m2!1sen!2slk",
      eventAddress: "110 Ananda Coomaraswamy Mawatha, Colombo 00700",
      eventName: "kiru's art exbition",
      eventDate: "26-12-2024",
      eventTime: "02.30pm",
      eventDescription: "modern art exbition at Nelum Pokuna Theatre",
    },
  ];

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
