import type { Meta, StoryObj } from "@storybook/react";
import FontawsomeIcon from "./FontawsomeIcon";

const meta: Meta<typeof FontawsomeIcon> = {
  title: "Components/atoms/fontawesome_icon/Fontawsomeicon",
  tags: ["autodocs"],
  component: FontawsomeIcon,
  argTypes: {
    icon: {
      description: "아이콘을 설정합니다. ex) user, arrow-left 등",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "user" },
      },
    },
    size: {
      description:
        "사이즈를 설정합니다. ex) 1x, 2x, ..., 10x(1x는 1em)",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "1x" },
      },
    },
    color: {
      description:
        "색상을 설정합니다. ex) black, #5D7A93 등",
      control: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#5D7A93" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FontawsomeIcon>;

export const ArrowLeft: Story = {
  args: {
    icon: "arrow-left",
    size: "1x",
    color: "#5D7A93",
  },
};

export const faUser: Story = {
  args: {
    icon: "user",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faBell: Story = {
  args: {
    icon: "bell",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faCopy: Story = {
  args: {
    icon: "copy",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faLocationCrosshairs: Story = {
  args: {
    icon: "location-crosshairs",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faFilter: Story = {
  args: {
    icon: "filter",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faCalendarDays: Story = {
  args: {
    icon: "calendar-days",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faCircleUser: Story = {
  args: {
    icon: "circle-user",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faTowerCell: Story = {
  args: {
    icon: "tower-cell",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faPlus: Story = {
  args: {
    icon: "plus",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faMagnifyingGlass: Story = {
  args: {
    icon: "magnifying-glass",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faImage: Story = {
  args: {
    icon: "image",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faHeart: Story = {
  args: {
    icon: "heart",
    size: "1x",
    color: "#5D7A93",
  },
};
export const ColoredHeart: Story = {
  args: {
    icon: ['fas', 'heart'],
    size: "1x",
    color: "#FF204E",
  },
};
export const faShareFromSquare: Story = {
  args: {
    icon: "share-from-square",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faCamera: Story = {
  args: {
    icon: "camera",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faUserGroup: Story = {
  args: {
    icon: "user-group",
    size: "1x",
    color: "#5D7A93",
  },
};
export const faBookmark: Story = {
  args: {
    icon: "bookmark",
    size: "1x",
    color: "#5D7A93",
  },
};
