import SearchBar from "./SearchBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchBar> = {
  title: "Components/molecules/SearchBar",
  tags: ["autodocs"],
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

const matchPlace: matchPlace[] = [
  { value: 1, label: "서울" },
  { value: 2, label: "경기" },
  { value: 3, label: "광주" },
  { value: 4, label: "대구" },
  { value: 5, label: "대전" },
  { value: 6, label: "인천" },
  { value: 7, label: "강원" },
  { value: 8, label: "경상" },
  { value: 9, label: "부산" },
  { value: 10, label: "세종" },
  { value: 11, label: "울산" },
  { value: 12, label: "전라" },
  { value: 13, label: "제주" },
  { value: 14, label: "충청" },
];

export const Default: Story = {
  args: {
    contents: matchPlace,
  },
};
