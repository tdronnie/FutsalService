import type { Meta, StoryObj } from "@storybook/react";
import GlobalInput from "./GlobalInput";

const meta: Meta<typeof GlobalInput> = {
  title: "Components/atoms/GlobalInput",
  tags: ["autodocs"],
  component: GlobalInput,
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
