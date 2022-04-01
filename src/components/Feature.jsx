import React from "react";
import styled from "styled-components";
// import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>{/* <Image src={App} /> */}</Left>
      <Right>
        <Title>
          {/* <b>good</b> design
          <br /> */}
          <b>Câu chuyện của chúng tôi</b>
        </Title>
        <SubTitle>
          Sevenevents đã mở cửa với sứ mệnh và tầm nhìn tạo ra sự khác biệt tích
          cực trên thế giới
        </SubTitle>
        <Desc>
          Tạo một trang web để nhằm tổ chức các sự kiện, cho phép người dùng tạo
          hoặc tham gia các sự kiện do nhiều đơn vị thực hiện. Giúp người tạo sự
          kiện có thể dễ dàng quản lý về mặt thời gian, địa điểm, số lượng người
          tham gia,… Liên kết với các công ty cho thuê mặt bằng tổ chức, áp dụng
          hình thức quét mã QR đơn giản để đáp ứng nhu cầu của cả người tổ chức
          và người tham gia.
        </Desc>
        {/* <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc> */}
        <Button>Đọc thêm</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
