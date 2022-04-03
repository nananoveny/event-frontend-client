import React from "react";
import styled from "styled-components";
import EventCard from "./EventCard";
import { publicRequest } from "../requestMethod";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* cursor: pointer; */
  /* flex-direction: column; */
  /* object-fit: cover; */
  /* @media only screen and (max-width: 480px) {
    flex-direction: column;
    position: absolute;
    flex-wrap: wrap;
  } */
  flex-wrap: wrap;
  background-color: #f6f6f6;
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
    <>
      <Navbar />
      <Container>
        {events.data?.map((item) => (
          <EventCard iteminfo={item} key={item._id} />
        ))}
      </Container>
    </>
  );
};

export default Event;
