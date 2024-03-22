import CommunityDetailBody from "@/components/organisms/community_detail_body/CommunityDetailBody";
import CommunityDetailHeader from "@/components/organisms/community_detail_header/CommunityDetailHeader";
import Header from "@/components/organisms/header/Header";

const CommunityDetailTemplate = () => {
  return (
    <div>
      <Header label="커뮤니티 상세" backArrow={true} headerButton={false} />
      <CommunityDetailHeader />
      <CommunityDetailBody />
    </div>
  );
};

export default CommunityDetailTemplate;
