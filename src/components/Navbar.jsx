import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
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
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  /* margin-left: 50px; */
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>SeventEvents</Logo>
          <Menu>
            {/* <MenuItem></MenuItem> */}
            <MenuItem>Trang chủ</MenuItem>
            <MenuItem>Tham gia bằng QR Code</MenuItem>
            <MenuItem>Đăng ký</MenuItem>
            <MenuItem>Về chúng tôi</MenuItem>
            <MenuItem>Liên hệ</MenuItem>
          </Menu>
        </Left>
        {/* <Button>CLICK TO CHOOSE THE EVENT</Button> */}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
