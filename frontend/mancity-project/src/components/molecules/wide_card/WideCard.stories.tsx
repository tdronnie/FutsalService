import WideCard from "./WideCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WideCard> = {
  title: "Components/molecules/WideCard",
  tags: ["autodocs"],
  component: WideCard,
};

export default meta;

type Story = StoryObj<typeof WideCard>;

export const Default: Story = {};
