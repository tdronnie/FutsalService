import RoundButton from "@/components/atoms/round_button/RoundButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RoundButton> = {
  title: "Components/atoms/Button/RoundButton",
  tags: ["autodocs"],
  component: RoundButton,
  argTypes: {
    textColor: {
      description: "클럽명 색상",
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
    borderColor: {
      description: "테두리 색상 (클럽명과 동일한 색상)",
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
    hoverTextColor: {
      description: "호버 시 반전되는 클럽명 색상 (배경과 동일)",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    hoverBorderColor: {
      description: "호버 시 반전되는 테두리 색상 (배경과 동일한 색상)",
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

type Story = StoryObj<typeof RoundButton>;

export const Filled: Story = {
  args: {
    textColor: "text-white",
    hoverBgColor: "hover:bg-white",
    borderColor: "border-white",
    bgColor: "bg-mancity",
    hoverTextColor: "hover:text-mancity",
    hoverBorderColor: "hover:border-mancity",
    label: "확정",
  },
};

export const Empty: Story = {
  args: {
    textColor: "text-mancity",
    hoverBgColor: "hover:bg-mancity",
    borderColor: "border-mancity",
    bgColor: "bg-white",
    hoverTextColor: "hover:text-white",
    hoverBorderColor: "hover:border-white",
    label: "확정",
  },
};
