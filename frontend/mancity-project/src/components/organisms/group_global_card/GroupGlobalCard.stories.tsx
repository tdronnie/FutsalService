import GroupGlobalCard from "./GroupGlobalCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GroupGlobalCard> = {
  title: "Components/organisms/GroupGlobalCard",
  tags: ["autodocs"],
  component: GroupGlobalCard,
};

export default meta;

type Story = StoryObj<typeof GroupGlobalCard>;

export const Default: Story = {};
