import CommunityRegisterBody from "@/components/organisms/community_register_body/CommunityRegisterBody";
import Header from "@/components/organisms/header/Header";

const CommunityRegisterTemplate = () => {
  return (
    <div>
      <Header label="게시글 등록" backArrow={true} headerButton={false} />
      <CommunityRegisterBody />
    </div>
  );
};

export default CommunityRegisterTemplate;
