import GroupHighlightCard from "./GroupHighlightCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GroupHighlightCard> = {
  title: "Components/organisms/GroupHighlightCard",
  tags: ["autodocs"],
  component: GroupHighlightCard,
};

export default meta;

type Story = StoryObj<typeof GroupHighlightCard>;

export const Default: Story = {};
