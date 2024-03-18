import WideCard from "./WideCard";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof WideCard> = {
  title: "Components/molecules/WideCard",
  tags: ["autodocs"],
  decorators: [withRouter],
  component: WideCard,
};

export default meta;

type Story = StoryObj<typeof WideCard>;

export const Default: Story = {};
