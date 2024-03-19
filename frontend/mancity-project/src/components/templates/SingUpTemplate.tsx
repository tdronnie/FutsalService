import Header from "@/components/organisms/header/Header";
import SignUpBody from "@/components/organisms/signup_body/SignUpBody";

const SingUpTemplate = () => {
  return (
    <div>
      <Header label="회원가입" backArrow={true} headerButton={false} />
      <SignUpBody />
    </div>
  );
};

export default SingUpTemplate;
