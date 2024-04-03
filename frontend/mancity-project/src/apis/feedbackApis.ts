import { publicRequest } from "@/hooks/requestMethods";

// GET 요청 API
// 팀피드백
export const fetchTeamFeedbacksApi = async (matchId: number) => {
  try {
    const response = await publicRequest.get(`social/game/feedback/team/${matchId}`);
    // 테스트콘솔
    // console.log('팀피드백:',response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("팀피드백 호출 api 에러");
  }
};

// 개인피드백
export const fetchPersonalFeedbacksApi = async (matchId: number, playerId: number) => {
    try {
      const response = await publicRequest.get(`social/game/feedback/player/${matchId}/${playerId}`);
      // 테스트콘솔
      // console.log('개인피드백:',response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("개인피드백 호출 api 에러");
    }
  };