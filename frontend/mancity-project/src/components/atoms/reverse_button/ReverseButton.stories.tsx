import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ReverseButton> = {
  title: "Components/atoms/Button/ReverseButton",
  tags: ["autodocs"],
  component: ReverseButton,
  argTypes: {
    width: {
      description: "버튼의 너비를 지정합니다. ex) w-20",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      description: "버튼의 이름을 지정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    isdisabled: {
      description: "버튼을 활성화, 비활성화 합니다.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReverseButton>;

export const Default: Story = {
  args: {
    width: "w-80",
    label: "Reverse Button",
    isdisabled: true,
  },
};

export const Half: Story = {
  args: {
    width: "w-40",
    label: "Half Button",
    isdisabled: true,
  },
};
