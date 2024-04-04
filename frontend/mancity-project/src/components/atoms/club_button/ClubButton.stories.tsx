import ClubButton from "@/components/atoms/club_button/ClubButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClubButton> = {
  title: "Components/atoms/Button/ClubButton",
  tags: ["autodocs"],
  component: ClubButton,
  argTypes: {
    textColor: {
      description: "클럽명 색상",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    bgColor: {
      description: "클럽명과 반대되는 배경 색상",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    borderColor: {
      description: "테두리 색상 (클럽명과 동일한 색상)",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    hoverTextColor: {
      description: "호버 시 반전되는 클럽명 색상 (배경과 동일)",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    hoverBgColor: {
      description: "호버 시 반전되는 배경 색상 (클럽명과 동일한 색상)",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      description: "클럽명 지정",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ClubButton>;

export const Default: Story = {
  args: {
    label: "클럽명",
    textColor: "text-[#D4A11E]",
    bgColor: "bg-white",
    borderColor: "border-[#D4A11E]",
    hoverTextColor: "hover:text-white",
    hoverBgColor: "hover:bg-[#D4A11E]",
  },
};
