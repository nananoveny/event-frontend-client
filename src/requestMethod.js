import axios from "axios";
import configData from "./config.json";

const BASE_URL = configData.API_ENDPOINT;

try {
  const local = JSON.parse(localStorage.getItem("persist:root"));
  const localUser = JSON.parse(local.user);
  var userToken = localUser.currentUser.data.accessToken;
} catch (error) {
  console.log(error);
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${userToken}` },
});
