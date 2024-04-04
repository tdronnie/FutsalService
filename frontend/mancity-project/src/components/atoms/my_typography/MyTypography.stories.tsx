import MyTypography from "@/components/atoms/my_typography/MyTypography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MyTypography> = {
  title: "Components/atoms/MyTypography",
  tags: ["autodocs"],
  component: MyTypography,
  argTypes: {
    textSize: {
      description: "텍스트 크기를 설정합니다. ex) text-xs/sm/base/lg/xl/2xl...",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text-base" },
      },
    },
    fontWeight: {
      description:
        "텍스트의 굵기를 설정합니다. ex) font-thin/extralight/light/normal/medium/semibold/bold/extrabold/black",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    textColor: {
      description:
        "텍스트 색상을 설정합니다. ex) text-black, text-gray-50/100/../900",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      description: "label을 설정합니다",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MyTypography>;

export const Default: Story = {
  args: {
    textSize: "text-sm",
    fontWeight: "font-medium",
    textColor: "text-[#5D7A93]",
    label: "MyTypography",
  },
};

export const Middle: Story = {
  args: {
    textSize: "text-base",
    fontWeight: "font-medium",
    textColor: "text-[#5D7A93]",
    label: "Middle",
  },
};

export const MainPage: Story = {
  args: {
    textSize: "text-2xl",
    fontWeight: "font-medium",
    textColor: "text-[#5D7A93]",
    label: "MainPage",
  },
};
