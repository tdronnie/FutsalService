import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import SortButton from "@/components/atoms/sort_button/SortButton";
import SearchBar from "@/components/molecules/search_bar/SearchBar";
import WideCard from "@/components/molecules/wide_card/WideCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClubBody = () => {
  const [selectedTab, setSelectedTab] = useState(false);
  const tabSwitch = () => setSelectedTab(!selectedTab);

  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <>
      <div className="flex justify-center m-2">
        <ShadcnTabs Tab1="용병" Tab2="클럽" onChange={tabSwitch} defaultTab="tab1" />
      </div>
      <div className="p-2">
        {!selectedTab && (
          <div>
          <div className="flex">
            <div className="mx-2">
              <SortButton label="정렬" width="w-16" hover={false} />
            </div>
            <SearchBar />
          </div>
            <WideCard
              file="/src/assets/imgs/mancity_logo.png"
              subtext="골결정력 특화"
              maintext="김포이세은"
              minitext="총능력치 58"
              buttonlabel="호출하기"
            />
        </div>
        )}

        {selectedTab && (
          <div>
            <div className="flex">
              <div className="mx-2" onClick={() => handleNavigate({ path: "/club/filter" })}>
                <SortButton label="필터" width="w-16" hover={true} />
              </div>
              <SearchBar />
            </div>
              <WideCard
                file="/src/assets/imgs/mancity_logo.png"
                subtext="경기도"
                maintext="아르마딜로FC"
                minitext="1800점·인원 36명"
                buttonlabel="가입신청"
              />
          </div>
        )}
      </div>
    </>
  );
};

export default ClubBody;
