import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import Dropdown from "@/components/molecules/dropdown/Dropdown";
import InputGroup from "@/components/molecules/input_group/InputGroup";
import { useEffect, useState } from "react";

const MatchRegisterBody = () => {
  // 성별
  const GenderInfo = [
    { value: 1, label: "남성" },
    { value: 2, label: "여성" },
    { value: 3, label: "혼성" },
  ];
  const [genderLabel, setGenderLabel] = useState("성별");
  const [genderValue, setGenderValue] = useState(0);

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
    const isValid = genderValue !== 0 && ruleValue !== 0 && levelValue !== 0;

    setIsFormValid(isValid);
  }, [genderValue, ruleValue, levelValue]);

  return (
    <div>
      <div>
        <InputGroup typographyLabel="날짜" checking={false} />
      </div>
      <div>시간은 드롭다운으로 하면 안될듯</div>
      <div>장소검색은 콤보박스</div>
      <div>
        <Dropdown
          typographyLabel="성별"
          items={GenderInfo}
          position={genderLabel}
          setPosition={setGenderLabel}
          setNumberValue={setGenderValue}
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
      </div>{" "}
      <div className="flex justify-end mt-6">
        <ReverseButton
          width="w-60"
          label="매치 등록하기"
          isdisabled={isFormValid}
        />
      </div>
    </div>
  );
};

export default MatchRegisterBody;
