import { publicRequest } from "@/hooks/requestMethods";

// 경기 상세 페이지 정보 조회
export const fetchMatchDetail = async (
  match_id: number
): Promise<matchDetailPropsDataType> => {
  return publicRequest
    .get(`social/game/detail/${match_id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("경기 호출 에러");
    });
};

export const fetchMatchCreate = async (matchData: matchCreateType) => {
  return publicRequest
    .post(`social/game/create`, matchData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("경기 호출 에러");
    });
};

// main page
export const MainPageApi = async (userId: number) => {
  return publicRequest
    .get(`user/main/${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("main page api 호출 에러");
    });
};
