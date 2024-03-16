import React, { useEffect, useState } from "react";
import ShadcnDropdown from "../atoms/shadcn_dropdown/ShadcnDropdown";
import Typography from "../atoms/typography/Typography";
import GlobalInput from "../atoms/global_input/GlobalInput";
import NumberingBox from "../atoms/numbering_box/NumberingBox";
import GlobalButton from "../atoms/global_button/GlobalButton";
import ReverseButton from "../atoms/reverse_button/ReverseButton";
import SubButton from "../atoms/sub_button/SubButton";
import IconButton from "../atoms/icon_button/IconButton";
import RoundButton from "../atoms/round_button/RoundButton";
import ClubButton from "../atoms/club_button/ClubButton";
import BoardPiece from "../atoms/board_piece/BoardPiece";
import ContentBox from "../atoms/content_box/ContentBox";
import TextareaContainer from "../atoms/textarea_container/TextareaContainer";
import ShadcnSwitch from "../atoms/shadcn_switch/ShadcnSwitch";
import ShadcnTabs from "../atoms/shadcn_tabs/ShadcnTabs";
import CarouselSlick from "../atoms/carousel_slick/CarouselSlick";

const dropdownDummyData = [
  { value: 1, label: "성호" },
  { value: 2, label: "지현" },
  { value: 3, label: "지용" },
];

const SingUpTemplate = () => {
  //스위치 상태 관리
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    console.log(isSwitchOn);
  }, [isSwitchOn]);

  const [selectedTab, setSelectedTab] = useState(false);
  const toggleTab = () => setSelectedTab(!selectedTab);

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);
  return (
    <div>
      <h1>SingUpTemplate</h1>
      <Typography
        textSize="text-lg"
        fontWeight="font-medium"
        textColor="text-[#5D7A93]"
        label="Typography"
      />
      <GlobalInput width="w-40" placeholder="place holder" />
      <ShadcnDropdown items={dropdownDummyData} />
      <NumberingBox number={3} />
      <GlobalButton width="w-80" label="Global Button" />
      <ReverseButton width="w-80" label="Sub Button" />
      <SubButton label="Sub Button" />
      <IconButton icon="plus" />
      <RoundButton
        textColor="text-white"
        bgColor="bg-mancity"
        borderColor="border-mancity"
        hoverTextColor="hover:text-mancity"
        hoverBgColor="hover:bg-white"
        hoverBorderColor="hover:border-mancity"
        label="확정"
      />
      <ClubButton
        textColor="text-[#D4A11E]"
        bgColor="bg-white"
        borderColor="border-[#D4A11E]"
        hoverTextColor="hover:text-white"
        hoverBgColor="hover:bg-[#D4A11E]"
        label="클럽명"
      />
      <BoardPiece bgColor="bg-mancity" label="2" />
      <ContentBox width="w-10" height="h-10" rounded="rounded-none" />
      <TextareaContainer />
      <ShadcnSwitch checked={isSwitchOn} onCheckedChange={toggleSwitch} />
      <ShadcnTabs Tab1="영상" Tab2="잡담" onChange={toggleTab} />
      {!selectedTab && <div>영상 리스트입니다</div>}
      {selectedTab && <div>잡담 리스트입니다</div>}
      <CarouselSlick />
    </div>
  );
};

export default SingUpTemplate;
