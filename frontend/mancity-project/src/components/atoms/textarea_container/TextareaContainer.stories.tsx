import type { Meta, StoryObj } from "@storybook/react";
import TextareaContainer from "./TextareaContainer";

const meta: Meta<typeof TextareaContainer> = {
  title: "Components/atoms/TextareaContainer",
  tags: ["autodocs"],
  component: TextareaContainer,
};

export default meta;

type Story = StoryObj<typeof TextareaContainer>;

export const Default: Story = {
  args: {},
};
