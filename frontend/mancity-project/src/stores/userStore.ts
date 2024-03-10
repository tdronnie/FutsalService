import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { userType } from '../types/userType';

const useUserStore = create<userType>(
  devtools(
    persist(
      (set) => ({
        userData: {
          id: 0,
          email: "",
          password: "",
          nickname: "",
          birth: 0,
          gender: 0,
          height: 0,
          weight: 0,
          mainFoot: "",
        },
        setUser: (newData) => set((state) => ({
          userData: { ...state.userData, ...newData },
        })),
      }),
      {
        name: 'userStore', // localStorage에 저장될 이름
      }
    )
  )
);

export default useUserStore;
