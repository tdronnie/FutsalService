import TimePicker from "@/components/atoms/time_picker/TimePicker";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const meta: Meta<typeof TimePicker> = {
  title: "Components/atoms/TimePicker",
  tags: ["autodocs"],
  component: TimePicker,
  argTypes: {
    timeValue: {
      description: "사용자가 정한 시간이 값으로 정해집니다.",
      // control: "number",
      table: {
        type: { summary: "number" },
      },
    },
    setTimeValue: {
      description: "사용자가 정한 시간이 수정되는 변화값입니다.",
      table: {
        type: { summary: "number" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Default: Story = () => {
  const [timeValue, setTimeValue] = useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const hour = timeValue ? Number(timeValue.hour()) : 0;

  return <TimePicker timeValue={timeValue} setTimeValue={setTimeValue} />;
};

Default.args = { timeValue: dayjs("2022-04-17T15:30") };
