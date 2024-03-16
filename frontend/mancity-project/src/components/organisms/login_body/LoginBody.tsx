import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import InputGroup from "@/components/molecules/input/InputGroup";
import { useState } from "react";

const LoginBody = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // useEffect(() => {
  //   console.log(emailValue);
  // }, [emailValue]);
  return (
    <div>
      <InputGroup
        typographyLabel="이메일"
        placeholder="email@ssafy.com"
        checking={false}
        textValue={emailValue}
        setTextValue={setEmailValue}
      />
      <InputGroup
        typographyLabel="비밀번호"
        placeholder="8자 이상"
        checking={false}
        textValue={passwordValue}
        setTextValue={setPasswordValue}
      />
      <GlobalButton label="로그인" width="w-full" />
    </div>
  );
};

export default LoginBody;
