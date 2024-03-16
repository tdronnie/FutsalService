import TextareaContainer from "@/components/atoms/textarea_container/TextareaContainer";
import type { Meta, StoryObj } from "@storybook/react";

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
