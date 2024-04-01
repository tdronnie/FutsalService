import create from "zustand";

interface UploadState {
  isUpload: boolean;
  changeIsUpload: () => void;
  isStartUpload: boolean;
  changeIsStartUpload: () => void;
}

const useIsUploadStore = create<UploadState>((set) => ({
  isUpload: false,
  isStartUpload: false,
  changeIsUpload: () => set((state) => ({ isUpload: !state.isUpload })),
  changeIsStartUpload: () =>
    set((state) => ({ isStartUpload: !state.isStartUpload })),
}));

export default useIsUploadStore;
