import Header from "@/components/organisms/header/Header";
import ProfileEditBody from "@/components/organisms/profile_edit_body/ProfileEditBody";

const ProfileEditTemplete = () => {
  return (
    <div>
      <Header label="프로필 수정" backArrow={true} headerButton={false} />
      <ProfileEditBody />
    </div>
  );
};

export default ProfileEditTemplete;
