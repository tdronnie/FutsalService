import InputGroup from "@/components/molecules/input/InputGroup";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof InputGroup> = {
  title: "Components/molecules/InputGroup",
  tags: ["autodocs"],
  decorators: [withRouter],
  component: InputGroup,
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Email: Story = {
  args: {
    typographyLabel: "이메일",
    placeholder: "email@ssafy.com",
    checking: true,
  },
};

export const Password: Story = {
  args: {
    typographyLabel: "비밀번호",
    placeholder: "8자리 이상",
    checking: false,
  },
};
