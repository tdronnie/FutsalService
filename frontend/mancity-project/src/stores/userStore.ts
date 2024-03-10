import create from "zustand";
import { userType } from "../types/userType";

const useUserStore = create<userType>((set) => ({
  userData: {
    userNo: 0,
    email: "",
    password: "",
    nickname: "",
    birth: 0,
    gender: 0,
    stature: 0,
    weight: 0,
    mainFoot: "",
  },
  setUser: (newData: Partial<userType>) =>
    set((prev) => ({
      userData: { ...prev.userData, ...newData },
    })),
}));

export default useUserStore;
