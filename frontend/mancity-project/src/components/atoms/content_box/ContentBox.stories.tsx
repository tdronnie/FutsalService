import ContentBox from "@/components/atoms/content_box/ContentBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContentBox> = {
  title: "Components/atoms/ContentBox",
  tags: ["autodocs"],
  component: ContentBox,
};

export default meta;

type Story = StoryObj<typeof ContentBox>;

export const Avata: Story = {
  args: {
    width: "w-10",
    height: "h-10",
    rounded: "rounded-full",
    bgimg: "bg-[url('/favicon.ico')]",
  },
};

export const Image: Story = {
  args: {
    width: "w-20",
    height: "h-20",
    rounded: "rounded-none",
    bgimg: "bg-[url('/favicon.ico')]",
  },
};


