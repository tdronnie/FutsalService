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
  argTypes: {
    width: {
      description: "너비를 지정합니다. ex) w-40",
      control: "text",
      table: {
        type: { summary: "string" },
        default: { summary: "w-full" },
      },
    },
    height: {
      description: "높이를 지정합니다. ex) h-40",
      control: "text",
      table: {
        type: { summary: "string" },
        default: { summary: "w-full" },
      },
    },
    rounded: {
      description: "둥근 정도를 지정합니다. ex) rounded-full",
      control: "text",
      table: {
        type: { summary: "string" },
        default: { summary: "w-full" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EditContentBox>;

export const Profile: Story = {
  args: {
    width: "w-40",
    height: "h-40",
    rounded: "rounded-full",
  },
};
