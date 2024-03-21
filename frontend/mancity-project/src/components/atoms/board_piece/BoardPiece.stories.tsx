import BoardPiece from "@/components/atoms/board_piece/BoardPiece";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BoardPiece> = {
  title: "Components/atoms/BoardPiece",
  tags: ["autodocs"],
  component: BoardPiece,
  argTypes: {
    bgColor: {
      description: "전술판에서 사용하는 인원의 색상입니다.",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "bg-mancity" },
      },
    },
    label: {
      description: "전술판에서 뛰는 인원의 번호입니다",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "0" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BoardPiece>;

export const mancity: Story = {
  args: {
    bgColor: "bg-mancity",
    label: "1",
  },
};

export const darkcity: Story = {
  args: {
    bgColor: "bg-darkcity",
    label: "2",
  },
};
