import HighlightCard from "@/components/molecules/highlight_card/HighlightCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HighlightCard> = {
  title: "Components/molecules/HighlightCard",
  component: HighlightCard,
};

export default meta;

type Story = StoryObj<typeof HighlightCard>;

export const Email: Story = {
  args: {
    mainTitle: "하이라이트 1",
    file: "/src/assets/imgs/mancity_logo.png",
  },
};
