import { useState } from "react";
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

// Zustand 스토어 생성 및 타입 적용
const TacticalBoardStore = create<TacticalBoardStoreType>((set) => ({
  players: initialPlayers,
  setPosition: (index, x, y) =>
    set((state) => ({
      players: state.players.map((p, i) => (i === index ? { ...p, x, y } : p)),
    })),
}));

export default TacticalBoardStore;
