import { joinClubApi } from "@/apis/clubApis";
import ClubDetailBody from "../../organisms/club_detail_body/ClubDetailBody";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import useUserStore from "@/stores/userStore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ClubDetailTemplete = () => {
  const userNickname = useUserStore((state) => state.nickName);
  const userId = useUserStore((state) => state.id);
  const { club_id } = useParams<{ club_id: string }>();
  const clubId = Number(club_id);

  const navigate = useNavigate();

  const onButtonClick = () => {
    joinClubApi(userId, clubId).then((club) => {
      Swal.fire({
        title: "참여 신청 완료",
        text: "클럽원의 수락을 기다려주세요!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "확인",
      });
    }).catch((error) => {
      Swal.fire({
        title: "신청 에러",
        html: "참여 신청이 불가능합니다. 죄송합니다.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
    })
  };
  return (
    <>
      <Header label="클럽 상세" backArrow={true} headerButton={false} />
      <ClubDetailBody />

      {/* Footer의 크기만큼 스크롤이 되지 않아서 공백 삽입 */}
      <div className="h-20"></div>

      <Footer
        label={`${userNickname}님, 어서오세요!`}
        buttonLabel="클럽 참여 신청"
        onButtonClick={onButtonClick}
      />
    </>
  );
};

export default ClubDetailTemplete;
