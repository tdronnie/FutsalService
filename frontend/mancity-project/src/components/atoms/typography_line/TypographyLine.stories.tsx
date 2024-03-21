import TypographyLine from "@/components/atoms/typography_line/TypographyLine";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TypographyLine> = {
  title: "Components/atoms/TypographyLine",
  tags: ["autodocs"],
  component: TypographyLine,
  argTypes: {
    label: {
      description: "label을 설정합니다",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "word" },
      },
    },
    lineWidth: {
      description: "선을 적절히 이동할 수 있도록 필요한 width를 설정합니다",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "word" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TypographyLine>;

export const Default: Story = {
  args: {
    label: "TypographyLine",
    lineWidth: "w-44",
  },
};
