import SubmitButton from "@/components/atoms/submit_button/SubmitButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SubmitButton> = {
  title: "Components/atoms/Button/SubmitButton",
  tags: ["autodocs"],
  component: SubmitButton,
  argTypes: {
    label: {
      description: "헤더 오른쪽의 제출 버튼의 이름을 지정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    label: "등록하기",
  },
};
