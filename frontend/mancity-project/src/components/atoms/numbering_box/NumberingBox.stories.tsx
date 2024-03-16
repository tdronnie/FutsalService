import NumberingBox from "@/components/atoms/numbering_box/NumberingBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumberingBox> = {
  title: "Components/atoms/NumberingBox",
  tags: ["autodocs"],
  component: NumberingBox,
  argTypes: {
    number: {
      description: "경기 다시보기 화면에서 선수 위에 띄울 number box 입니다",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberingBox>;

export const Default: Story = {
  args: {
    number: 3,
  },
};
