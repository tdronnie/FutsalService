import create from "zustand";

interface ModalState {
  isTotalStatOpen: boolean;
  toggleTotalStatModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isTotalStatOpen: false,
  toggleTotalStatModal: () =>
    set((state) => ({ isTotalStatOpen: !state.isTotalStatOpen })),
}));

export default useModalStore;
