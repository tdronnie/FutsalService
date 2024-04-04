import HighlightCard from "@/components/molecules/highlight_card/HighlightCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HighlightCard> = {
  title: "Components/molecules/HighlightCard",
  component: HighlightCard,
  argTypes: {
    mainTitle: {
      description: "카드의 내용을 작성합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    file: {
      description:
        "카드에 띄울 이미지 주소를 작성합니다. ex) /src/assets/imgs/mancity_logo.png",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HighlightCard>;

export const Email: Story = {
  args: {
    mainTitle: "하이라이트 1",
    file: "/src/assets/imgs/mancity_logo.png",
  },
};
