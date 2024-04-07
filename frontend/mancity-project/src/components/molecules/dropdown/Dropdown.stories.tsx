import Dropdown from "@/components/molecules/dropdown/Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/molecules/Dropdown",
  tags: ["autodocs"],
  // 제목
  component: Dropdown,
  // 내용
  parameters: {
    componentSubtitle: `
    ShadcnDropdown에 기재된 사용법을 참고하시기 바랍니다.`,
  },
  // 인자 설명
  argTypes: {
    MyTypographyLabel: {
      description: "Dropdown의 이름을 지정합니다.",
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    items: {
      description:
        'value, label로 구성된 배열을 작성합니다. [{ value: 1, label: "성호" },]',
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const GenderInfo = [
  { value: 1, label: "남자" },
  { value: 2, label: "여자" },
];

const MainFootInfo = [
  { value: 1, label: "왼발" },
  { value: 2, label: "오른발" },
];
export const Gender: Story = {
  args: {
    MyTypographyLabel: "성별",
    items: GenderInfo,
    width: "w-40",
  },
};

export const MainFoot: Story = {
  args: {
    MyTypographyLabel: "주발",
    items: MainFootInfo,
  },
};
