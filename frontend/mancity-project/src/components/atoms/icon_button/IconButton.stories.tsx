import IconButton from "@/components/atoms/icon_button/IconButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  title: "Components/atoms/Button/IconButton",
  tags: ["autodocs"],
  component: IconButton,
  argTypes: {
    icon: {
      description: "버튼 위에 띄울 아이콘을 설정합니다. ex) pen",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Pen: Story = {
  args: {
    icon: "pen",
  },
};

export const Plus: Story = {
  args: {
    icon: "plus",
  },
};
