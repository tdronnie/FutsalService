import RoundButton from "@/components/atoms/round_button/RoundButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RoundButton> = {
  title: "Components/atoms/Button/RoundButton",
  tags: ["autodocs"],
  component: RoundButton,
};

export default meta;

type Story = StoryObj<typeof RoundButton>;

export const Filled: Story = {
  args: {
    textColor: "text-white",
    bgColor: "bg-mancity",
    borderColor: "border-mancity",
    hoverTextColor: "hover:text-mancity",
    hoverBgColor: "hover:bg-white",
    hoverBorderColor: "hover:border-mancity",
    label: "확정",
  },
};

export const Empty: Story = {
  args: {
    textColor: "text-mancity",
    bgColor: "bg-white",
    borderColor: "border-mancity",
    hoverTextColor: "hover:text-white",
    hoverBgColor: "hover:bg-mancity",
    hoverBorderColor: "hover:border-white",
    label: "확정",
  },
};
