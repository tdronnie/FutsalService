interface signupApiType {
  email: string;
  password: string;
  nickName: string;
  birth: number;
  gender: number;
  mainFoot: number;
  height: number;
  weight: number;
}

interface loginApiType {
  email: string;
  password: string;
}

interface profileEditApiType {
  image: File[] | null;
  dto: {
    id: number;
    nickName: string;
    height: number;
    weight: number;
    foot: number;
    isPlayer: boolean;
  };
}

interface followDataType {
  senderId: number;
  receiverId: number;
}

interface followListDataType {
  followListData: {
    followers: {
      userId: number;
      nickname: string;
      profileImage: string;
      overall: number;
    }[];
    followings: {
      userId: number;
      nickname: string;
      profileImage: string;
      overall: number;
    }[];
  };
}

// 매치 생성 타입
interface matchCreateType {
  replayUrl: string;
  gender: number;
  manager: number;
  startData: Date;
  time: number;
  playerNumber: number;
  level: string;
  courtId: string;
  over: boolean;
}

interface matchDetailPropsDataType extends matchCreateType {
  gameId: number;

  highlights: string[];
  participants: {
    id: number;
    userId: number;
  }[];
  teamA: {
    goal: number;
    pass: number;
    shot: number;
    shotOnTarget: number;
  };
  teamB: {
    goal: number;
    pass: number;
    shot: number;
    shotOnTarget: number;
  };
  playersA: {
    id: number;
    nickname: string;
    speed: number;
    distanceCovered: number;
    pass: number;
    shotsOnTarget: number;
    shot: number;
    goal: number;
    assist: number;
    turnOverInOffense: number;
    turnOverInDefense: number;
  }[];
  playersB: {
    id: number;
    nickname: string;
    speed: number;
    distanceCovered: number;
    pass: number;
    shotsOnTarget: number;
    shot: number;
    goal: number;
    assist: number;
    turnOverInOffense: number;
    turnOverInDefense: number;
  }[];
}
