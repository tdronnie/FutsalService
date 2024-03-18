import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GlobalButton> = {
  title: "Components/atoms/Button/GlobalButton",
  tags: ["autodocs"],
  component: GlobalButton,
};

export default meta;

type Story = StoryObj<typeof GlobalButton>;

export const Default: Story = {
  args: {
    isdisabled: true,
    width: "w-80",
    label: "Global Button",
  },
};

export const Half: Story = {
  args: {
    isdisabled: true,
    width: "w-40",
    label: "Half Button",
  },
};
