import React from "react";
import styled from "styled-components";
// import Woman from '../img/woman.png'
import AnimatedShapes from "./AnimatedShapes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 20px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 15px;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;

    padding: 5px;
    font-size: 15px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>
          Chào mừng các bạn đến với <Logo>SeventEvents</Logo>
        </Title>
        <Desc>
          Nhanh chân kiếm cho mình một suất tham gia sự kiện bất kỳ nào!
        </Desc>
        <Info>
          <Link to="/events">
            <Button>Tham gia</Button>
          </Link>
          <Contact>
            <Phone>Liên hệ +84 352 797 366</Phone>
            <ContactText>Để báo cáo sự cố hoặc giải đáp thắc mắc</ContactText>
          </Contact>
        </Info>
      </Left>
      {/* <Right><Image src={Woman}/></Right> */}
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
