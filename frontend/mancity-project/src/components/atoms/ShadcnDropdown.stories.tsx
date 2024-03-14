import type { Meta, StoryObj } from "@storybook/react";
import ShadcnDropdown from "./ShadcnDropdown";

const meta: Meta<typeof ShadcnDropdown> = {
  title: "Components/atoms/ShadcnDropdown",
  tags: ["autodocs"],
  component: ShadcnDropdown,
  argTypes: {
    width: {
      control: "text",
      description: "Dropdown width",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShadcnDropdown>;

export const Default: Story = {
  args: {
    items: [
      { value: 1, label: "성호" },
      { value: 2, label: "지현" },
      { value: 3, label: "지용" },
    ],
    width: "w-40",
  },
};

export const Long: Story = {
  args: {
    items: [
      { value: 1, label: "성호" },
      { value: 2, label: "지현" },
      { value: 3, label: "지용" },
    ],
    width: "w-80",
  },
};
