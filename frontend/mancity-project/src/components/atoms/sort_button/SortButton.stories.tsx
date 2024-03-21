import SortButton from "./SortButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SortButton> = {
  title: "Components/atoms/Button/SortButton",
  tags: ["autodocs"],
  component: SortButton,
};

export default meta;

type Story = StoryObj<typeof SortButton>;

export const Default: Story = {
  args: {
    width: "w-16",
    label: "버튼",
    hover: true,
  },
};

export const NoHover: Story = {
  args: {
    width: "w-16",
    label: "버튼",
    hover: false,
  },
};
