import ClubButton from "@/components/atoms/club_button/ClubButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClubButton> = {
  title: "Components/atoms/Button/ClubButton",
  tags: ["autodocs"],
  component: ClubButton,
};

export default meta;

type Story = StoryObj<typeof ClubButton>;

export const Default: Story = {
  args: {
    textColor: "text-[#D4A11E]",
    bgColor: "bg-white",
    borderColor: "border-[#D4A11E]",
    hoverTextColor: "hover:text-white",
    hoverBgColor: "hover:bg-[#D4A11E]",
    label: "클럽명",
  },
};
