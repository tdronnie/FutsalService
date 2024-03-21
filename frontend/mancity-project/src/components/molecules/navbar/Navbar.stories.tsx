import Navbar from "./Navbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  title: "Components/molecules/Navbar",
  tags: ["autodocs"],
  component: Navbar,
  parameters: {
    componentSubtitle: ` 전역적으로 사용하는 Navbar입니다.`,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "200px", height: "30px" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
