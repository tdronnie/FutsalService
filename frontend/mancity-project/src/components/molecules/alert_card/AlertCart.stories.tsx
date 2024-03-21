import AlertCard from "./AlertCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlertCard> = {
  title: "Components/atoms/AlertCard",
  tags: ["autodocs"],
  component: AlertCard,
  argTypes: {
    maintext: {
      description: "(필)메인텍스트를 설정합니다. ex)📫 용병 요청이 도착했어요",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "📫 용병 요청이 도착했어요" },
      },
    },
    subtext: {
      description:
        "(필)서브텍스트를 설정합니다. ex)요청을 수락하고 경기를 뛰어보세요!",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "요청을 수락하고 경기를 뛰어보세요!" },
      },
    },
    minitext: {
      description: "미니텍스트를 설정합니다. ex)알림 날짜: 2024년 03월 11일",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "알림 날짜: 2024년 03월 11일" },
      },
    },
    buttonlabel: {
      description: "(필)버튼에 들어갈 텍스트를 설정합니다. ex)바로가기",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "바로가기" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertCard>;

export const Default: Story = {
  args: {
    maintext: "📫 용병 요청이 도착했어요",
    subtext: "요청을 수락하고 경기를 뛰어보세요!",
    minitext: "알림 날짜: 2024년 03월 11일",
    buttonlabel: "바로가기",
  },
};
