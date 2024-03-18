import Header from "@/components/molecules/header/Header";
import ProfileMyGames from "@/components/organisms/profile_last_games/ProfileMyGames";
import ProfileUserInfo from "@/components/organisms/profile_userInfo/ProfileUserInfo";
import ProfileUserStats from "@/components/organisms/profile_userStats/ProfileUserStats";

const ProfileTemplate = () => {
  return (
    <div>
      <Header label="프로필" />
      <ProfileUserInfo />
      <ProfileUserStats />
      <ProfileMyGames />
    </div>
  );
};

export default ProfileTemplate;
