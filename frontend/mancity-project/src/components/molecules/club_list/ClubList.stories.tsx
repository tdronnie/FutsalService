import ClubList from "@/components/molecules/club_list/ClubList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClubList> = {
  title: "Components/molecules/ClubList",
  tags: ["autodocs"],
  component: ClubList,
  argTypes: {
    file: {
      description: "배경에 이미지를 넣습니다. ex)/src/assets/imgs/mancity_logo.png",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "/src/assets/imgs/mancity_logo.png" },
      },
    },
    clubTitile: {
      description:
        "(필)클럽명을 설정합니다. ex)FC디오니소스",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "FC디오니소스" },
      },
    },
    clubInfo: {
      description:
        "(필)클럽 정보를 설정합니다. ex)1728점/2024.03.10",
        control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "1728점/2024.03.10" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ClubList>;

export const Default: Story = {
  args: {
    clubTitile: "FC디오니소스",
    clubInfo: "1728점/2024.03.10",
    file: "/src/assets/imgs/mancity_logo.png",
  },
};
