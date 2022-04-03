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
  /* ... */
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  margin: 10px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px;
`;
const Select = styled.select`
  width: 240px;
  height: 40px;
  margin: 10px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px;
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
          <H1>Đăng ký tài khoản</H1>
          <Input
            type="text"
            placeholder="Họ"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Tên"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="CMND"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Ngày sinh"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select name="" id="">
            <option value="false">Nam</option>
            <option value="true">Nữ</option>
          </Select>
          <Input
            type="text"
            placeholder="Số điện thoại"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Địa chỉ"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Nhập lại mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Đăng ký</Button>
          {/* {error && <span>Wrong email or password!</span>} */}
        </Form>
      </Container>
    </>
  );
};

export default Register;
