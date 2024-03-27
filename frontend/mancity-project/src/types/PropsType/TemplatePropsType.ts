interface UserInfoPropsType {
  userInfoData: {
    id: number;
    image: string | null;
    nickName: string;
    email: string;
    height: number;
    weight: number;
    foot: number;
    player: boolean;
  };
}

interface ProfilePropsType {
  profileData: {
    id: number;
    image: string;
    nickName: string;
    // club
    club: {
      id: number;
      name: string;
      emblem: string;
      memberCnt: number;
      score: number;
      region: string;
    };
    follower: number;
    following: number;
    // 평균 스탯
    mainStat: {
      goalDecision: number;
      pass: number;
      speed: number;
      distanceCovered: number;
      defense: number;
    };
    // 마지막 한 경기 스탯
    lastStat: {
      goalDecision: number;
      pass: number;
      speed: number;
      distanceCovered: number;
      defense: number;
    };
    // 용병 여부
    player: boolean;
  };
}
