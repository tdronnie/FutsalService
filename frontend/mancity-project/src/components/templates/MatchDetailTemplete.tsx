import MiniMap from "@/components/molecules/mini_map/MiniMap";
import Header from "@/components/organisms/header/Header";
import MatchDetailHeader from "@/components/organisms/match_detail_header/MatchDetailHeader";

const MatchDetailTemplete = () => {
  return (
    <div>
      <Header label="매치 상세" backArrow={true} headerButton={false} />
      <MatchDetailHeader />
      <MiniMap />
    </div>
  );
};

export default MatchDetailTemplete;
