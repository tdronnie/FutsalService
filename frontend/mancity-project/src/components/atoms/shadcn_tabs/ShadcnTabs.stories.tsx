import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Source } from "@storybook/addon-docs";
import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";

const meta: Meta<typeof ShadcnTabs> = {
  title: "Components/atoms/ShadcnTabs",
  tags: ["autodocs"],
  component: ShadcnTabs,
  parameters: {
    docs: {
      page: () => (
        <>
          <h2>ShadcnTabs 사용 예시</h2>
          <Source
            language="tsx"
            code={`  
// selectedTab의 값을 사용합니다. 아래 코드를 사용해주세요.
const [selectedTab, setSelectedTab] = useState(false);
const tabSwitch = () => setSelectedTab(!selectedTab);     

<ShadcnTabs Tab1="영상" Tab2="잡담" onChange={tabSwitch} />
{!selectedTab && <div>영상 리스트입니다</div>}
{selectedTab && <div>잡담 리스트입니다</div>}
            `}
          />
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShadcnTabs>;

export const Default: Story = () => {
  const [selectedTab, setSelectedTab] = useState(false);

  const handleCheckedChange = () => {
    setSelectedTab(!selectedTab);
    action("onCheckedChange")(!selectedTab);
  };

  return <ShadcnTabs Tab1="영상" Tab2="잡담" onChange={handleCheckedChange} />;
};

Default.args = {
  Tab1: "영상",
  Tab2: "잡담",
};
