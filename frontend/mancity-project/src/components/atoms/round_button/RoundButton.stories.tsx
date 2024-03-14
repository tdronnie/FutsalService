import type { Meta, StoryObj } from "@storybook/react";
import RoundButton from "./RoundButton";

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
    hoverTextColoer: "text-mancity",
    hoverBgColor: "bg-white",
    hoverBorderColor: "border-mancity",
    label: "확정",
  },
};

export const Empty: Story = {
  args: {
    textColor: "text-mancity",
    bgColor: "bg-white",
    hoverTextColoer: "text-white",
    hoverBgColor: "bg-mancity",
    hoverBorderColor: "border-white",
    label: "확정",
  },
};
