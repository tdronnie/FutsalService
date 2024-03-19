import SubmitButton from "@/components/atoms/submit_button/SubmitButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SubmitButton> = {
  title: "Components/atoms/Button/SubmitButton",
  tags: ["autodocs"],
  component: SubmitButton,
};

export default meta;

type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    label: "Sub Button",
  },
};
