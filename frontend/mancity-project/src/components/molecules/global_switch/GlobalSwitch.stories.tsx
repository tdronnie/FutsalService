import GlobalSwitch from "@/components/molecules/global_switch/GlobalSwitch";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";

const meta: Meta<typeof GlobalSwitch> = {
  title: "Components/molecules/GlobalSwitch",
  component: GlobalSwitch,
  decorators: [
    (Story, { args }) => {
      const [isSwitchOn, setIsSwitchOn] = useState(false);
      return (
        <div style={{ width: "220px", height: "30px" }}>
          <Story args={{ ...args, isSwitchOn, setIsSwitchOn }} />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof GlobalSwitch>;

export const Default: Story = {
  args: {
    label: "Example Label",
    isSwitchOn: false,
    setIsSwitchOn: action("isSwitchOn"),
    switchMarginTop: "normal",
  },
};
