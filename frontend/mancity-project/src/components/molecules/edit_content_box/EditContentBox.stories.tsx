import EditContentBox from "@/components/molecules/edit_content_box/EditContentBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditContentBox> = {
  title: "Components/molecules/EditContentBox",
  tags: ["autodocs"],
  component: EditContentBox,
  decorators: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EditContentBox>;

export const Email: Story = {
  args: {
    width: "w-40",
    height: "h-40",
    rounded: "rounded-full",
  },
};
