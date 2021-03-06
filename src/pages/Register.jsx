import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../redux/apiCall";
// import "./login.scss";
import styled, { css } from "styled-components";
import Navbar from "../components/Navbar";
const Container = styled.div`
  height: 100vh;
  display: flex;
  /* align-items:  */
  /* flex-wrap: wrap; */
  /* flex: 1; */
  justify-content: space-around;
  background-color: #ffcccc;
`;
const H1 = styled.h1`
  margin-top: 20px;
  /* ... */
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
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
const Select = styled.select`
  width: 240px;
  height: 40px;
  margin: 10px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px;
  @media only screen and (max-width: 480px) {
    width: 190px;
    height: 30px;
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
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { email, password });
  // };

  return (
    <>
      <Navbar />
      <IntoShape />
      <Container className="login">
        <Form>
          <H1>????ng k?? t??i kho???n</H1>
          <Input
            type="text"
            placeholder="H???"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="T??n"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="CMND"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Ng??y sinh"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select name="" id="">
            <option value="false">Nam</option>
            <option value="true">N???</option>
          </Select>
          <Input
            type="text"
            placeholder="S??? ??i???n tho???i"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="?????a ch???"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="M???t kh???u"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nh???p l???i m???t kh???u"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>????ng k??</Button>
          {/* {error && <span>Wrong email or password!</span>} */}
        </Form>
      </Container>
    </>
  );
};

export default Register;
