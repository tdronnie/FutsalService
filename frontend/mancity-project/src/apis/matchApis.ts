import { publicRequest } from "@/hooks/requestMethods";

export const fetchMatchDetail = async (
  match_id: number
): Promise<matchDetailPropsDataType> => {
  return publicRequest
    .get(`social/game/${match_id}`)
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