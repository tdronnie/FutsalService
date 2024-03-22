import ClubDetailBody from "../organisms/club_detail_body/ClubDetailBody";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import { useNavigate } from "react-router-dom";

const ClubDetailTemplete = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <Header label="클럽 상세" backArrow={true} headerButton={false} />
      <ClubDetailBody />
      <Footer
        label="1800점 ∙ 36명/50명"
        buttonLabel="클럽 참여 신청"
        onButtonClick={onButtonClick}
      />
    </>
  );
};

export default ClubDetailTemplete;
