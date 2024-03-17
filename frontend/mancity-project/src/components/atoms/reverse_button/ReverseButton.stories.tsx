import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ReverseButton> = {
  title: "Components/atoms/Button/ReverseButton",
  tags: ["autodocs"],
  component: ReverseButton,
};

export default meta;

type Story = StoryObj<typeof ReverseButton>;

export const Default: Story = {
  args: {
    width: "w-80",
    label: "Reverse Button",
  },
};

export const Half: Story = {
  args: {
    width: "w-40",
    label: "Half Button",
  },
};
