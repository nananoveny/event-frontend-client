import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { Link, useLocation } from "react-router-dom";
import { publicRequest, userRequest } from "../requestMethod";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { login } from "../redux/apiCall";
import { toast } from "react-toastify";

const Container = styled.div`
  height: 100vh;
  width: 100%;

  /* background: url("https://wallpaperaccess.com/full/99840.jpg"); */
  /* background-repeat: no-repeat; 
  background-size: cover; */
  background-color: #ffe8ed;
  object-fit: cover;
`;

const Wrapper = styled.div`
  /* height: 100%; */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 20px;
  margin-top: 0;
  align-content: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 500px;
  padding: 12px;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
  border-radius: 10px;
  border: 1px;
`;
const Select = styled.select`
  width: 500px;
  padding: 12px;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
  border-radius: 10px;
  border: 1px;
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: ${(props) => props.inputColor};
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const InfoForm = () => {
  const user = useSelector((state) => state.user.currentUser);

  const [decoded1, setDecoded1] = useState([]);
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("persist:root"));
    const localUser = JSON.parse(local?.user);
    const userToken = localUser.currentUser?.data.accessToken;
    if (userToken) {
      const decoded = jwt_decode(userToken);
      setDecoded1(decoded);
    }
    // navigate("/login");
  }, []);

  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("false");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [birthday, setBirthDay] = useState("");
  // const [events, setEvents] = [...id];
  const [listIdEvents, setListIdEvents] = useState([]);
  const hangleChange = (e) => {
    const value = e.target.value;
    setGender(value);
  };
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [singleEvent, setSingleEvent] = useState([]);
  useEffect(() => {
    const getSingleEvent = async () => {
      try {
        const res = await publicRequest.get("/event/" + id);
        setSingleEvent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleEvent();
  }, [id]);

  const isJoined = () => listIdEvents.find((event) => event === id);

  const fetchListEvent = async () => {
    const response = await userRequest.get("/auth/profile");
    setListIdEvents(response.data.data.events);
  };

  useEffect(() => {
    fetchListEvent();
  }, [user]);

  const userinfo = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    email: email,
    password: password,
    repassword: repassword,
    address: address,
    phoneNumber: phoneNumber,
    idNumber: idNumber,
    birthday: birthday,
  };

  //regisandjoin
  const handleCreateJoin = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/auth/register/", userinfo);
      await login(dispatch, { email: email, password: password });
      window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  };
  //join
  const handleJoin = async (e) => {
    e.preventDefault();
    try {
      await userRequest.put("/event/join/" + id, {
        userId: decoded1._id,
      });
      toast.success("Join successfully");
      fetchListEvent();
    } catch (error) {
      if (error.response.data.hasOwnProperty("errors")) {
        const msg = error.response.data.errors.message;
        if (msg) {
          toast.warn(msg);
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          {user ? (
            <FormContainer>
              <Title>{singleEvent.data?.title}</Title>
              <Title>Tham gia ngay đi ạ!</Title>

              <Form>
                <LeftForm>
                  {isJoined() ? (
                    <Button
                      onClick={handleJoin}
                      disabled={isJoined()}
                      inputColor="red"
                    >
                      Đã tham gia
                    </Button>
                  ) : (
                    <Button
                      onClick={handleJoin}
                      disabled={isJoined()}
                      inputColor="teal"
                    >
                      Tham gia
                    </Button>
                  )}
                </LeftForm>
                <RightForm>
                  <img src={singleEvent.data?.image} alt="" height="100%" />
                  <span>Ngày: {singleEvent.data?.date}</span>
                  <span>Địa điểm: {singleEvent.data?.placeHost}</span>
                  <span>Địa chỉ: {singleEvent.data?.address}</span>
                  <span>Số lượng: {singleEvent.data?.quantity}</span>
                  <span>
                    Thời gian:{" "}
                    {new Date(singleEvent.data?.timeStart).toLocaleTimeString(
                      [],
                      {
                        timeStyle: "short",
                      }
                    )}{" "}
                    -{" "}
                    {new Date(singleEvent.data?.timeFinish).toLocaleTimeString(
                      [],
                      {
                        timeStyle: "short",
                      }
                    )}
                  </span>
                  <span>Ngày: {singleEvent.data?.date}</span>
                </RightForm>
              </Form>
            </FormContainer>
          ) : (
            <FormContainer>
              <Title>{singleEvent.data?.title}</Title>
              <Title>Bạn chưa có tài khoản? Hãy đăng ký ngay!</Title>

              <Form>
                <LeftForm>
                  <Input
                    type="text"
                    placeholder="Họ"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Tên"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Select name="" id="" onChange={hangleChange}>
                    <option value="false">Nam</option>
                    <option value="true">Nữ</option>
                  </Select>
                  <Input
                    type="text"
                    placeholder="Số điện thoại"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    onChange={(e) => setRePassword(e.target.value)}
                  />

                  <Input
                    type="text"
                    placeholder="Địa chỉ"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Cmnd"
                    onChange={(e) => setIdNumber(e.target.value)}
                  />

                  <Input
                    placeholder="YYYY/MM/DD"
                    type="text"
                    onChange={(e) => setBirthDay(e.target.value)}
                  />
                  {/* <Link to="/register"> */}
                  <Button onClick={handleCreateJoin}>Tham gia</Button>
                  {/* </Link> */}
                </LeftForm>
                <RightForm>
                  <img src={singleEvent.data?.image} alt="" height="100%" />
                  <span>Ngày: {singleEvent.data?.date}</span>
                  <span>Địa điểm: {singleEvent.data?.placeHost}</span>
                  <span>Địa chỉ: {singleEvent.data?.address}</span>
                  <span>Số lượng: {singleEvent.data?.quantity}</span>
                  <span>
                    Thời gian:{" "}
                    {new Date(singleEvent.data?.timeStart).toLocaleTimeString(
                      [],
                      {
                        timeStyle: "short",
                      }
                    )}{" "}
                    -{" "}
                    {new Date(singleEvent.data?.timeFinish).toLocaleTimeString(
                      [],
                      {
                        timeStyle: "short",
                      }
                    )}
                  </span>
                  <span>Ngày: {singleEvent.data?.date}</span>
                </RightForm>
              </Form>
            </FormContainer>
          )}
          {/* <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@lama.dev</Text>
            <Text>sales@lama.dev</Text>
          </AddressItem>
        </AddressContainer> */}
        </Wrapper>
      </Container>
    </>
  );
};

export default InfoForm;
