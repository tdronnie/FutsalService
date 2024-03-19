import WideCard from "./WideCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WideCard> = {
  title: "Components/atoms/WideCard",
  tags: ["autodocs"],
  component: WideCard,
  argTypes: {
    bgimg: {
      description: "배경에 이미지를 넣습니다. ex)bg-[url('/favicon.ico')]",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "bg-[url('/favicon.ico')]" },
      },
    },
    subtext: {
      description:
        "(필)서브텍스트를 설정합니다. ex)오전 10시",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "오전 10시" },
      },
    },
    maintext: {
      description:
        "(필)메인텍스트를 설정합니다. ex)광주 신화 풋살장",
        control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "광주 신화 풋살장" },
      },
    },
    minitext: {
      description: "미니텍스트를 설정합니다. ex)남자·5vs5·중 수준",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "남자·5vs5·중 수준" },
      },
    },
    buttonlabel: {
      description: "(필)버튼에 들어갈 텍스트를 설정합니다. ex)인원 6/10",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "인원 6/10" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof WideCard>;

export const Default: Story = {
  args: {
    bgimg: "bg-[url('/favicon.ico')]",
    subtext: "오전 10시",
    maintext: "광주 신화 풋살장",
    minitext: "남자·5vs5·중 수준",
    buttonlabel: "인원 6/10",
  },
};