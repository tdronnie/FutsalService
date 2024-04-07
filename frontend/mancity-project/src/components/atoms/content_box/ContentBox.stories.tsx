import ContentBox from "@/components/atoms/content_box/ContentBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContentBox> = {
  title: "Components/atoms/ContentBox",
  tags: ["autodocs"],
  component: ContentBox,
  argTypes: {
    width: {
      description: "이미지의 너비를 지정합니다. ex) w-20",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    height: {
      description: "이미지의 높이를 지정합니다. ex) h-20",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    rounded: {
      description:
        "이미지의 테두리 둥글기를 지정합니다. ex) rounded-sm, rounded-full",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    file: {
      description: "이미지가 존재한다면 주소를 입력합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentBox>;

export const Avata: Story = {
  args: {
    width: "w-10",
    height: "h-10",
    rounded: "rounded-full",
    file: "/src/assets/imgs/mancity_logo.png",
  },
};

export const Image: Story = {
  args: {
    width: "w-20",
    height: "h-20",
    rounded: "rounded-none",
    file: "/src/assets/imgs/mancity_logo.png",
  },
};
