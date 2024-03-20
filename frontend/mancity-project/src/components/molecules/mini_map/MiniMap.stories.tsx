import MiniMap from "@/components/molecules/mini_map/MiniMap";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MiniMap> = {
  title: "Components/molecules/MiniMap",
  tags: ["autodocs"],
  component: MiniMap,
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
