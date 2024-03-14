import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/atoms/Button/IconButton",
  tags: ["autodocs"],
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Pen: Story = {
  args: {
    icon: "pen",
  },
};

export const Plus: Story = {
  args: {
    icon: "plus",
  },
};
