import axios from "axios";

const BASE_URL = "https://j10c201.p.ssafy.io/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
