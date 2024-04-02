import GroupHighlightCard from "@/components/organisms/group_highlight_card/GroupHighlightCard";
import Header from "@/components/organisms/header/Header";
import ProfileUserInfo from "@/components/organisms/profile_userInfo/ProfileUserInfo";
import ProfileUserStats from "@/components/organisms/profile_userStats/ProfileUserStats";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const ProfileTemplate = ({ profileData }: ProfilePropsType) => {
  const { user_id } = useParams<{ user_id: string }>();
  const navigate = useNavigate();

  // 로그아웃 함수
  const handleLogout = () => {
    Swal.fire({
      title: "로그아웃",
      text: "정말로 로그아웃 하시겠습니까?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear(); // 로컬 스토리지 데이터를 모두 삭제
        navigate("/entry");
      }
    });
  };

  return (
    <div>
      {profileData && (
        <div>
          <Header
            label="프로필"
            backArrow={true}
            headerButton={false}
            buttonLabel="정보 수정"
            toWhere={`/profile/edit/${user_id}`}
          />
          <ProfileUserInfo profileData={profileData} />
          <ProfileUserStats profileData={profileData} />
          <GroupHighlightCard />
        </div>
      )}
      {/* 로그아웃 */}
      <div
        className="flex justify-end mr-8 cursor-pointer"
        onClick={handleLogout}
      >
        <FontawsomeIcon icon="arrow-right-from-bracket" size="1x" color="red" />
        <button className="text-red-500">로그아웃</button>
      </div>
    </div>
  );
};

export default ProfileTemplate;
