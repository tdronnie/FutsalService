import create from "zustand";

interface UploadState {
  isUpload: boolean;
  changeIsUpload: () => void;
  isStartUpload: boolean;
  changeIsStartUpload: () => void;
  isCalc: boolean;
  changeIsCalc: () => void;
}

const useIsUploadStore = create<UploadState>((set) => ({
  isUpload: false,
  isStartUpload: false,
  isCalc: false,
  changeIsUpload: () => set((state) => ({ isUpload: !state.isUpload })),
  changeIsStartUpload: () =>
    set((state) => ({ isStartUpload: !state.isStartUpload })),
  changeIsCalc: () => set((state) => ({ isCalc: !state.isCalc })),
}));

export default useIsUploadStore;
