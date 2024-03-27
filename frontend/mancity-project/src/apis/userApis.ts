// import axios from "axios";

// const API_URL = "http://127.0.0.1:xxxx";
// const API_URL_FLASK = "http://127.0.0.1:xxxx";

// GET 요청 API
// POST 요청 API
// PUT 요청 API
// PATCH 요청 API
// DELETE 요청 API

// 이메일 중복 확인
import { publicRequest } from "@/hooks/requestMethods";
export const checkEmailApi = async (emailValue: string | number) => {
  return publicRequest
    .post(`/user/check/email`, { email: emailValue })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("이메일 중복 api 에러");
    });
};

// 닉네임 중복 확인
export const checkNicknameApi = async (nicknameValue: string | number) => {
  return publicRequest
    .post(`/user/check/nickname`, { nickName: nicknameValue })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("닉네임 중복 api 에러");
    });
};

// 회원가입
export const signupApi = async (signupData: signupApiType) => {
  return publicRequest
    .post(`user/signup`, signupData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("회원가입 api 에러");
    });
};

// 로그인
export const loginApi = async (loginData: loginApiType) => {
  return publicRequest
    .post(`user/login`, loginData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("회원가입 api 에러");
    });
};

// 유저 정보
export const fetchUserApi = async (userId: number) => {
  return publicRequest
    .get(`user/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("유저 정보 api 에러");
    });
};

// 프로필 페이지 ()
export const fetchProfileApi = async (userId: number) => {
  return publicRequest
    .get(`user/profile/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("유저 프로필 api 에러");
    });
};

// 프로필 수정
export const profileEditApi = async (profileEditData: FormData) => {
  return publicRequest
    .put(`user/update`, profileEditData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("개인정보 수정 api 에러");
    });
};

// 팔로잉
export const followApi = async (followData: followDataType) => {
  return publicRequest
    .post(`user/follow/send`, { data: followData })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("팔로잉 api 에러");
    });
};

// 언팔로우
export const unFollowApi = async (followData: followDataType) => {
  return publicRequest
    .delete(`user/follow/unfollow`, {
      data: followData,
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("언팔로잉 api 에러");
    });
};
