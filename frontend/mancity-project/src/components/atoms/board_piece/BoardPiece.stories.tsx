import BoardPiece from "@/components/atoms/board_piece/BoardPiece";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BoardPiece> = {
  title: "Components/atoms/BoardPiece",
  tags: ["autodocs"],
  component: BoardPiece,
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
