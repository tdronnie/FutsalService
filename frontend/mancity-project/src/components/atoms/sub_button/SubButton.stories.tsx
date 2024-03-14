import type { Meta, StoryObj } from "@storybook/react";
import SubButton from "./SubButton";

const meta: Meta<typeof SubButton> = {
  title: "Components/atoms/Button/SubButton",
  tags: ["autodocs"],
  component: SubButton,
};

export default meta;

type Story = StoryObj<typeof SubButton>;

export const Default: Story = {
  args: {
    label: "Sub Button",
  },
};
