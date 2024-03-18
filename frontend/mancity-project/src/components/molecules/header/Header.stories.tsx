import Header from "@/components/molecules/header/Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Components/molecules/Header",
  tags: ["autodocs"],
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const SignUp: Story = {
  args: {
    label: "회원가입",
  },
};
