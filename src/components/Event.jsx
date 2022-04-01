import React from "react";
import styled from "styled-components";
import EventCard from "./EventCard";
import { publicRequest } from "../requestMethod";
import { useEffect, useState } from "react";
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await publicRequest.get("/event/");
        console.log(res.data);

        setEvents(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);
  console.log(events);
  return (
    <Container>
      {events.data?.map((item) => (
        <EventCard iteminfo={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Event;
