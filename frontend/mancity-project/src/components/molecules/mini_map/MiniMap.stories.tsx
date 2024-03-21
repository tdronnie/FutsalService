import MiniMap from "@/components/molecules/mini_map/MiniMap";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MiniMap> = {
  title: "Components/molecules/MiniMap",
  tags: ["autodocs"],
  component: MiniMap,
  // 내용
  parameters: {
    componentSubtitle: `
    kakaomap을 사용합니다.`,
  },
  argTypes: {
    lat: {
      description: "위도를 설정합니다",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "35.2037466" },
      },
    },
    lng: {
      description: "경도를 설정합니다.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "126.8143846" },
      },
    },
    address: {
      description: "주소를 설정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "광주시 광산구 장덕동 82-3" },
      },
    },
    tel: {
      description: "전화번호를 설정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "062-951-9876" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MiniMap>;

export const Shinhwa: Story = {
  args: {
    lat: 35.2037466,
    lng: 126.8143846,
    address: "광주시 광산구 장덕동 82-3",
    tel: "062-951-9876",
  },
};
