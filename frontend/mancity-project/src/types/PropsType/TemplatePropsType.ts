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
    image: string | null;
    nickName: string;
    // 팔로우
    follower: number;
    following: number;
    // club
    club: string | null;
    clubId: number | null;
    // 용병 여부
    player: boolean;
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
  };
}
