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
