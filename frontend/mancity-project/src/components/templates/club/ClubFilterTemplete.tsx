import { useEffect, useState } from "react";
import Dropdown from "../../molecules/dropdown/Dropdown";
import Header from "../../organisms/header/Header";
import GlobalButton from "../../atoms/global_button/GlobalButton";
import GlobalSwitch from "../../molecules/global_switch/GlobalSwitch";

const ClubFilterTemplete = () => {
  // 지역
  const LocationInfo = [
    { value: 1, label: "서울" },
    { value: 2, label: "경기" },
    { value: 3, label: "광주" },
    { value: 4, label: "대구" },
    { value: 5, label: "대전" },
    { value: 6, label: "인천" },
    { value: 7, label: "강원" },
    { value: 8, label: "경상" },
    { value: 9, label: "부산" },
    { value: 10, label: "세종" },
    { value: 11, label: "울산" },
    { value: 12, label: "전라" },
    { value: 13, label: "제주" },
    { value: 14, label: "충청" },
  ];
  const [locationLabel, setLocationLabel] = useState("지역");
  const [locationValue, setLocationValue] = useState(0);

  // 수준
  const LevelInfo = [
    { value: 1, label: "하수준" },
    { value: 2, label: "중수준" },
    { value: 3, label: "상수준" },
  ];
  const [levelLabel, setLevelLabel] = useState("수준");
  const [levelValue, setLevelValue] = useState(0);

  // 유효성 검사 상태 추가
  const [isFormValid, setIsFormValid] = useState(false);

  // 스위치 온오프 체크용
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  useEffect(() => {
    // 하나라도 선택을 해야함! 하나도 안하면 버튼 비활성화
    const isValid =
      locationValue !== 0 || isSwitchOn !== false || levelValue !== 0;

    setIsFormValid(isValid);
  }, [locationValue, levelValue, isSwitchOn]);

  return (
    <>
      <Header label="필터" backArrow={true} headerButton={false} />
      <Dropdown
        MyTypographyLabel="지역"
        items={LocationInfo}
        position={locationLabel}
        setPosition={setLocationLabel}
        setNumberValue={setLocationValue}
      />
      <Dropdown
        MyTypographyLabel="수준"
        items={LevelInfo}
        position={levelLabel}
        setPosition={setLevelLabel}
        setNumberValue={setLevelValue}
      />
      <GlobalSwitch
        label="인원만료"
        isSwitchOn={isSwitchOn}
        setIsSwitchOn={setIsSwitchOn}
        switchMarginTop="mt-0"
      />
      <div className="flex justify-end mt-6">
        <GlobalButton width="w-60" label="필터 적용" isdisabled={isFormValid} />
      </div>
    </>
  );
};

export default ClubFilterTemplete;
