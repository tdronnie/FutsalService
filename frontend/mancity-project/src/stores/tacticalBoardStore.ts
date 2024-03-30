import create from "zustand";

interface TacticalBoardStoreType {
  players: {
    x: number;
    y: number;
  }[];

  setPosition: (index: number, x: number, y: number) => void;
}

// 브라우저의 너비, 높이
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const initialPlayers = [
  // A team
  { x: screenWidth * 0.2, y: screenHeight * 0.2 },
  { x: screenWidth * 0.7, y: screenHeight * 0.2 },
  { x: screenWidth * 0.1, y: screenHeight * 0.3 },
  { x: screenWidth * 0.47, y: screenHeight * 0.3 },
  { x: screenWidth * 0.8, y: screenHeight * 0.3 },
  { x: screenWidth * 0.47, y: screenHeight * 0.08 },
  // B team
  { x: screenWidth * 0.2, y: screenHeight * 0.5 },
  { x: screenWidth * 0.7, y: screenHeight * 0.5 },
  { x: screenWidth * 0.1, y: screenHeight * 0.4 },
  { x: screenWidth * 0.47, y: screenHeight * 0.4 },
  { x: screenWidth * 0.8, y: screenHeight * 0.4 },
  { x: screenWidth * 0.47, y: screenHeight * 0.61 },
];

// Zustand 스토어 생성 및 타입 적용
const TacticalBoardStore = create<TacticalBoardStoreType>((set) => ({
  players: initialPlayers,
  setPosition: (index, x, y) =>
    set((state) => ({
      players: state.players.map((p, i) => (i === index ? { ...p, x, y } : p)),
    })),
}));

export default TacticalBoardStore;
