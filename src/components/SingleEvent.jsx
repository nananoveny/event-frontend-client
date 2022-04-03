import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getUrlImg } from "../utils/helpers.util";

const Container = styled.div`
  width: 100%;
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 350px;
`;

const Event = styled.span`
  font-weight: bold;
  font-size: 30px;
  /* @media only screen and (max-width: 480px) {
    font-size: 30px;
  } */
  /* display: flex;
  flex-wrap: wrap; */
  text-align: center;
  max-width: 350px;
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const SingleEvent = () => {
  const location = useLocation();
  console.log(location);
  const { singleitem } = location.state;
  const id = location.pathname.split("/")[2];
  console.log(id);

  //   const [event, setEvent] = useState([]);

  //   useEffect(() => {
  //     const getEvent = async () => {
  //       try {
  //         const res = await publicRequest.get("/event/" + id);
  //         console.log(res.data);

  //         setEvent(res.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getEvent();
  //   }, [id]);
  //   console.log(singleitem);
  return (
    <>
      <Navbar />
      <Container>
        <img src={getUrlImg(singleitem.image)} alt="" height="300px" />
        <img src={singleitem.qrImage} alt="" width="200px" />

        <Type>Còn chỗ</Type>
        <List>
          <ListItem>Ngày: {singleitem.date}</ListItem>
          <ListItem>Địa điểm: {singleitem.placeHost}</ListItem>
          <ListItem>Địa chỉ: {singleitem.address}</ListItem>
          <ListItem>Số lượng: {singleitem.quantity}</ListItem>
          <ListItem>
            Thời gian:{" "}
            {new Date(singleitem.timeStart).toLocaleTimeString([], {
              timeStyle: "short",
            })}{" "}
            -{" "}
            {new Date(singleitem.timeFinish).toLocaleTimeString([], {
              timeStyle: "short",
            })}
          </ListItem>
        </List>
        <PriceContainer>
          <Event>{singleitem.title}</Event>
        </PriceContainer>
        {/* <Link to={{ pathname: `/event/${iteminfo._id}` }}>
        <Button>Tham gia ngay</Button>
      </Link> */}
      </Container>
    </>
  );
};

export default SingleEvent;
