import RadarChart from "./RadarChart";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadarChart> = {
  title: "Components/molecules/RadarChart",
  tags: ["autodocs"],
  component: RadarChart,
  parameters: {
    componentSubtitle: `회원의 stats를 표기하는 RadarChart입니다.`,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "500px", height: "500px" }}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof RadarChart>;

export const Default: Story = {};
