import GlobalCard from "@/components/molecules/global_card/GlobalCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GlobalCard> = {
  title: "Components/molecules/GlobalCard",
  tags: ["autodocs"],
  component: GlobalCard,
};

export default meta;

type Story = StoryObj<typeof GlobalCard>;

export const Email: Story = {
  args: {
    mainTitle: "광주 신화 풋살장",
    subTitle: "2024/04/05",
    file: "/favicon.ico",
  },
};
