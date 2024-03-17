import IconButton from "@/components/atoms/icon_button/IconButton";
import type { Meta, StoryObj } from "@storybook/react";

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
