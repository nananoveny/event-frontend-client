import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const EventCard = ({ iteminfo }) => {
  return (
    <Container>
      <PriceContainer>
        <Event>{iteminfo.title}</Event>
      </PriceContainer>
      <img src={iteminfo.qrImage} alt="" />
      <Type>Còn chỗ</Type>
      <List>
        <ListItem>Ngày: {iteminfo.date}</ListItem>
        <ListItem>Địa điểm:{iteminfo.placeHost}</ListItem>
        <ListItem>Số lượng:{iteminfo.quantity}</ListItem>
        <ListItem>Thời gian: {iteminfo.timeStart}</ListItem>
      </List>
      <Button>Tham gia ngay</Button>
    </Container>
  );
};

export default EventCard;
