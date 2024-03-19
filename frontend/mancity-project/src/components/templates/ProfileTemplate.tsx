import GroupGlobalCard from "@/components/organisms/group_global_card/GroupGlobalCard";
import GroupHighlightCard from "@/components/organisms/group_highlight_card/GroupHighlightCard";
import Header from "@/components/organisms/header/Header";
import ProfileUserInfo from "@/components/organisms/profile_userInfo/ProfileUserInfo";
import ProfileUserStats from "@/components/organisms/profile_userStats/ProfileUserStats";

const ProfileTemplate = () => {
  return (
    <div>
      <Header label="프로필" backArrow={true} headerButton={false} />
      <ProfileUserInfo />
      <ProfileUserStats />
      <GroupGlobalCard />
      <GroupHighlightCard />
    </div>
  );
};

export default ProfileTemplate;
