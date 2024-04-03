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
      throw new Error("경기 상세 호출 에러");
    });
};

// 경기에 포함된 모든 데이터 조회
export const fetchAllMatchDataApi = async (
  match_id: number
): Promise<matchDetailAllDataPropsType> => {
  return publicRequest
    .get(`social/game/${match_id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("경기 모든 데이터 호출 에러");
    });
};

// 경기 목록 페이지 정보 조회
export const fetchMatchList = async (
  matchFilterData: matchFilterDataType
): Promise<matchDetailPropsDataType[]> => {
  //기본 url
  let filterUrl = `social/game/filter?startDate=${matchFilterData.date}`;
  // gender 추가
  if (matchFilterData.gender) {
    filterUrl += `&gender=${matchFilterData.gender}`;
  } // playernumber 추가
  if (matchFilterData.playerNumber) {
    filterUrl += `&playernumber=${matchFilterData.playerNumber}`;
  } // level 추가
  if (matchFilterData.level) {
    filterUrl += `&level=${matchFilterData.level}`;
  }

  return publicRequest
    .get(filterUrl)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("경기 목록 호출 에러");
    });
};

// 경기 생성 API
export const fetchMatchCreate = async (matchData: matchCreateType) => {
  return publicRequest
    .post(`social/game/create`, matchData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("경기 생성 호출 에러");
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

// 게임 팀 데이터 조회
export const teamFeedbackApi = async (matchId: number) => {
  return publicRequest
    .get(`social/game/data/team/${matchId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("team feedback api 호출 에러");
    });
};

// 해당 경기의 하이라이트 목록
export const fetchHighlightApi = async (matchId: number) => {
  return publicRequest
    .get(`social/highlight/${matchId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("하이라이트 목록 api 호출 에러");
    });
};

// 해당 경기의 선수 데이터 요청 API
export const fetchPlayersDataApi = async (matchId: number) => {
  return publicRequest
    .get(`social/game/data/player/${matchId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("선수 데이터 api 호출 에러");
    });
};

// PUT 요청 API
// 분석할 영상 업로드
export const videoUploadApi = async (videoUploadData: FormData) => {
  return publicRequest
    .put(`social/game/upload`, videoUploadData)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("분석할 영상 업로드 api 에러");
    });
};

// 경기 분석 요청 API
export const calcRequestApi = async (match_id: number) => {
  return publicRequest
    .post(`social/game/calculate/${match_id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw new Error("경기 분석 요청 에러");
    });
};
