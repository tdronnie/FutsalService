import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import MatchDetailBody from "@/components/organisms/match_detail_body/MatchDetailBody";
import MatchDetailHeader from "@/components/organisms/match_detail_header/MatchDetailHeader";
import { useNavigate } from "react-router-dom";

const MatchDetailTemplate = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Header label="매치 상세" backArrow={true} headerButton={false} />
      <MatchDetailHeader />
      <MatchDetailBody />
      <Footer
        label="남자 ∙ 5vs5 ∙ 중 수준"
        buttonLabel="매치 참여 신청"
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default MatchDetailTemplate;
