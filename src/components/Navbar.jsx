import React, { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const Container = styled.div`
  height: 70px;
  /* background-color: #c0fff5; */
  z-index: -1;
  /* position: fixed; */
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  /* margin-left: 50px; */
  @media only screen and (max-width: 480px) {
    /* display: none; */
    z-index: 99;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 10px;
    margin-right: 20px;
    color: black;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: #ff0202;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  /* cursor: pointer; */
  z-index: 999;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [decoded1, setDecoded1] = useState([]);

  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("persist:root"));
    if (local) {
      const localUser = JSON.parse(local?.user); //Sai o day ney
      const userToken = localUser.currentUser?.data.accessToken;
      if (userToken) {
        const decoded = jwt_decode(userToken);
        setDecoded1(decoded);
      }
    }
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>SeventEvents</Logo>
          </Link>
          <Menu>
            {/* <MenuItem></MenuItem> */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem>Trang chủ</MenuItem>
            </Link>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <MenuItem>Tham gia bằng QR Code</MenuItem>
            </Link>

            {/* <MenuItem>Về chúng tôi</MenuItem> */}
            <MenuItem>Liên hệ</MenuItem>
            {!user && (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>Đăng nhập</MenuItem>
              </Link>
            )}
            {user && (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem onClick={logout}>Đăng xuất</MenuItem>
              </Link>
            )}
          </Menu>
        </Left>

        {user && <Button>Xin chào {decoded1.firstName} </Button>}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
