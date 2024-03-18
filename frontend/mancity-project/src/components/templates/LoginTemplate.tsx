import Header from "@/components/organisms/header/Header";
import LoginBody from "@/components/organisms/login_body/LoginBody";

const LoginTemplate = () => {
  return (
    <div>
      <Header label="로그인" />
      <LoginBody />
    </div>
  );
};

export default LoginTemplate;
