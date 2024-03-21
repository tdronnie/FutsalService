import GlobalCard from "@/components/molecules/global_card/GlobalCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GlobalCard> = {
  title: "Components/molecules/GlobalCard",
  tags: ["autodocs"],
  component: GlobalCard,
  argTypes: {
    file: {
      description: "배경에 이미지를 넣습니다. ex)/src/assets/imgs/mancity_logo.png",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "/src/assets/imgs/mancity_logo.png" },
      },
    },
    mainTitle: {
      description:
        "큰 글씨를 설정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "이것이 큰글씨요" },
      },
    },
    subTitle: {
      description:
        "작은 글씨를 설정합니다.",
        control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "2024/04/05" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GlobalCard>;

export const Email: Story = {
  args: {
    mainTitle: "광주 신화 풋살장",
    subTitle: "2024/04/05",
    file: "/src/assets/imgs/mancity_logo.png",
  },
};
