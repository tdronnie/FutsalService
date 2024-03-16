import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import Dropdown from "@/components/molecules/dropdown/Dropdown";
import InputGroup from "@/components/molecules/input/InputGroup";

const SignUpBody = () => {
  const GenderInfo = [
    { value: 1, label: "남자" },
    { value: 2, label: "여자" },
  ];

  const MainFootInfo = [
    { value: 1, label: "왼발" },
    { value: 2, label: "오른발" },
  ];
  return (
    <div>
      <InputGroup
        typographyLabel="이메일"
        placeholder="email@ssafy.com"
        checking={true}
      />
      <InputGroup
        typographyLabel="비밀번호"
        placeholder="8자리 이상"
        checking={false}
      />
      <InputGroup
        typographyLabel="비밀번호 확인"
        placeholder="8자리 이상"
        checking={false}
      />
      <InputGroup typographyLabel="닉네임" checking={true} />
      <InputGroup
        typographyLabel="생년월일"
        placeholder="ex) 990503"
        checking={false}
      />
      <div className="flex flex-row ">
        <div className="w-2/4">
          <Dropdown typographyLabel="성별" items={GenderInfo} />
        </div>
        <div className="w-2/4">
          <Dropdown typographyLabel="주발" items={MainFootInfo} />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="w-2/4">
          <InputGroup typographyLabel="키" placeholder="175" checking={false} />
        </div>
        <div className="w-2/4">
          <InputGroup
            typographyLabel="몸무게"
            placeholder="70"
            checking={false}
          />
        </div>
      </div>
      <GlobalButton width="w-full" label="회원가입" />
    </div>
  );
};

export default SignUpBody;
