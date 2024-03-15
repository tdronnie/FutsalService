import type { Meta, StoryObj } from "@storybook/react";
import AvataContainer from "./AvataContainer";

const meta: Meta<typeof AvataContainer> = {
  title: "Components/atoms/AvataContainer",
  tags: ["autodocs"],
  component: AvataContainer,
};

export default meta;

type Story = StoryObj<typeof AvataContainer>;

export const Small: Story = {
  args: {
    width: "w-10",
    height: "h-10",
  },
};

export const medium: Story = {
  args: {
    width: "w-20",
    height: "h-20",
  },
};

export const Large: Story = {
  args: {
    width: "w-32",
    height: "h-32",
  },
};
