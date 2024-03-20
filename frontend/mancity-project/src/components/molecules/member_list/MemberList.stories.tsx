import MemberList from "@/components/molecules/member_list/MemberList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MemberList> = {
  title: "Components/molecules/MemberList",
  tags: ["autodocs"],
  component: MemberList,
};

export default meta;

type Story = StoryObj<typeof MemberList>;

export const Email: Story = {
  args: {
    label: "멤버 라인업",
  },
};
