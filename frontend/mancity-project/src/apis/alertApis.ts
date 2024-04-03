import { publicRequest } from "@/hooks/requestMethods";

// POST 요청 API
// 매치 참가 답장
export const gameResponseApi = async (participateRequestId: number) => {
    return publicRequest
      .post(`social/participant/response`, {participateRequestId, response:true}, {
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        throw new Error("매치 참가 답장 api 에러");
      });
  };

// 매치 요청 답장
export const gameSuggestResponseApi = async (participateSuggestId: number) => {
    return publicRequest
      .post(`social/participant/suggest/reply`, {participateSuggestId, response:true}, {
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        throw new Error("매치 요청 답장 api 에러");
      });
  };

  // 클럽 가입 답장
export const clubResponseApi = async (joinRequestId: number) => {
    return publicRequest
      .post(`user/clubMember/joinRes`, {joinRequestId, response:true}, {
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        throw new Error("클럽 가입 답장 api 에러");
      });
  };