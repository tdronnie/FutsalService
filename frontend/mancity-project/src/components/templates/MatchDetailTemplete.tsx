import Header from "@/components/organisms/header/Header";
import MatchDetailBody from "@/components/organisms/match_detail_body/MatchDetailBody";
import MatchDetailHeader from "@/components/organisms/match_detail_header/MatchDetailHeader";

const MatchDetailTemplete = () => {
  return (
    <div>
      <Header label="매치 상세" backArrow={true} headerButton={false} />
      <MatchDetailHeader />
      <MatchDetailBody />
    </div>
  );
};

export default MatchDetailTemplete;
