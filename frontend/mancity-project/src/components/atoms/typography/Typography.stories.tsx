import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/atoms/Typography",
  tags: ["autodocs"],
  component: Typography,
  argTypes: {
    textSize: {
      description: "텍스트 크기를 설정합니다. ex) text-xs/sm/base/lg/xl/2xl...",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text-2xl" },
      },
    },
    fontWeight: {
      description:
        "텍스트의 굵기를 설정합니다. ex) font-thin/extralight/light/normal/medium/semibold/bold/extrabold/black",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "font-medium" },
      },
    },
    textColor: {
      description:
        "텍스트 색상을 설정합니다. ex) text-black, text-gray-50/100/../900",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text-[#5D7A93]" },
      },
    },
    label: {
      description: "label을 설정합니다",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "word" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    textSize: "text-xl",
    fontWeight: "font-medium",
    textColor: "text-[#5D7A93]",
    label: "Typography",
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
