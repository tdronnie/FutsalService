import create from "zustand";

interface TacticalBoardStoreType {
  horizonPlayers: {
    x: number;
    y: number;
  }[];
  verticalPlayers: {
    x: number;
    y: number;
  }[];

  setHorizonPosition: (index: number, x: number, y: number) => void;
  setVerticalPosition: (index: number, x: number, y: number) => void;
}

// 브라우저의 너비, 높이
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// 가로화면 플레이어 default 위치
const horizonPlayers = [
  // A team
  {
    x: screenWidth < 577 ? screenWidth * 0.27 : 576 * 0.27,
    y: screenHeight * 0.25,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.65 : 576 * 0.65,
    y: screenHeight * 0.25,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.1 : 576 * 0.1,
    y: screenHeight * 0.35,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.48 : 576 * 0.48,
    y: screenHeight * 0.35,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.8 : 576 * 0.8,
    y: screenHeight * 0.35,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.48 : 576 * 0.48,
    y: screenHeight * 0.11,
  },
  // B team
  {
    x: screenWidth < 577 ? screenWidth * 0.25 : 576 * 0.25,
    y: screenHeight * 0.65,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.65 : 576 * 0.65,
    y: screenHeight * 0.65,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.1 : 576 * 0.1,
    y: screenHeight * 0.55,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.48 : 576 * 0.48,
    y: screenHeight * 0.55,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.8 : 576 * 0.8,
    y: screenHeight * 0.55,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.48 : 576 * 0.48,
    y: screenHeight * 0.777,
  },
  // ball
  {
    x: screenWidth < 577 ? screenWidth * 0.48 : 576 * 0.48,
    y: screenHeight * 0.44,
  },
];

// 세로화면 플레이어 default 위치
const verticalPlayers = [
  // A team
  {
    x: screenWidth < 577 ? screenWidth * 0.28 : 576 * 0.28,
    y: screenWidth < 577 ? screenWidth * 0.2 : 576 * 0.2,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.28 : 576 * 0.28,
    y: screenWidth < 577 ? screenWidth * 0.4 : 576 * 0.4,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.38 : 576 * 0.38,
    y: screenWidth < 577 ? screenWidth * 0.1 : 576 * 0.1,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.38 : 576 * 0.38,
    y: screenWidth < 577 ? screenWidth * 0.31 : 576 * 0.31,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.38 : 576 * 0.38,
    y: screenWidth < 577 ? screenWidth * 0.5 : 576 * 0.5,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.11 : 576 * 0.11,
    y: screenWidth < 577 ? screenWidth * 0.31 : 576 * 0.31,
  },
  // B team
  {
    x: screenWidth < 577 ? screenWidth * 0.67 : 576 * 0.67,
    y: screenWidth < 577 ? screenWidth * 0.2 : 576 * 0.2,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.67 : 576 * 0.67,
    y: screenWidth < 577 ? screenWidth * 0.4 : 576 * 0.4,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.57 : 576 * 0.57,
    y: screenWidth < 577 ? screenWidth * 0.1 : 576 * 0.1,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.57 : 576 * 0.57,
    y: screenWidth < 577 ? screenWidth * 0.31 : 576 * 0.31,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.57 : 576 * 0.57,
    y: screenWidth < 577 ? screenWidth * 0.5 : 576 * 0.5,
  },
  {
    x: screenWidth < 577 ? screenWidth * 0.84 : 576 * 0.84,
    y: screenWidth < 577 ? screenWidth * 0.31 : 576 * 0.31,
  },
  // ball
  {
    x: screenWidth < 577 ? screenWidth * 0.48 : 576 * 0.48,
    y: screenWidth < 577 ? screenWidth * 0.31 : 576 * 0.31,
  },
];

// Zustand 스토어 생성 및 타입 적용
const TacticalBoardStore = create<TacticalBoardStoreType>((set) => ({
  horizonPlayers: horizonPlayers,
  verticalPlayers: verticalPlayers,
  setHorizonPosition: (index, x, y) =>
    set((state) => ({
      horizonPlayers: state.horizonPlayers.map((p, i) =>
        i === index ? { ...p, x, y } : p
      ),
    })),
  setVerticalPosition: (index, x, y) =>
    set((state) => ({
      verticalPlayers: state.verticalPlayers.map((p, i) =>
        i === index ? { ...p, x, y } : p
      ),
    })),
}));

export default TacticalBoardStore;
