import SearchBar from "./SearchBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchBar> = {
  title: "Components/molecules/SearchBar",
  tags: ["autodocs"],
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    width: "w-80",
    label: "Reverse Button",
  },
};
