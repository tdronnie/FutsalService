import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import SortButton from "@/components/atoms/sort_button/SortButton";
import CommunityCard from "@/components/molecules/community_card/CommunityCard";
import SearchBar from "@/components/molecules/search_bar/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommunityListBody = () => {
  const [selectedTab, setSelectedTab] = useState(false);
  const tabSwitch = () => setSelectedTab(!selectedTab);

  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };
  return (
    <div>
      <div className="flex justify-center m-2">
        <ShadcnTabs
          Tab1="영상 목록"
          Tab2="잡담 목록"
          onChange={tabSwitch}
          defaultTab="tab1"
        />
      </div>
      <div className="p-2">
        {!selectedTab && (
          <div>
            <div className="flex">
              <div className="mx-2">
                <SortButton label="인기순" width="w-16" hover={true} />
              </div>
              <div className="w-full">
                <SearchBar />
              </div>
            </div>
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
          </div>
        )}

        {selectedTab && (
          <div>
            <div className="flex">
              <div
                className="mx-2"
                onClick={() => handleNavigate({ path: "/club/filter" })}
              >
                <SortButton label="인기순" width="w-16" hover={true} />
              </div>
              <div className="w-full">
                <SearchBar />
              </div>
            </div>
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
            <CommunityCard
              maintext="우리팀 최고인가요?"
              subtext="우와 이런 슛을 찬다고? 진짜로?"
              likes={5}
              comments={6}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityListBody;
