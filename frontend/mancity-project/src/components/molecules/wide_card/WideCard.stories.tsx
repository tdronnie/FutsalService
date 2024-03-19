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
    matchtime: {
      description:
        "매치 시간을 설정합니다. ex)오전 10시",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "오전 10시" },
      },
    },
    matchplace: {
      description:
        "매치 장소를 설정합니다. ex)광주 신화 풋살장",
        control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "광주 신화 풋살장" },
      },
    },
    matchinfo: {
      description: "매치 정보를 설정합니다. ex)남자·5vs5·중 수준",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "남자·5vs5·중 수준" },
      },
    },
    peoplenumber: {
      description: "인원수를 보여줍니다. ex)인원 6/10",
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
    matchtime: "오전 10시",
    matchplace: "광주 신화 풋살장",
    matchinfo: "남자·5vs5·중 수준",
    peoplenumber: "인원 6/10",
  },
};