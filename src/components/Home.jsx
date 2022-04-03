import styled, { css } from "styled-components";
import Contact from "./Contact";
import EventCard from "./EventCard";
import Event from "./Event";
import Feature from "./Feature";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Price from "./Price";
import Service from "./Service";
import jwt_decode from "jwt-decode";

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  /* margin-bottom: 50px; */
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  z-index: 99;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;
const Home = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;

  // window.location.reload();
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
