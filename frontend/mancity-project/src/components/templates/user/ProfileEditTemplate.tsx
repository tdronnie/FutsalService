import Header from "@/components/organisms/header/Header";
import ProfileEditBody from "@/components/organisms/profile_edit_body/ProfileEditBody";

const ProfileEditTemplate = ({
  userInfoData,
  isLoading,
}: UserInfoPropsType) => {
  return (
    <div>
      {!isLoading && (
        <div>
          <Header label="프로필 수정" backArrow={true} headerButton={false} />
          <ProfileEditBody userInfoData={userInfoData} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};

export default ProfileEditTemplate;
