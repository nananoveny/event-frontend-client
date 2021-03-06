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
import { getUrlImg } from "../utils/helpers.util";

const Container = styled.div`
  height: 100vh;
  width: 100%;

  /* background: url("https://wallpaperaccess.com/full/99840.jpg"); */
  /* background-repeat: no-repeat; 
  background-size: cover; */
  background-color: #ffe8ed;
  /* display: flex; */
  object-fit: cover;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  /* height: 100%; */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 110%;
  }
`;

const Title = styled.h2`
  margin: 20px;
  margin-top: 0;
  align-content: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    margin: 5px;
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
    /* justify-content: space-between; */
  }
`;

const LeftForm = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-top: 350px;

    /* margin-right: 0; */
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    margin-top: 330px;
    height: 50%;
    position: relative;
  }
`;

const Input = styled.input`
  width: 500px;
  padding: 12px;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px) {
    width: 200px;
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
    width: 200px;

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

  const [errors, setErrors] = useState([]);
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
        if (error.response.data.statusCode === 422) {
          setErrors(error.response.data.errors);
        } else {
          toast.error("C?? g?? ???? kh??ng ???n!");
        }
      }
    };
    getSingleEvent();
  }, [id]);

  useEffect(() => {
    errors.map((error) => {
      return toast.error(error.message);
    });
    return () => {
      setErrors([]);
    };
  }, [errors]);

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
      toast.success("Th??nh c??ng");
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
              <Title>Tham gia ngay ??i ???!</Title>

              <Form>
                {/* <LeftForm> */}

                {/* </LeftForm> */}
                <RightForm>
                  <img
                    src={getUrlImg(singleEvent.data?.image)}
                    alt=""
                    height="100%"
                  />
                  <span>?????a ??i???m: {singleEvent.data?.placeHost}</span>
                  <span>?????a ch???: {singleEvent.data?.address}</span>
                  <span>S??? l?????ng: {singleEvent.data?.quantity}</span>
                  <span>
                    S??? ng?????i ???? ????ng k??:{" "}
                    {singleEvent.data?.participantList.length}
                  </span>
                  <span>
                    Ng??y: {new Date(singleEvent.data?.date).toDateString()}
                  </span>
                  <span>
                    Th???i gian:{" "}
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
                  {isJoined() ? (
                    <Button
                      onClick={handleJoin}
                      disabled={isJoined()}
                      inputColor="red"
                    >
                      ???? tham gia
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
                </RightForm>
              </Form>
            </FormContainer>
          ) : (
            <FormContainer>
              <Title>{singleEvent.data?.title}</Title>
              <Title>B???n ch??a c?? t??i kho???n? H??y ????ng k?? ngay!</Title>

              <Form>
                <LeftForm>
                  <Input
                    type="text"
                    placeholder="H???"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="T??n"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Select name="" id="" onChange={hangleChange}>
                    <option value="false">Nam</option>
                    <option value="true">N???</option>
                  </Select>
                  <Input
                    type="text"
                    placeholder="S??? ??i???n tho???i"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="M???t kh???u"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Nh???p l???i m???t kh???u"
                    onChange={(e) => setRePassword(e.target.value)}
                  />

                  <Input
                    type="text"
                    placeholder="?????a ch???"
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
                  <Button onClick={handleCreateJoin} inputColor="teal">
                    Tham gia
                  </Button>
                  {/* </Link> */}
                </LeftForm>
                <RightForm>
                  <img
                    src={getUrlImg(singleEvent.data?.image)}
                    alt=""
                    height="100%"
                  />
                  <span>Ng??y: {singleEvent.data?.date}</span>
                  <span>?????a ??i???m: {singleEvent.data?.placeHost}</span>
                  <span>?????a ch???: {singleEvent.data?.address}</span>
                  <span>S??? l?????ng: {singleEvent.data?.quantity}</span>
                  <span>
                    Th???i gian:{" "}
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
                  <span>Ng??y: {singleEvent.data?.date}</span>
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
