import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import Dropdown from "@/components/molecules/dropdown/Dropdown";
import InputGroup from "@/components/molecules/input/InputGroup";
import { useEffect, useState } from "react";

const SignUpBody = () => {
  const GenderInfo = [
    { value: 1, label: "남자" },
    { value: 2, label: "여자" },
  ];

  const [genderPosition, setGenderPosition] = useState("click");
  const [genderValue, setGenderValue] = useState(0);

  const MainFootInfo = [
    { value: 1, label: "왼발" },
    { value: 2, label: "오른발" },
  ];

  const [mainFootPosition, setMainFootPosition] = useState("click");
  const [mainFootValue, setMainFootValue] = useState(0);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [secondPasswordValue, setSecondPasswordValue] = useState("");
  const [nickNameValue, setNickNameValue] = useState("");
  const [birthValue, setBirthValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");

  useEffect(() => {
    console.log(genderPosition, genderValue);
    console.log(mainFootPosition, mainFootValue);
  }, [genderValue, mainFootValue]);
  return (
    <div>
      <InputGroup
        typographyLabel="이메일"
        placeholder="email@ssafy.com"
        checking={true}
        textValue={emailValue}
        setTextValue={setEmailValue}
      />
      <InputGroup
        typographyLabel="비밀번호"
        placeholder="8자리 이상"
        checking={false}
        textValue={passwordValue}
        setTextValue={setPasswordValue}
      />
      <InputGroup
        typographyLabel="비밀번호 확인"
        placeholder="8자리 이상"
        checking={false}
        textValue={secondPasswordValue}
        setTextValue={setSecondPasswordValue}
      />
      <InputGroup
        typographyLabel="닉네임"
        checking={true}
        textValue={nickNameValue}
        setTextValue={setNickNameValue}
      />
      <InputGroup
        typographyLabel="생년월일"
        placeholder="ex) 990503"
        checking={false}
        textValue={birthValue}
        setTextValue={setBirthValue}
      />
      <div className="flex flex-row ">
        <div className="w-2/4">
          <Dropdown
            typographyLabel="성별"
            items={GenderInfo}
            position={genderPosition}
            setPosition={setGenderPosition}
            setNumberValue={setGenderValue}
          />
        </div>
        <div className="w-2/4">
          <Dropdown
            typographyLabel="주발"
            items={MainFootInfo}
            position={mainFootPosition}
            setPosition={setMainFootPosition}
            setNumberValue={setMainFootValue}
          />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-2/4">
          <InputGroup
            typographyLabel="키"
            placeholder="175"
            checking={false}
            textValue={heightValue}
            setTextValue={setHeightValue}
          />
        </div>
        <div className="w-2/4">
          <InputGroup
            typographyLabel="몸무게"
            placeholder="70"
            checking={false}
            textValue={weightValue}
            setTextValue={setWeightValue}
          />
        </div>
      </div>
      <GlobalButton width="w-full" label="회원가입" />
    </div>
  );
};

export default SignUpBody;
