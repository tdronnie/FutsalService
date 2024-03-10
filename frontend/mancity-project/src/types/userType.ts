export type userType = {
  userData: {
    id: number;
    email: string;
    password: string;
    nickname: string;
    birth: number;
    gender: number;
    height: number;
    weight: number;
    mainFoot: string;
  };
  setUser: (newData: Partial<userType['userData']>) => void;
};