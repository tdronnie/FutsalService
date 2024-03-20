import { useEffect, useState } from "react";
import Dropdown from "../molecules/dropdown/Dropdown";
import Header from "../organisms/header/Header";
import GlobalButton from "../atoms/global_button/GlobalButton";

const MatchFilterTemplate = () => {
  // 성별
  const GenderInfo = [
    { value: 1, label: "남성" },
    { value: 2, label: "여성" },
    { value: 3, label: "혼성" },
  ];
  const [genderLabel, setGenderLabel] = useState("성별");
  const [genderValue, setGenderValue] = useState(0);

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

  // 인원
  const RuleInfo = [
    { value: 1, label: "5vs5" },
    { value: 2, label: "6vs6" },
  ];
  const [ruleLabel, setRuleLabel] = useState("인원");
  const [ruleValue, setRuleValue] = useState(0);

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

  useEffect(() => {
    // 모든 입력값의 유효성 검사
    const isValid =
      genderValue !== 0 ||
      locationValue !== 0 ||
      ruleValue !== 0 ||
      levelValue !== 0;

    setIsFormValid(isValid);
  }, [genderValue, locationValue, ruleValue, levelValue]);

  return (
    <>
      <Header label="필터" backArrow={true} headerButton={false} />
      <Dropdown
        typographyLabel="성별"
        items={GenderInfo}
        position={genderLabel}
        setPosition={setGenderLabel}
        setNumberValue={setGenderValue}
      />
      <Dropdown
        typographyLabel="지역"
        items={LocationInfo}
        position={locationLabel}
        setPosition={setLocationLabel}
        setNumberValue={setLocationValue}
      />
      <Dropdown
        typographyLabel="인원"
        items={RuleInfo}
        position={ruleLabel}
        setPosition={setRuleLabel}
        setNumberValue={setRuleValue}
      />
      <Dropdown
        typographyLabel="수준"
        items={LevelInfo}
        position={levelLabel}
        setPosition={setLevelLabel}
        setNumberValue={setLevelValue}
      />
      <div className="flex justify-end mt-6">
        <GlobalButton width="w-60" label="필터 적용" isdisabled={isFormValid} />
      </div>
    </>
  );
};

export default MatchFilterTemplate;
