import type { Meta, StoryObj } from "@storybook/react";
import GlobalButton from "./GlobalButton";

const meta: Meta<typeof GlobalButton> = {
  title: "Components/atoms/Button/GlobalButton",
  tags: ["autodocs"],
  component: GlobalButton,
};

export default meta;

type Story = StoryObj<typeof GlobalButton>;

export const Default: Story = {
  args: {
    width: "w-80",
    label: "Global Button",
  },
};

export const Half: Story = {
  args: {
    width: "w-40",
    label: "Half Button",
  },
};
