import { publicRequest } from "@/hooks/requestMethods";

// GET 요청 API
// 클럽리스트
export const fetchClubsApi = async () => {
  try {
    const response = await publicRequest.get(`user/club/clubs`);
    // 테스트콘솔
    // console.log('클럽:',response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("클럽리스트 정보 api 에러");
  }
};

// 클럽상세
export const fetchClubDetailApi = async (clubId: string) => {
  try {
    const response = await publicRequest.get(`user/club/${clubId}`);
    // 테스트콘솔
    console.log('클럽 상세:',response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("클럽 상세 정보 api 에러");
  }
};

// 용병리스트
export const fetchplayersApi = async () => {
  try {
    const response = await publicRequest.get(`user/players`);
    // 테스트콘솔
    // console.log('용병:',response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("용병리스트 정보 api 에러");
  }
};

// POST 요청 API
// 클럽 생성
export const createClubApi = async (clubData: FormData) => {
  return publicRequest
    .post(`user/club/create`, clubData, {
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("클럽 생성 api 에러");
    });
};
