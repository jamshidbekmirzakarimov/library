import axios from "axios";

const instance = axios.create({
  baseURL: "https://675707f0c0a427baf94b701c.mockapi.io",
  timeout: 10000,
});

export { instance };