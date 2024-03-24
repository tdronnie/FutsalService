// import axios from "axios";

// const API_URL = "http://127.0.0.1:xxxx";
// const API_URL_FLASK = "http://127.0.0.1:xxxx";

// GET 요청 API
// POST 요청 API
// PUT 요청 API
// PATCH 요청 API
// DELETE 요청 API

import { publicRequest } from "@/hooks/requestMethods";
export const fetchCheckEmail = async (emailValue: string | number) => {
  return publicRequest
    .post(`/user/check/email`, { email: emailValue }, { withCredentials: true })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("중복된 이메일");
    });
};

export const fetchCheckNickname = async (nicknameValue: string | number) => {
  return publicRequest
    .post(
      `/user/check/nickname`,
      { nickname: nicknameValue },
      { withCredentials: true }
    )
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("중복된 닉네임");
    });
};
