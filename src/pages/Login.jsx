import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCall";
// import "./login.scss";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcccc;
  /* z-index: -1; */
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
  @media only screen and (max-width: 480px) {
    clip-path: polygon(87% 0, 100% 0%, 100% 100%, 55% 100%);
    z-index: 1;
  }
`;
const H1 = styled.h1`
  /* ... */
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    z-index: 1;
  }
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  margin: 10px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px;
  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 20px;
  }
`;
const Button = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  background-color: purple;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 20px;
  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 30px;
  }
`;
const Span = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 10px;
`;
const Span1 = styled.span`
  font-size: 15px;
  color: #080707;
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 30px;
    font-size: 12px;
  }
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <>
      <Navbar />
      <IntoShape />
      <Container className="login">
        <Form>
          <H1>Đăng nhập</H1>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          <Link to="/register">
            <Span1>Đăng ký tài khoản ngay!</Span1>
          </Link>
          {error && <span>Wrong email or password!</span>}
        </Form>
      </Container>
    </>
  );
};

export default Login;
