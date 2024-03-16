import Dropdown from "@/components/molecules/dropdown/Dropdown";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof Dropdown> = {
  title: "Components/molecules/Dropdown",
  tags: ["autodocs"],
  decorators: [withRouter],
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const GenderInfo = [
  { value: 1, label: "남자" },
  { value: 2, label: "여자" },
];

const MainFootInfo = [
  { value: 1, label: "왼발" },
  { value: 2, label: "오른발" },
];
export const Gender: Story = {
  args: {
    typographyLabel: "성별",
    items: GenderInfo,
  },
};

export const MainFoot: Story = {
  args: {
    typographyLabel: "주발",
    items: MainFootInfo,
  },
};
