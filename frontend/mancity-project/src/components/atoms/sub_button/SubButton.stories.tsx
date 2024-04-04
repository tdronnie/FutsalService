import SubButton from "@/components/atoms/sub_button/SubButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SubButton> = {
  title: "Components/atoms/Button/SubButton",
  tags: ["autodocs"],
  component: SubButton,
  argTypes: {
    label: {
      description: "버튼의 이름을 지정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    hover: {
      description: "호버 시 색상 반전을 줄 지 안줄 지 결정합니다.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SubButton>;

export const Default: Story = {
  args: {
    label: "Sub Button",
    hover: true,
  },
};

export const NoHover: Story = {
  args: {
    label: "Sub Button",
    hover: false,
  },
};
