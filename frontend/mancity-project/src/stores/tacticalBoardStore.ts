import create from "zustand";

interface TacticalBoardStoreType {
  players: {
    x: number;
    y: number;
  }[];

  setPosition: (index: number, x: number, y: number) => void;
}

// 브라우저의 너비, 높이의 절반
const screenWidth = window.innerWidth / 2 - 15;
// const screenHeight = window.innerHeight ;

// 세로화면 플레이어 default 위치
const players = [
  // A team
  {
    x: screenWidth * 2 < 577 ? screenWidth - 80 : 195,
    y: 140,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth + 80 : 350,
    y: 140,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth - 125 : 150,
    y: 220,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth : 275,
    y: 220,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth + 125 : 400,
    y: 220,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth : 275,
    y: 60,
  },
  // // B team
  {
    x: screenWidth * 2 < 577 ? screenWidth - 80 : 195,
    y: 380,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth + 80 : 350,
    y: 380,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth - 125 : 150,
    y: 300,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth : 275,
    y: 300,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth + 125 : 400,
    y: 300,
  },
  {
    x: screenWidth * 2 < 577 ? screenWidth : 275,
    y: 450,
  },
  // // ball
  {
    x: screenWidth * 2 < 577 ? screenWidth : 275,
    y: 258,
  },
];

// Zustand 스토어 생성 및 타입 적용
const TacticalBoardStore = create<TacticalBoardStoreType>((set) => ({
  players: players,
  setPosition: (index, x, y) =>
    set((state) => ({
      players: state.players.map((p, i) => (i === index ? { ...p, x, y } : p)),
    })),
}));

export default TacticalBoardStore;
