import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GlobalButton> = {
  title: "Components/atoms/Button/GlobalButton",
  tags: ["autodocs"],
  component: GlobalButton,
  argTypes: {
    isdisabled: {
      description: "버튼을 활성화, 비활성화 합니다.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
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
  },
};

export default meta;

type Story = StoryObj<typeof GlobalButton>;

export const Default: Story = {
  args: {
    label: "Global Button",
    width: "w-80",
    isdisabled: true,
  },
};

export const Half: Story = {
  args: {
    label: "Half Button",
    width: "w-40",
    isdisabled: true,
  },
};
