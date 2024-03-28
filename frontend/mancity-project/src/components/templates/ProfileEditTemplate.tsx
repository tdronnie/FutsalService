import Header from "@/components/organisms/header/Header";
import ProfileEditBody from "@/components/organisms/profile_edit_body/ProfileEditBody";

const ProfileEditTemplate = ({ userInfoData }: UserInfoPropsType) => {
  return (
    <div>
      <Header label="프로필 수정" backArrow={false} headerButton={false} />
      <ProfileEditBody userInfoData={userInfoData} />
    </div>
  );
};

export default ProfileEditTemplate;
