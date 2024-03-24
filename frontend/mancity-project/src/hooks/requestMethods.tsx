import axios from "axios";

const BASE_URL = "https://j10c201.p.ssafy.io/api";
// 임시로 CORS 토큰 허용
axios.defaults.withCredentials = true;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
