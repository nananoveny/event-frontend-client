import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import EventCard from "./components/EventCard";
import Event from "./components/Event";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import SingleEvent from "./components/SingleEvent";
import Form from "./components/InfoForm";
import InfoForm from "./components/InfoForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <Register />}
          />

          {/* <Route exact path="/register" element={<Register />} /> */}

          <Route path="events" element={<Event />} />
          <Route path="event/:eventID" element={<SingleEvent />} />
          <Route path="event/register/:eventID" element={<InfoForm />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
    // <EventList />
    // <Container>
    //   <Event />
    // </Container>
    // <InfoForm />
  );
};

export default App;
