import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import InputGroup from "@/components/molecules/input/InputGroup";

const LoginBody = () => {
  return (
    <div>
      <InputGroup
        typographyLabel="이메일"
        placeholder="email@ssafy.com"
        checking={false}
      />
      <InputGroup
        typographyLabel="비밀번호"
        placeholder="8자 이상"
        checking={false}
      />
      <GlobalButton label="로그인" width="w-full" />
    </div>
  );
};

export default LoginBody;
