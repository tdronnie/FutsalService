import MuiAutocomplete from "@/components/atoms/mui_autocomplete/MuiAutocomplete";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MuiAutocomplete> = {
  title: "Components/atoms/MuiAutocomplete",
  tags: ["autodocs"],
  component: MuiAutocomplete,
  argTypes: {
    contents: {
      description: "자동완성을 띄울 값들을 배열로 입력합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MuiAutocomplete>;
