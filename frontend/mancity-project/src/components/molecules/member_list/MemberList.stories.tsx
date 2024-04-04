import MemberList from "@/components/molecules/member_list/MemberList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MemberList> = {
  title: "Components/molecules/MemberList",
  tags: ["autodocs"],
  component: MemberList,
  // 내용
  parameters: {
    componentSubtitle: `
    image 파일을 받아오면서 file의 위치를 수정하겠습니다.`,
  },
};

export default meta;

type Story = StoryObj<typeof MemberList>;

export const Email: Story = {
  args: {},
};
