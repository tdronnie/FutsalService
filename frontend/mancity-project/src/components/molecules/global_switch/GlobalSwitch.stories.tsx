import GlobalSwitch from "@/components/molecules/global_switch/GlobalSwitch";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React, { useState } from "react";

const meta: Meta<typeof GlobalSwitch> = {
  title: "Components/molecules/GlobalSwitch",
  component: GlobalSwitch,
  // 내용
  parameters: {
    componentSubtitle: ` 스위치는
    ShadcnSwitch에 기재된 사용법을 참고하시기 바랍니다.`,
  },
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
  argTypes: {
    label: {
      description: "스위치의 이름을 설정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "필수입니다" },
      },
    },
    isSwitchOn: {
      description: "스위치가 켜지면 true 값을 가집니다.",
      table: {
        type: { summary: "boolean" },
      },
    },
    setIsSwitchOn: {
      description: "스위치의 내부 설정을 맡습니다.",
      table: {
        type: { summary: "string" },
      },
    },
    switchMarginTop: {
      description: "label과 스위치 간 수직 거리 차이가 필요할 때 사용합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof GlobalSwitch>;

export const Default: Story = {
  args: {
    label: "Example Label",
    isSwitchOn: false,
    setIsSwitchOn: action("isSwitchOn"),
    switchMarginTop: "mt-8",
  },
};
