import TimePicker from "@/components/atoms/time_picker/TimePicker";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const meta: Meta<typeof TimePicker> = {
  title: "Components/atoms/TimePicker",
  tags: ["autodocs"],
  component: TimePicker,
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
