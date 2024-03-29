import Header from "@/components/organisms/header/Header";
import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import { useState } from "react";

const FeedbackTemplet = () => {
    const [selectedTab, setSelectedTab] = useState(false);
    const tabSwitch = () => setSelectedTab(!selectedTab);
    
  return (
    <div>
      <Header label="경기 피드백" backArrow={true} headerButton={false} />
      <div className="flex justify-center m-2">
        <ShadcnTabs
          Tab1="HOME"
          Tab2="AWAY"
          onChange={tabSwitch}
          defaultTab="tab1"
        />
      </div>
    </div>
  )
}

export default FeedbackTemplet