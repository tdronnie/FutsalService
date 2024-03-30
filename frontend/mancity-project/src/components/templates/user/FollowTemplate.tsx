import FollowBody from "@/components/organisms/follow_body/FollowBody";
import Header from "@/components/organisms/header/Header";

const FollowTemplate = ({ followListData }: followListDataType) => {
  return (
    <div>
      <Header label="친구목록" backArrow={true} headerButton={false} />
      <FollowBody followListData={followListData} />
    </div>
  );
};

export default FollowTemplate;
