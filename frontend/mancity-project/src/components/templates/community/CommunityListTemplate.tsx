import CommunityBody from "@/components/organisms/community_list_body/CommunityListBody";
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
