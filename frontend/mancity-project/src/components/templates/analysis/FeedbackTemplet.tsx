import Header from "@/components/organisms/header/Header";
import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
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

      {/* 팀 피드백 */}
      {selectedTab ? (
        <div id="glassui" className="py-1 mx-4 my-4">
          <div className="mx-4 my-2">
            <MyTypography
              label="경기 피드백(AWAY)"
              textColor="black"
              textSize="text-2xl"
              fontWeight="font-medium"
            />
          </div>
          <hr className="mb-2 border border-sofcity" />
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="내용:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>
      ) : (
        <div id="glassui" className="py-1 mx-4 my-4">
          <div className="mx-4 my-2">
            <MyTypography
              label="경기 피드백(HOME)"
              textColor="black"
              textSize="text-2xl"
              fontWeight="font-medium"
            />
          </div>
          <hr className="mb-2 border border-sofcity" />
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="내용:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackTemplet;
