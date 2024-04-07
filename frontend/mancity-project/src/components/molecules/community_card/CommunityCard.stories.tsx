import CommunityCard from "./CommunityCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CommunityCard> = {
  title: "Components/molecules/CommunityCard",
  tags: ["autodocs"],
  component: CommunityCard,
  argTypes: {
    file: {
      description:
        "커뮤니티 글의 이미지를 넣습니다. ex) /src/assets/imgs/mancity_logo.png",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: {
          file: "/src/assets/imgs/mancity_logo.png",
        },
      },
    },
    maintext: {
      description: "커뮤니티 글 제목을 작성합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "안녕하세요 회원님들" },
      },
    },
    subtext: {
      description: "커뮤니티 글 내용을 작성합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "안녕하세요. 가입인사드립니다." },
      },
    },
    likes: {
      description: "게시글에 좋아요를 누른 수 입니다.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 5 },
      },
    },

    comments: {
      description: "게시글에 달린 댓글의 수 입니다.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "6" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CommunityCard>;

export const Default: Story = {
  args: {
    maintext: "안녕하세요 회원님들",
    subtext: "안녕하세요. 가입인사드립니다.",
    file: "/src/assets/imgs/mancity_logo.png",
    likes: 5,
    comments: 6,
  },
};
