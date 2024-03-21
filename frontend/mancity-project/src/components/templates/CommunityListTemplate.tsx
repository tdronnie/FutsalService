import CommunityBody from "@/components/organisms/community_body/CommunityBody";
import Header from "@/components/organisms/header/Header";

const CommunityListTemplate = () => {
  return (
    <div>
      <Header
        label="커뮤니티"
        backArrow={false}
        headerButton={true}
        buttonLabel="작성하기"
        toWhere="/community/register"
      />
      <CommunityBody />
    </div>
  );
};

export default CommunityListTemplate;
