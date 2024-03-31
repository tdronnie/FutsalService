// GET 요청 API
// 유저 정보
export const fetchUserApi = async (userId: number) => {
  try {
    const response = await publicRequest.get(`user/${userId}`);
    console.log(response.data);
    return response.data; // 데이터 반환
  } catch (error) {
    console.log(error);
    throw new Error("유저 정보 api 에러");
  }
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

// total stat
export const totalStatApi = async (userId: number) => {
  return publicRequest
    .get(`user/stat/total/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("total stat api 에러");
    });
};

//follow list
export const followPageApi = async (userId: number) => {
  return publicRequest
    .get(`user/follow/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("follow list api 에러");
    });
};

//is follow
export const isFollowDataApi = async (followData: followDataType) => {
  return publicRequest
    .get(
      `user/follow/check?sender=${followData.senderId}&receiver=${followData.receiverId}`
    )
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("is follow api 에러");
    });
};

// POST 요청 API
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

// 팔로잉
export const followApi = async (followData: followDataType) => {
  return publicRequest
    .post(`user/follow/send`, followData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("팔로잉 api 에러");
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

// fcm토큰 보내기
export const sendFcmTokenApi = async (fcmData: fcmDataType) => {
  return publicRequest
    .post(`user/fcm`, fcmData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("fcm 토큰 api 에러");
    });
};

// PUT 요청 API
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

// PATCH 요청 API

// DELETE 요청 API
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
