import type { Meta, StoryObj } from "@storybook/react";
import ClubButton from "./ClubButton";

const meta: Meta<typeof ClubButton> = {
  title: "Components/atoms/Button/ClubButton",
  tags: ["autodocs"],
  component: ClubButton,
};

export default meta;

type Story = StoryObj<typeof ClubButton>;

export const Default: Story = {
  args: {
    textColor: "[#D4A11E]",
    bgColor: "white",
    label: "클럽명",
  },
};
