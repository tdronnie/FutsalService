import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import Typography from "@/components/atoms/typography/Typography";
import InputGroup from "@/components/molecules/input/InputGroup";
import { useEffect, useState } from "react";

const LoginBody = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [LoginError, setLoginError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return re.test(password);
  };

  useEffect(() => {
    const isValid =
      validateEmail(emailValue) && validatePassword(passwordValue);
    setIsFormValid(isValid);
  }, [emailValue, passwordValue]);

  const onSubmitLogin = () => {
    console.log("로그인 정보 제출");
    setLoginError("이메일 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.");
  };

  return (
    <div>
      <InputGroup
        typographyLabel="이메일"
        placeholder="ssafy@email.com"
        checking={false}
        textValue={emailValue}
        setTextValue={setEmailValue}
      />
      <InputGroup
        typographyLabel="비밀번호"
        placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
        checking={false}
        textValue={passwordValue}
        setTextValue={setPasswordValue}
      />
      <div className="text-mancity mx-4 -mt-2 mb-2 ">
        {LoginError !== "" && (
          <Typography textSize="text-sm" label={LoginError} />
        )}
      </div>
      <div onClick={onSubmitLogin}>
        <GlobalButton label="로그인" width="w-full" isdisabled={isFormValid} />
      </div>
    </div>
  );
};

export default LoginBody;
