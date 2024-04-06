import GlobalInput from "@/components/atoms/global_input/GlobalInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GlobalInput> = {
  title: "Components/atoms/GlobalInput",
  tags: ["autodocs"],
  component: GlobalInput,
  argTypes: {
    width: {
      description: "input 창의 너비를 지정합니다. ex) w-20",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      description: "input창에 임시로 보여줄 값을 지정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GlobalInput>;

export const Default: Story = {
  args: {
    width: "w-40",
    placeholder: "placeholder",
  },
};

export const Password: Story = {
  args: {
    width: "w-80",
    placeholder: "비밀번호 입력",
  },
};
