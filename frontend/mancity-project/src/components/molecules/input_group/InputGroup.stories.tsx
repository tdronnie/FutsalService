import InputGroup from "@/components/molecules/input_group/InputGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputGroup> = {
  title: "Components/molecules/InputGroup",
  tags: ["autodocs"],
  component: InputGroup,
  argTypes: {
    typographyLabel: {
      description: "input창의 이름을 지정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      description: "input창에 띄울 임시 내용을 지정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    checking: {
      description: "확인 버튼을 보일 지 여부를 결정합니다.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    checkingLabel: {
      description: "확인 버튼의 label을 결정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "중복 확인" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Email: Story = {
  args: {
    typographyLabel: "이메일",
    placeholder: "email@ssafy.com",
    checking: true,
    checkingLabel: "중복 확인",
  },
};

export const Password: Story = {
  args: {
    typographyLabel: "비밀번호",
    placeholder: "8자리 이상",
    checking: false,
  },
};
export const Comment: Story = {
  args: {
    typographyLabel: "댓글",
    placeholder: "댓글은 매너있게 달아주세요 :)",
    checking: true,
    checkingLabel: "입력",
  },
};
