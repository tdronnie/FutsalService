import Header from "@/components/organisms/header/Header";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof Header> = {
  title: "Components/organisms/Header",
  tags: ["autodocs"],
  decorators: [withRouter],
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const SignUp: Story = {
  args: {
    label: "회원가입",
  },
};
