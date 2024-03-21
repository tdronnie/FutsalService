import Header from "@/components/organisms/header/Header";
import MatchRegisterBody from "@/components/organisms/match_register_body/MatchRegisterBody";

const MatchRegisterTemplate = () => {
  return (
    <div>
      <Header label="매치 등록" backArrow={true} headerButton={false} />
      <MatchRegisterBody />
    </div>
  );
};

export default MatchRegisterTemplate;
