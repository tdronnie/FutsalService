import FollowCard from "@/components/molecules/follow_card/FollowCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FollowCard> = {
  title: "Components/molecules/FollowCard",
  tags: ["autodocs"],
  component: FollowCard,
  decorators: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    file: {
      description: "유저 사진을 입력받습니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    nickName: {
      description: "유저 닉네임을 입력받습니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FollowCard>;

export const Profile: Story = {
  args: {
    file: "",
    nickName: "하남최성호",
  },
};
