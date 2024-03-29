import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface userType {
  id: number;
  email: string;
  password: string;
  nickname: string;
  birth: number;
  gender: number;
  height: number;
  weight: number;
  mainFoot: string;
  // userType에 정의된 속성들 업데이트 가능하도록 설정
  setUser: (newData: Partial<userType>) => void;
};

const useUserStore = create<userType>(
  devtools(
    persist(
      (set) => ({
        id: 0,
        email: "",
        password: "",
        nickname: "",
        birth: 0,
        gender: 0,
        height: 0,
        weight: 0,
        mainFoot: "",
        setUser: (newData) => set((state) => ({
           // 이전 상태 유지
          ...state,
          // 새로운 데이터로 업데이트
          ...newData,
        })),
      }),
      {
        // localStorage 저장 이름
        name: 'userStore',
      }
    )
  )
);

export default useUserStore;
